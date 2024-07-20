import React, { useState,useEffect } from 'react'
import logo from "../Components/img/logo.png"
import img1 from "../Components/img/plumbero-img43.jpg"
import img3 from "../Components/img/plumbero-img40.jpg"
// import img2 from "../Components/img/plumbero-img33.png"
// import img3 from "../Components/img/plumbero-img34.png"
// import img4 from "../Components/img/plumbero-img35.png"
// import img5 from "../Components/img/plumbero-img36.png"
// import img6 from "../Components/img/plumbero-img37.png"
// import img7 from "../Components/img/plumbero-img32.png"
import img29 from "../Components/img/plumbero-img038.png"
import { Route, Router, Routes, BrowserRouter, Link } from 'react-router-dom';

const About = () => {
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
                                                AHEMEDABAD                                    </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3 d-flex justify-content-sm-end justify-content-center align-items-center">
                                    <div className="header-social social-links">
                                        <ul>
                                            <li>
                                                <Link to="https://m.facebook.com/profile.php/?id=61553107342288&name=xhp_nt__fb__action__open_user"
                                                    target="_blank">
                                                    {/* <i className="fab fa-facebook" aria-hidden="true"></i> */}
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
                                <div className=" mid-left-header col-md-6 d-flex align-items-center justify-content-md-end justify-content-between flex-grow-1 flex-wrap flex-sm-nowrap">
                                    <div className="header-contact-info">
                                        <a href="tel:+91 93289 39099">
                                            <div className="header-contact-inner">
                                                <span className="icon">
                                                    {/* <i aria-hidden="true" className="icon icon-phone"></i> */}
                                                    <i className="fa-solid fa-phone" aria-hidden="true"></i>
                                                </span>
                                                <div className="details-content">
                                                    <span className="content-title">24*7 EMERGENCY SERVICES</span>
                                                    <h5>093289 39099</h5>
                                                </div>
                                            </div>
                                        </a>
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
                                            <li className="current-menu-item">
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
                                            <li>
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
                                                    <li class="current-menu-item">
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
                                                    <li class="menu-item-has-children slicknav_collapsed slicknav_parent"><span class="slicknav_parent-link slicknav_row">
                                                        <Link to ="/blogarchive">blog</Link>
                                                    </span>
                                                    </li>
                                                    <li>
                                                        <Link to="/contact" role="menuitem">Contact</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/careerdetails" role="menuitem">Become a partner</Link>
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
                        <div className="inner-baner-container" style={{
                            backgroundImage: `url(${img3})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '30vh', // Adjust this to your desired height
                            width: '100%', // Adjust this to your desired width
                        }}>
                            <div className="container">
                                <div className="inner-banner-content">
                                    <h1 className="inner-title">About us</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="about-section">
                        <div className="container">
                            <div className="about-inner">
                                <div className="row g-lg-0">
                                    <div className="col-md-6">
                                        <div className="about-detail section-head-info">
                                            <h6 className="section-sub-title">
                                                INTRODUCTION OF US
                                            </h6>
                                            <h3 className="section-title">
                                                "Discover why we excel in home appliances! Find out what makes us the best."                                 </h3>
                                            <p className="section-paragraph">
                                                "Discover excellence in electronics with us! As a leading provider, we pride ourselves on unmatched expertise, cutting-edge solutions, and a commitment to delivering the best in electronic services. Choose us for innovation, reliability, and a personalized approach to meet all your electronic needs."                                    </p>
                                            <p className="section-paragraph">
                                                Eius ut reprehenderit aut facilisis? Natus quaerat eget, sapien libero alias facilisis, habitasse culpa conubia tellus aspernatur totam, imperdiet debitis? Nec eius, impedit feugiat odio.
                                            </p>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <figure className="about-image round-border">
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="about-counter-wrapper round-border">
                                <div className=" counter-item">
                                    <div className="counter-no">
                                        <span className="counter">38</span>+
                                    </div>
                                    <div className="Completed">
                                        Qualified Techician
                                    </div>
                                </div>
                                <div className=" counter-item">
                                    <div className="counter-no">
                                        <span className="counter">450</span>+
                                    </div>
                                    <div className="Completed">
                                        Completed project
                                    </div>
                                </div>
                                <div className=" counter-item">
                                    <div className="counter-no">
                                        <span className="counter">5</span>k+
                                    </div>
                                    <div className="Completed">
                                        Happy Customer
                                    </div>
                                </div>
                            </div>
                            <div className="goal-wrapper">
                                <div className="goal-detail vision-inner col-lg-4">
                                    <h4>
                                        Our Vision...
                                    </h4>
                                    <p>
                                        "Our vision for home appliances is to redefine excellence in service, merging innovation with precision. We aim to be the trusted partner for delivering unparalleled solutions, exceptional service, and staying at the forefront of technological advancements, ensuring a seamless experience for your home appliances."     </p>
                                </div>
                                <figure className="goal-img figure-round-border col-lg-4">
                                    <img src={img1} alt="" />
                                </figure>
                                <div className="goal-detail mission-inner col-lg-4">
                                    <h4>
                                        Our Mission...
                                    </h4>
                                    <p>
                                        "BULAVO is to redefine excellence in home appliance services. Committed to innovation, unmatched expertise, and exceptional customer satisfaction, we strive to be your trusted partner for all home appliance needs, providing a seamless and advanced technological experience."</p>
                                </div>
                            </div>
                            {/* <div className="about-patner-img">
                                <figure className="partner-logo round-border">
                                    <img src={img2} alt="" />
                                </figure>
                                <figure className="partner-logo round-border">
                                    <img src={img3} alt="" />
                                </figure>
                                <figure className="partner-logo round-border">
                                    <img src={img4} alt="" />
                                </figure>
                                <figure className="partner-logo round-border">
                                    <img src={img5} alt="" />
                                </figure>
                                <figure className="partner-logo round-border">
                                    <img src={img6} alt="" />
                                </figure>
                                <figure className="partner-logo round-border">
                                    <img src={img7} alt="" />
                                </figure>
                            </div> */}
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
                                            <a href="mailto:bulavoservices@gmail.com" className="__cf_email__">
      bulavoservices@gmail.com
    </a>
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

export default About

