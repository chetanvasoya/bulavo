import React, { useState ,useEffect} from 'react';
import "./Complain.css";
import img1 from "../../Components/img/Screenshot 2024-01-31 at 3.39.09 PM.png";
import { getFirestore, collection, addDoc,Timestamp  } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
const Complain = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        category: '',
        address: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        contact: '',
        address: '',
    });
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name || formData.name.length < 3) {
            newErrors.name = 'Name must be at least 3 characters long.';
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailPattern.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }
        const contactPattern = /^[0-9]{10}$/;
        if (!formData.contact || !contactPattern.test(formData.contact)) {
            newErrors.contact = 'Please enter a valid 10-digit contact number.';
        }
        if (!formData.address || formData.address.length < 5) {
            newErrors.address = 'Address must be at least 5 characters long.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            toast.error("Please fix the errors in the form.");
            return;
        }
        const db = getFirestore(); // Initialize Firestore database
        const appointmentsCollection = collection(db, 'Appointment');
        try {
            const docRef = await addDoc(appointmentsCollection, {
                name: formData.name,
                email: formData.email,
                contact: formData.contact,
                category: formData.category,
                address: formData.address,
                submissionTime: Timestamp.now()
            });
            console.log('Document written with ID: ', docRef.id);
            // Optionally, you can reset the form after submission
            setFormData({
                name: '',
                email: '',
                contact: '',
                category: 'A.C. Repair & service',
                address: ''
            });
            toast.success("Data sent successfully");
            setTimeout(() => {
                navigate('/');
            }, 2000); 
        } catch (error) {
            console.error('Error adding document: ', error);
            toast.error("Something went wrong");
        }
    };
    const location = useLocation();
    useEffect(() => {
        const getQueryParam = (name) => {
            return new URLSearchParams(location.search).get(name);
        };
        const categorySelect = document.getElementById('category');
        if (!categorySelect) {
            console.error('Category select element not found');
            return;
        }
        const serviceType = getQueryParam('service');
        console.log('categorySelect.value:', categorySelect.value);
        console.log('serviceType:', serviceType);
        if (serviceType) {
            const decodedServiceType = decodeURIComponent(serviceType);
            console.log('decodedServiceType:', decodedServiceType);
            const optionExists = Array.from(categorySelect.options).some(option => option.value === decodedServiceType);
            if (optionExists) {
                categorySelect.value = decodedServiceType;
                setFormData(prevState => ({
                    ...prevState,
                    category: decodedServiceType
                }));
            } else {
                console.warn(`Option with value "${decodedServiceType}" not found in select element`);
            }
        }
    }, [location]);
    return (
        <>
         <ToastContainer />
            <div className="blur-background" id="blurBackground">
                <img src={img1} alt="Background Image" />
            </div>
            <div className="transparent-form" id="transparentForm" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <form onSubmit={handleSubmit}>
                    <p className="mobilenumber">For immediate assistance, please call us at <strong><a href="tel:+919328939099">093289 39099</a></strong>.</p>
                    <h2 className="highlight-caption">Submit your request</h2>
                    <label>Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required value={formData.name} onChange={handleChange} />
                    {errors.name && <p className="error">{errors.name}</p>}
                    <label>Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required value={formData.email} onChange={handleChange} />
                    {errors.email && <p className="error">{errors.email}</p>}
                    <label>Contact Number:</label>
                    <input type="tel" id="contact" name="contact" placeholder="Enter your contact number" value={formData.contact} onChange={handleChange} />
                    {errors.contact && <p className="error">{errors.contact}</p>}
                    <label>Category:</label>
                    <select id="category" name="category" required value={formData.category} onChange={handleChange}>
                    <option value="" disabled>Please select the service</option>
                        <option value="A.C. Repair & service">A.C. Repair & service</option>
                        <option value="Washing Machine Repair & service">Washing Machine Repair & service</option>
                        <option value="Refrigerator Repair & service">Refrigerator Repair & service</option>
                        <option value="Microwave oven Repair & service">Microwave oven Repair & service</option>
                        <option value="Geyser Repair & service">Geyser Repair & service</option>
                        <option value="T.V Repair & service">T.V Repair & service</option>
                        <option value="Air cooler Repair & service">Air cooler Repair & service</option>
                        <option value="Chimny Repair & service">Chimny Repair & service</option>
                        <option value="Mixer Repair & service">Mixer Repair & service</option>
                        <option value="Water-heater Repair & service">Water-heater Repair & service</option>
                        <option value="R.O water purifier Repair & service">R.O water purifier Repair & service</option>
                    </select>
                    <label>Enter your address:</label>
                    <input type="text" id="address" name="address" placeholder="Address" required value={formData.address} onChange={handleChange} />
                    {errors.address && <p className="error">{errors.address}</p>}<br />
                    <button id="submitButton" type="submit" className="button">Submit</button>
                    <button className="whatsapp-button button">
                        <i style={{ color: "#FFFFFF" }} className="fab fa-whatsapp"></i>
                    </button>
                </form>
            </div>
        </>
    );
};
export default Complain;