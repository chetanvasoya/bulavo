import React from 'react'
import logo from "../Components/img/logo.png"
import img29 from "../Components/img/plumbero-img038.png"
import img3 from "../Components/img/plumbero-img40.jpg"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from '../firebase.config';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Careerdetails = () => {
  const submissionTime = new Date();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    aadharURL: null,
    photoURL: null,
    expertise: '',
    area: '',
    isQuerry: false,
    submissionTime: submissionTime,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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
    if (!formData.aadhar) {
      newErrors.aadhar = 'Please upload your aadhar card photo.';
    }
    if (!formData.photo) {
      newErrors.photo = 'Please upload your photo.';
    }
    if (!formData.expertise || formData.expertise.length < 5) {
      newErrors.expertise = 'Please describe your expertise.';
    }
    if (!formData.area || formData.area.length < 3) {
      newErrors.area = 'Please specify the area where you want to work.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill valid informaion in the form.");
      return;
    }
    try {
      setLoading(true);
      const storage = getStorage();
      const aadharRef = ref(storage, `aadhar_cards/${formData.aadhar.name}`);
      const photoRef = ref(storage, `photos/${formData.photo.name}`);

      // Upload aadhar and photo to Firebase Storage
      await uploadBytes(aadharRef, formData.aadhar);
      await uploadBytes(photoRef, formData.photo);

      // Get download URLs
      const aadharURL = await getDownloadURL(aadharRef);
      const photoURL = await getDownloadURL(photoRef);

      // Add document to Firestore
      const docRef = await addDoc(collection(db, 'images'), {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        aadharURL: aadharURL,
        photoURL: photoURL,
        expertise: formData.expertise,
        area: formData.area,
        isQuerry: false,
        submissionTime: submissionTime,
      });
      // Get the document ID and update the document with the ID
      const appointmentId = docRef.id;
      const appointmentRef = doc(db, "images", appointmentId);
      await updateDoc(appointmentRef, {
        appointmentId: appointmentId
      });

      console.log("Document successfully written!");
      toast.success("Data sent successfully");
      setFormData({
        name: '',
        email: '',
        contact: '',
        aadharURL: null,
        photoURL: null,
        expertise: '',
        area: ''
      });


    } catch (error) {
      console.error("Error writing document: ", error);
      toast.error("Something went wrong")
    } finally {
      setLoading(false);
    }

  };

  useEffect(() => {
    // Google Analytics
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=AW-16506742396`;
    document.head.appendChild(gtagScript);

    gtagScript.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'AW-16506742396');
    };

    // Cloudflare
    const cfScript = document.createElement('script');
    cfScript.innerHTML = `
      (function () {
        var js = "window['__CF$cv$params']={r:'834e34f61c3218ab',t:'MTcwMjQ3MDUwNS45NzMwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='../../cdn-cgi/challenge-platform/h/b/scripts/jsd/56d3063b/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";
        var _0xh = document.createElement('iframe');
        _0xh.height = 1;
        _0xh.width = 1;
        _0xh.style.position = 'absolute';
        _0xh.style.top = 0;
        _0xh.style.left = 0;
        _0xh.style.border = 'none';
        _0xh.style.visibility = 'hidden';
        document.body.appendChild(_0xh);
        function handler() {
          var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;
          if (_0xi) {
            var _0xj = _0xi.createElement('script');
            _0xj.innerHTML = js;
            _0xi.getElementsByTagName('head')[0].appendChild(_0xj);
          }
        }
        if (document.readyState !== 'loading') {
          handler();
        } else if (window.addEventListener) {
          document.addEventListener('DOMContentLoaded', handler);
        } else {
          var prev = document.onreadystatechange || function () { };
          document.onreadystatechange = function (e) {
            prev(e);
            if (document.readyState !== 'loading') {
              document.onreadystatechange = prev;
              handler();
            }
          };
        }
      })();
    `;
    document.head.appendChild(cfScript);

    // DelightChat WhatsApp Widget
    const waScript = document.createElement('script');
    waScript.async = true;
    waScript.src = 'https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js';
    document.body.appendChild(waScript);

    waScript.onload = () => {
      const wa_btnSetting = {
        btnColor: '#16BE45',
        ctaText: '',
        cornerRadius: 40,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        btnPosition: 'left',
        whatsAppNumber: '91 9328939099',
        welcomeMessage: 'Hello BULAVO!',
        zIndex: 999999,
        btnColorScheme: 'light',
      };
      window._waEmbed(wa_btnSetting);
    };
    return () => {
      // Cleanup script elements if needed
      document.head.removeChild(gtagScript);
      document.head.removeChild(cfScript);
      document.body.removeChild(waScript);
    };
  }, []);
  const [activePanel, setActivePanel] = useState(null);

  const togglePanel = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    const offset = window.scrollY;
    console.log(offset)
    if (offset > 200) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>


      <div id="page" className="full-page">
        <header className={`site-header site-header-transparent ${scrolled ? "fixed-header" : ""}`} id="masthead">
          <div className="top-header">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-7 flex-grow-1">
                  <div className="schedule-wrapper d-flex justify-content-md-start justify-content-center flex-wrap flex-sm-nowrap">
                    <div className="header-schedule-info">
                      <i aria-hidden="true" className="far fa-clock"></i>
                      <span className="schedule-info">
                        Open : 9am - 5pm (Mon - Sat)
                      </span>
                    </div>
                    <div className="header-schedule-info">
                      <i aria-hidden="true" className="fas fa-map-marker-alt"></i>
                      <span className="schedule-info">
                        AHEMEDABAD
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 d-flex justify-content-sm-end justify-content-center align-items-center">
                  <div className="header-social social-links">
                    <ul>
                      <li>
                        <Link to="https://m.facebook.com/profile.php/?id=61553107342288&name=xhp_nt__fb__action__open_user"
                          target="_blank">
                          {/* <i classNameName="fab fa-facebook" aria-hidden="true"></i> */}
                          <i className="fa-brands fa-facebook" aria-hidden="true"></i>
                        </Link>
                      </li>

                      <li>
                        <Link to="https://www.instagram.com/bulavoservices/" target="_blank">
                          <i className="fab fa-instagram" aria-hidden="true"></i>
                        </Link>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mid-header">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="site-identity col-lg-3 col-md-4">
                  <p className="site-title">
                    <Link to="/">
                      <img src={logo} alt="logo" />
                    </Link>
                  </p>
                </div>
                <div
                  className=" mid-left-header col-md-6 d-flex align-items-center justify-content-md-end justify-content-between flex-grow-1 flex-wrap flex-sm-nowrap">
                  <div className="header-contact-info">
                    <Link to="tel:+91 93289 39099">
                      <div className="header-contact-inner">
                        <span className="icon">
                          <i className="fa-solid fa-phone" aria-hidden="true"></i>
                        </span>
                        <div className="details-content">
                          <span className="content-title">24*7 EMERGENCY SERVICES</span>
                          <h5>093289 39099</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <Link to="/complain" className="button-round-secondary appoinment-btn" >REQUEST AN
                    APPOINTMENT </Link>
               
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-header">
            <div className="container">
              <div className="hb-group d-flex align-items-center justify-content-between">
                <div className="site-identity col-lg-3">
                  <Link to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
                <div className="main-navigation col-lg-9">
                  <nav id="navigation" className="navigation d-none d-lg-inline-block">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About us</Link>
                      </li>
                      <li>
                        <Link to="/service">Services</Link>

                      </li>

                      <li>
                        <Link to="/blogarchive">Blog List</Link>

                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li className="current-menu-item">
                        <Link to="/careerdetails">Become a partner</Link>
                      </li>
                    </ul>
                  </nav>

                </div>
                {/* <div className="mobile-menu-container"></div> */}
                <div class="mobile-menu-container">
                  <div class="slicknav_menu">
                    <a href="#"
                      aria-haspopup="true"
                      role="button"
                      tabIndex="0"
                      className={`slicknav_btn ${menuOpen ? 'slicknav_open' : 'slicknav_closed'}`}
                      onClick={toggleMenu}
                      style={{ outline: "none" }}>
                      <span class="slicknav_menutxt">Menu</span>
                      <span class="slicknav_icon">
                        <span class="slicknav_icon-bar"></span>
                        <span class="slicknav_icon-bar"></span>
                        <span class="slicknav_icon-bar"></span>
                      </span>
                    </a>
                    {menuOpen && (
                      <nav class="slicknav_nav" aria-hidden="false" role="menu" i8a>
                        <ul>
                          <li >
                            <Link to="/" role="menuitem">Home</Link>
                          </li>
                          <li>
                            <Link to="/about" role="menuitem">About us</Link>
                          </li>
                          <li class="menu-item-has-children">
                            <Link to="/service" role="menuitem">Services</Link>
                            {/* <!-- <ul>
                                            <li>
                                                <a href="service.html">Services List</a>
                                            </li>
                                            <li>
                                                <a href="service-detail.html">Service Detail</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-list.html">Portfolio LIST</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-detail.html">Portfolio DETAILS</a>
                                            </li>
                                            <li>
                                                <a href="team.html">Our Team</a>
                                            </li>
                                            <li>
                                                <a href="team-deatil.html">Team DETAIL</a>
                                            </li>
                                            <li>
                                                <a href="career.html">CAREER</a>
                                            </li>
                                            <li>
                                                <a href="career-detail.html">CAREER DETAIL</a>
                                            </li>
                                            <li>
                                                <a href="faq.html">FAQ</a>
                                            </li>
                                            <li>
                                                <a href="testimonial.html">Testimonial</a>
                                            </li>
                                            <li>
                                                <a href="partner.html">Partner</a>
                                            </li>
                                            <li>
                                                <a href="search.html">Search Result</a>
                                            </li>
                                            <li>
                                                <a href="comming-soon.html">Coming Soon</a>
                                            </li>
                                            <li>
                                                <a href="404page.html">404 Page</a>
                                            </li>
                                            <li>
                                                <a href="single-page.html">Single Page</a>
                                            </li>
                                            <li>
                                                <a href="legal-notice.html">Legal Notice</a>
                                            </li>
                                            <li>
                                                <a href="reservation.html">Reservation</a>
                                            </li>
                                        </ul> --> */}
                          </li>
                          {/* <!-- <li class="menu-item-has-children">
                                        <a href="#">shop</a>
                                        <ul>
                                            <li>
                                                <a href="product-archive.html">Product list</a>
                                            </li>
                                            <li>
                                                <a href="product-detail.html">Single Product</a>
                                            </li>
                                            <li>
                                                <a href="product-cart.html">Shop Cart</a>
                                            </li>
                                            <li>
                                                <a href="product-checkout.html">Shop Checkout</a>
                                            </li>
                                            <li>
                                                <a href="account-page.html">Log In</a>
                                            </li>
                                        </ul>
                                    </li> --> */}
                          <li class="menu-item-has-children slicknav_collapsed slicknav_parent">
                            <span class="slicknav_parent-link slicknav_row">
                              <Link to="/blogarchive">blog</Link>
                            </span>
                          </li>
                          <li>
                            <Link to="/contact" role="menuitem">Contact</Link>
                          </li>
                          <li>
                            <Link to="/careerdetails" role="menuitem" className="current-menu-item">Become a partner</Link>
                          </li>
                        </ul>
                      </nav>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main id="content" className="site-main">
          <section className="inner-banner-wrap">
            {/* <div className="inner-baner-container" style="background-image: url(assets/img/plumbero-img40.jpg);"> */}
            <div className="inner-baner-container" style={{
              backgroundImage: `url(${img3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '30vh', // Adjust this to your desired height
              width: '100%', // Adjust this to your desired width
            }}>
              <div className="container">
                <div className="inner-banner-content">
                  <h1 className="inner-title">Work with us</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="career-detail-section">
            <div className="container">

              <div className="row">

                <div className="col-lg-8">
                  <div className="career-detail-container">
                    <div className="job-description">

                      <form id="form" onSubmit={handleSubmit}>
                        <h2
                          style={{
                            textAlign: 'center',
                            fontSize: '1.8em',
                            marginBottom: '30px',
                            color: '#0eabef',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                          }}
                        >
                          Become our partner
                        </h2>

                        <label htmlFor="name">Name:</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter your name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                        <br />
                        <label htmlFor="email" >Email:</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter your Email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className='email'
                        />

                        {errors.email && <p className="error">{errors.email}</p>}
                        <br />

                        <label htmlFor="contact">Contact:</label>
                        <input
                          type="tel"
                          id="contact"
                          name="contact"
                          placeholder="Enter your contact number"
                          required
                          value={formData.contact}
                          onChange={handleChange}
                          className='email'
                        />

                        {errors.contact && <p className="error">{errors.contact}</p>}
                        <br />

                        <label htmlFor="aadhar">Upload your aadhar-card photo:</label>
                        <input
                          type="file"
                          id="aadhar"
                          name="aadhar"
                          accept=".jpg, .jpeg, .png"
                          required
                          onChange={handleChange}
                        />

                        {errors.aadhar && <p className="error">{errors.aadhar}</p>}
                        <br />
                        <label htmlFor="photo">Upload your photo:</label>
                        <input
                          type="file"
                          id="photo"
                          name="photo"
                          accept=".jpg, .jpeg, .png"
                          required
                          onChange={handleChange}
                        />

                        {errors.photo && <p className="error">{errors.photo}</p>}
                        <br />
                        <label htmlFor="expertise">Tell us your expertise:</label>
                        <textarea
                          id="expertise"
                          name="expertise"
                          required
                          placeholder="A.C, Fridge, Washing machine etc. "
                          value={formData.expertise}
                          onChange={handleChange}
                        />

                        {errors.expertise && <p className="error">{errors.expertise}</p>}
                        <br />
                        <label htmlFor="area">In which area you want to work</label>
                        <textarea
                          id="area"
                          name="area"
                          required
                          placeholder="Nikol, Bapunagar, Naroda etc. "
                          value={formData.area}
                          onChange={handleChange}
                        />

                        {errors.area && <p className="error">{errors.area}</p>}
                        <br />
                        <button type="submit" disabled={loading}>
                          {loading ? 'Submitting...' : 'Submit'}
                        </button>
                      </form>
                    </div>

                  </div>
                </div>

                <div className="col-lg-4 order-lg-first">
                  <div className="sidebar">
                    <div className="widget-bg sidebar-list">
                      <h6 className="bg-title">How to apply?</h6>
                      <ul>
                        <li>
                          <i aria-hidden="true" className="fas fa-minus"></i>

                          <span className="list-txt">Fill the become a partner form</span>
                        </li>
                        <span className="or-style">OR</span>

                        <li>
                          <i aria-hidden="true" className="fas fa-minus"></i>
                          <span className="list-txt">Massage us on our Whasapp number</span>
                        </li>

                        <li>
                          <i aria-hidden="true" className="fas fa-minus"></i>
                          <span className="list-txt">Sociosqu scelerisque adipisci.</span>
                        </li>
                        <li>
                          <i aria-hidden="true" className="fas fa-minus"></i>
                          <span className="list-txt">Purus eveniet incidi dunt.</span>
                        </li>
                        <li>
                          <i aria-hidden="true" className="fas fa-minus"></i>
                          <span className="list-txt">Animi atque ornare iaculis.</span>
                        </li>
                      </ul>
                    </div>
                    <div className="widget-bg faq-widget">
                      <h6 className="bg-title">Frequently Asked Questions</h6>
                      <div id="sidebar-tab-content" className="accordion-content" role="tablist">

                        <div id="accordion-B" className="card tab-pane" role="tabpanel" aria-labelledby="tab-B">
                          <div className="card-header" role="tab" id="qus-B">
                            <h5 className="mb-0">
                              <a
                                className={activePanel === 'panel1' ? '' : 'collapsed'}
                                onClick={() => togglePanel('panel1')}
                                aria-expanded={activePanel === 'panel1'}
                                aria-controls="collapse-two"
                                style={{ cursor: 'pointer' }}
                              >
                                Rules for become a partner
                              </a>
                            </h5>
                          </div>
                          <div
                            id="collapse-two"
                            className={`collapse ${activePanel === 'panel1' ? 'show' : ''}`}
                            data-bs-parent="#sidebar-tab-content"
                            role="tabpanel"
                            aria-labelledby="qus-B"
                          >
                            <div className="card-body">
                              Fill the required fields in form
                            </div>
                          </div>
                        </div>

                        <div id="accordion-C" className="card tab-pane" role="tabpanel" aria-labelledby="tab-C">
                          <div className="card-header" role="tab" id="qus-C">
                            <h5 className="mb-0">
                              <a
                                className={activePanel === 'panel2' ? '' : 'collapsed'}
                                onClick={() => togglePanel('panel2')}
                                aria-expanded={activePanel === 'panel2'}
                                aria-controls="collapse-three"
                                style={{ cursor: 'pointer' }}
                              >
                                Where to Interview?
                              </a>
                            </h5>
                          </div>
                          <div
                            id="collapse-three"
                            className={`collapse ${activePanel === 'panel2' ? 'show' : ''}`}
                            data-bs-parent="#sidebar-tab-content"
                            role="tabpanel"
                            aria-labelledby="qus-C"
                          >
                            <div className="card-body">
                              GF-001 Mayuransh elanza, Shyamal cross road, nr. Parekh hospital, Satellite, Ahmedabad
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-bg upload-widget text-center">
                      <div className="widget-icon">
                        <i className="fas fa-file-invoice"></i>
                      </div>
                      <h5>Send Us Your C.V.</h5>
                      <p>Do you want to work with us? Please, send your CV to <a
                        href="https://demo.bosathemes.com/cdn-cgi/l/email-protection#e98d8684888087d8dbdaa98e84888085c78a8684"><span
                          className="__cf_email__"
                          data-cfemail="ff9b90929e9691cecdccbf98929e9693d19c9092">bulavoservices@gmail.com</span></a>
                      </p>
                      <span className="or-style">OR</span>
                      <Link to="/contact" className="button-round-secondary">CONTACT US</Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer id="colophon" className="site-footer">
          <div className="footer-contact-content">
            <div className="container">
              <div className="row align-items-center justify-content-center justify-content-md-start">
                <div className="col-md-4 col-sm-6">
                  <div className="contact-info">
                    <figure className="contact-icon">
                      {/* <i aria-hidden="true" className="icon icon-map-marker1"></i> */}
                      <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                    </figure>
                    <div className="contact-deatil">
                      <p>GF-001 Mayuransh elanza shyamal cross road nr. parekh hospital satellite Ahemedabad
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="contact-info">
                    <figure className="contact-icon">
                      {/* <i aria-hidden="true" className="icon icon-envelope3"></i> */}
                      <i className="fa-regular fa-envelope-open" aria-hidden="true"></i>
                    </figure>
                    <aside className="contact-deatil">
                      <span className="contact-title">
                        Email us :
                      </span>
                      <a
                        href="https://demo.bosathemes.com/cdn-cgi/l/email-protection#234a4d454c63474c4e424a4d0d404c4e"><span
                          className="__cf_email__"
                          data-cfemail="a2cbccc4cde2c6cdcfcbc3cc8cc1cdcf">bulavoservices@gmail.com</span></a>
                    </aside>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="contact-info">
                    <figure className="contact-icon">
                      {/* <i aria-hidden="true" className="icon icon-phone-handset"></i> */}
                      <i className="fa-solid fa-phone" aria-hidden="true"></i>
                    </figure>
                    <aside className="contact-deatil">
                      <span className="contact-title">
                        Call us now :
                      </span>
                      <a href="tel:+91 93289 39099">
                        093289 39099</a>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="footer-inner">
              <div className="footer-wrapper">
                <div className="top-footer">
                  <div className="row">
                    <div className="col-lg-5">
                      <aside className="widget widget_text img-textwidget primary-bg">
                        <div className="footer-logo">
                          <Link to="/">
                            <img src={logo} alt="logo" />
                          </Link>
                        </div>
                        <div className="textwidget widget-text">
                          "Thank you for choosing BULAVO for your home appliance needs. Your trust is our
                          greatest reward, and we're excited to keep surpassing your expectations." </div>
                        <div className="footer-social-links">
                          <ul>
                            <li>
                              <Link to="https://m.facebook.com/profile.php/?id=61553107342288&name=xhp_nt__fb__action__open_user"
                                target="_blank">
                                <i className="fab fa-facebook-f" aria-hidden="true"></i>
                              </Link>
                            </li>

                            <li>
                              <Link to="https://www.instagram.com/bulavoservices/" target="_blank">
                                <i className="fab fa-instagram" aria-hidden="true"></i>
                              </Link>
                            </li>

                          </ul>
                        </div>
                      </aside>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <aside className="widget">
                        <h5 className="widget-title">Useful Links</h5>
                        <ul className="widget-underline">
                          <li>
                            <Link to="/about">About us</Link>
                          </li>
                          <li>
                            <Link to="/service">Services</Link>
                          </li>
                          <li>
                            <Link to="/blogarchive">News & Articles</Link>
                          </li>
                          <li>
                            <Link to="/careerdetails">Become a partner</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact Us</Link>
                          </li>
                        </ul>
                      </aside>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <aside className="widget">
                        <h5 className="widget-title">Support</h5>
                        <ul>
                          <li>
                            <a>Help Center</a>
                          </li>
                          <li>
                            <a>Repair Services</a>
                          </li>
                          <li>
                            <a>Installation Services
                            </a>
                          </li>

                          <li>
                            <a>Appliance Disposal Services
                            </a>
                          </li>
                        </ul>
                      </aside>
                    </div>
                  </div>
                </div>
                <div className="bottom-footer">
                  <div className="copy-right">Copyright &copy; 2023 BULAVO. All rights reserved.</div>
                </div>
              </div>
              <div className="footer-img">
                <figure className="footer-plumber-img">
                  <img src={img29} alt="logo" />
                </figure>
              </div>
            </div>
          </div>
        </footer>
        <a id="backTotop" href="#" className="to-top-icon">
          <i className="fas fa-chevron-up"></i>
        </a>
        <div className="header-search-form">
          <div className="container">
            <div className="header-search-container">
              <form className="search-form" role="search" method="get">
                <input type="text" name="s" placeholder="Enter your text..." />
              </form>
              <a href="#" className="search-close">
                <i className="fas fa-times"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Careerdetails