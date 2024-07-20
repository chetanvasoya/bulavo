import React, { useState, useEffect } from 'react';
import { getFirestore, collection, query, where, orderBy, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { CiLogout } from "react-icons/ci";
import { useHistory, useNavigate } from 'react-router-dom';

import './Dashbord.css';
const db = getFirestore();
const storage = getStorage();
const App = () => {
  const [dashboard, setDashboard] = useState(1);
  const [appointments, setAppointments] = useState([]);
  const [currentPageAppointments, setCurrentPageAppointments] = useState(1);
  const [images, setImages] = useState([]);
  const [currentPageImages, setCurrentPageImages] = useState(1);
  const [filter, setFilter] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('01');
  const [modalImage, setModalImage] = useState(null);
  const pageSize = 10;
  const totalPages = Math.ceil(appointments.length / pageSize);
  const totalPagesImages = Math.ceil(images.length / pageSize);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [showImageConfirm, setShowImageConfirm] = useState(false);
  const [deleteImageId, setDeleteImageId] = useState(null);


  // Fetch appointments
  const fetchAppointments = async () => {
    try {
      let q = query(collection(db, 'Appointment'), orderBy('submissionTime', 'desc'));
      if (filter === 'pending') q = query(q, where('isPending', '==', true));
      else if (filter === 'completed') q = query(q, where('isPending', '==', false));

      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc, index) => ({
        id: doc.id,
        ...doc.data(),
        index: index + 1,
      }));

      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments: ", error);
    }
  };

  // Fetch images
  // Fetch images
  const fetchImages = async () => {
    try {
      const q = query(collection(db, 'images'), orderBy('submissionTime', 'desc'));
      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc, index) => {
        const docData = doc.data();

        return {
          id: doc.id,
          ...docData,
          aadharUrl: docData.aadharURL || 'path/to/default/aadhar/image.jpg',
          photoUrl: docData.photoURL || 'path/to/default/photo/image.jpg',
          index: index + 1,
        };
      });

      setImages(data);
    } catch (error) {
      console.error("Error fetching images: ", error);
    }
  };
  // Export data to CSV
  const exportData = async () => {
    try {
      const startOfMonth = new Date(2024, selectedMonth - 1, 1);
      const endOfMonth = new Date(2024, selectedMonth, 0);

      const appointmentSnapshot = await getDocs(query(
        collection(db, 'Appointment'),
        where('submissionTime', '>=', startOfMonth),
        where('submissionTime', '<=', endOfMonth)
      ));

      const imageSnapshot = await getDocs(query(
        collection(db, 'images'),
        where('submissionTime', '>=', startOfMonth),
        where('submissionTime', '<=', endOfMonth)
      ));

      const appointmentData = appointmentSnapshot.docs.map(doc => doc.data());
      const imageData = imageSnapshot.docs.map(doc => doc.data());

      if (appointmentData.length === 0 && imageData.length === 0) {
        alert("Selected month has no data.");
      } else {
        downloadCSV(appointmentData, "Appointments.csv");
        downloadCSV(imageData, "Expert.csv");
      }
    } catch (error) {
      console.error("Error exporting data: ", error);
    }
  };

  // Download CSV
  const downloadCSV = (data, fileName) => {
    if (!data || data.length === 0) {
      console.error("Data is empty or undefined.");
      return;
    }

    const fields = Object.keys(data[0]);
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Sr No.," + fields.join(",") + "\n";

    data.forEach((doc, index) => {
      let rowData = [index + 1];
      fields.forEach(field => {
        let value = doc[field];
        if (field === 'submissionTime') {
          value = new Date(value.seconds * 1000 + value.nanoseconds / 1000000).toLocaleString();
        } else if (typeof value === 'object' && value !== null) {
          value = JSON.stringify(value);
        }
        value = value ? value.toString().replace(/"/g, '""') : "";
        if (value.includes(" ")) {
          value = `"${value}"`;
        }
        rowData.push(value);
      });
      csvContent += rowData.join(",") + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
  };

  // Update appointment checkbox
  const handleCheckboxClick = async (docId, isChecked, field) => {
    try {
      const docRef = doc(db, 'Appointment', docId);
      let updateData = {};
      if (field === 'isCompleted') {
        updateData = {
          isCompleted: isChecked,
          isPending: !isChecked // If completed, it's not pending
        };
      } else if (field === 'isPending') {
        updateData = {
          isPending: isChecked,
          isCompleted: !isChecked // If pending, it's not completed
        };
      }
      await updateDoc(docRef, updateData);
      fetchAppointments();
    } catch (error) {
      console.error("Error updating checkbox state:", error);
    }
  };

  // Delete appointment row
  const deleteAppointmentRow = async (id) => {
    setConfirmDelete(id);
  };

  const confirmDeleteAppointment = async () => {
    if (confirmDelete) {
      try {
        const docRef = doc(db, 'Appointment', confirmDelete);
        await deleteDoc(docRef);
        fetchAppointments();
      } catch (error) {
        console.error("Error deleting appointment document: ", error);
      }
      setConfirmDelete(null);
    }
  };

  const cancelDeleteAppointment = () => {
    setConfirmDelete(null);
  };

  // Update image checkbox
  const handleImageCheckbox = async (docId, isChecked) => {
    try {
      const docRef = doc(db, 'images', docId);
      await updateDoc(docRef, {
        isQuery: isChecked,
      });
      fetchImages();
    } catch (error) {
      console.error("Error updating checkbox state:", error);
    }
  };

  // Delete image row
  const deleteImagesRow = (id) => {
    setDeleteImageId(id);
    setShowImageConfirm(true);
  };
  const confirmImageDelete = async () => {
    if (deleteImageId) {
      try {
        const docRef = doc(db, 'images', deleteImageId);
        await deleteDoc(docRef);
        fetchImages();
      } catch (error) {
        console.error("Error deleting image document: ", error);
      }
    }
    setShowImageConfirm(false);
    setDeleteImageId(null);
  };

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const exit = () => {

  };
  useEffect(() => {
    fetchAppointments();
    fetchImages();
  }, []);
  const navigate = useNavigate(); // or useNavigate for React Router v6

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userToken');
    navigate("/login") // or navigate('/login') for React Router v6
  };


  return (

    <div className="App">
      {confirmDelete && (
        <div className="delete-popup">
          <p>Are you sure you want to delete this appointment?</p>
          <div className="flex justify-center">
            <button onClick={confirmDeleteAppointment}>Yes</button>
            <button onClick={cancelDeleteAppointment}>No</button>
          </div>
        </div>
      )}
      <div className='dash' style={{ textAlign: 'center'}}>
        {/* <h3>Bulavo Admin Panel</h3> */}
        <div className=" flex items-center justify-around md:justify-around p-1">
          <h3 className=" head text-center mt-0 md:mt-[10px] sm:text[10px]">Bulavo Admin Panel</h3>
          <CiLogout className="text-2xl mb-5 md:mt-2 cursor-pointer" onClick={handleLogout} />
        </div>
        
        <div className='button-group'>
            <button className="dashboard-btn" onClick={() => setDashboard(1)}>Appointments</button>
            <button className="dashboard-btn" onClick={() => setDashboard(2)}>Experts</button>
            {/* <button className="dashboard-btn" onClick={() => window.history.back()}>Logout</button> */}
          </div>

        {showImageConfirm && (
          <div className="delete-popup">
            <p>Are you sure you want to delete this image?</p>
            <div className="flex justify-center">
              <button onClick={confirmImageDelete} className='mx-3'>Yes</button>
              <button onClick={() => setShowImageConfirm(false)}>No</button>
            </div>
          </div>
        )}
      </div>

      <header className='header'>
        <div className='header-content'>
          
          <br />
          <div className='select-export'>
            <select className='month-select' onChange={(e) => setSelectedMonth(e.target.value)}>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <button className="dashboard-btn" onClick={exportData}>Export data</button>
            
          </div>
        </div>
        
        
      </header>

      {dashboard === 1 && (
        <div className="dashboard1">
          <div style={{ marginBottom: '10px', display: "flex", justifyContent: "center" }}>
            <select style={{ marginTop: '6px' }} className='month-select' onChange={(e) => setFilter(e.target.value)} >
              <option value="all">All Appointments</option>
              <option value="pending">Pending Appointments</option>
              <option value="completed">Completed Appointments</option>
            </select>
            <button className='fet' onClick={fetchAppointments}>Filter</button>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr className='tr'>
                  <th>Sr. No.</th>
                  <th>Complete</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Service Type</th>
                  <th>Address</th>
                  <th>Date</th>
                  <th>Pending</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {appointments.slice((currentPageAppointments - 1) * pageSize, currentPageAppointments * pageSize).map((appointment, index) => (
                  <tr key={appointment.id}>
                    <td>{appointment.index}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={appointment.isCompleted}
                        onChange={(e) => handleCheckboxClick(appointment.id, e.target.checked, 'isCompleted')}
                      />
                    </td>
                    <td>{appointment.name}</td>
                    <td>{appointment.contact}</td>
                    <td>{appointment.email}</td>
                    <td>{appointment.category}</td>
                    <td>{appointment.address}</td>
                    <td>{new Date(appointment.submissionTime.seconds * 1000 + appointment.submissionTime.nanoseconds / 1000000).toLocaleString()}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={appointment.isPending}
                        onChange={(e) => handleCheckboxClick(appointment.id, e.target.checked, 'isPending')}
                      />
                    </td>
                    <td>
                      <button onClick={() => deleteAppointmentRow(appointment.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pagination">
            <button className='pb' style={{ width: '10%' }}
              onClick={() => setCurrentPageAppointments(prev => Math.max(prev - 1, 1))}
              disabled={currentPageAppointments === 1}
            >
              Previous
            </button>
            <button className='pb' style={{ width: '10%' }}
              onClick={() => setCurrentPageAppointments(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPageAppointments === totalPages || appointments.length <= pageSize}
            >
              Next
            </button>
          </div>





        </div>
      )}

      {dashboard === 2 && (
        <div className="dashboard2">
          <div className="table-container">
            <table>
              <thead>
                <tr className='tr'>
                  <th>Sr. No.</th>
                  <th>Name</th>
                  <th>Contect No.</th>
                  <th>Email</th>
                  <th>Adhar card</th>
                  <th>photo</th>
                  <th>Date</th>
                  <th>Area</th>
                  <th>Contected</th>
                  <th>Delete</th>


                </tr>
              </thead>
              <tbody >
                {images.slice((currentPageImages - 1) * pageSize, currentPageImages * pageSize).map((image, index) => (
                  <tr key={image.id}>
                    <td>{image.index}</td>
                    <td>{image.name}</td>
                    <td>{image.contact}</td>
                    <td>{image.email}</td>
                    <td>
                      <img className='igg'
                        src={image.aadharUrl}
                        alt="Image"
                        onClick={() => openModal(image.aadharUrl)}
                        style={{ cursor: 'pointer' }}
                      />
                    </td>
                    <td>
                      <img className='igg'
                        src={image.photoUrl}
                        alt="Image"
                        onClick={() => openModal(image.photoUrl)}
                        style={{ cursor: 'pointer' }}
                      />
                    </td>
                    <td>{new Date(image.submissionTime.seconds * 1000 + image.submissionTime.nanoseconds / 1000000).toLocaleString()}</td>
                    <td>{image.area}</td>
                    <td>
                      <input
                        type="checkbox"
                        data-doc-id={image.id}
                        checked={image.isQuery}
                        onChange={(e) => handleImageCheckbox(image.id, e.target.checked)}
                      />
                    </td>

                    <td>
                      <button onClick={() => deleteImagesRow(image.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pagination">
            <button className='pb' style={{ width: '10%' }}
              onClick={() => setCurrentPageImages(prev => Math.max(prev - 1, 1))}
              disabled={currentPageImages === 1}
            >
              Previous
            </button>
            <button className='pb' style={{ width: '10%' }}
              onClick={() => setCurrentPageImages(prev => Math.min(prev + 1, totalPagesImages))}
              disabled={currentPageImages === totalPagesImages || images.length <= pageSize}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <div className="modal-content">
            <img id="modalImage" src={modalImage} alt="Modal" />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
