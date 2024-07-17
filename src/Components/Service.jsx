import React, { useState } from 'react'
import logo from "../Components/img/logo.png"
import plumber from "../Components/img/plumbero-img39.png"
import img1 from "../Components/img/logo1-removebg-preview.png"
import img2 from "../Components/img/wasingmachine.png"
import img3 from "../Components/img/ref.bulavo-removebg-preview.png"
import img4 from "../Components/img/microwave .png"
import img5 from "../Components/img/gyser.png"
import img6 from "../Components/img/tv.png"
import img7 from "../Components/img/air cooler .png"
import img8 from "../Components/img/chimney.png"
import img9 from "../Components/img/mixer.png"
import img11 from "../Components/img/heater.png"
import img12 from "../Components/img/R.O.png"
import img13 from "../Components/img/solar.jpeg"
import img14 from "../Components/img/elew-2.jpeg"
import img15 from "../Components/img/elew-3.jpeg"
import img16 from "../Components/img/elew-4.avif"
import img17 from "../Components/img/elew-5.jpeg"
import img27 from "../Components/img/elew-3.jpeg"
import img28 from "../Components/img/elew-5.jpeg"
import img30 from "../Components/img/plumbero-img40.jpg"
// import img29 from "../Components/img/Bulao Logo 2@3x.png"
import img29 from "../Components/img/plumbero-img038.png"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Service = () => {
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

      {/* <div id="siteLoader" className="site-loader ">
        <div className="preloader-content">
          <img src="assets/img/loader1.gif" alt="" />
        </div>
      </div> */}

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
                <div className=" mid-left-header col-md-6 d-flex align-items-center justify-content-md-end justify-content-between flex-grow-1 flex-wrap flex-sm-nowrap">
                  <div className="header-contact-info">
                    <a href="tel:+91 93289 39099">
                      <div className="header-contact-inner">
                        <span className="icon">
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
                  <a href="index.html">
                    <img src={logo} alt="logo" />
                  </a>
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
                      <li className="current-menu-item">
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
                          <li>
                            <Link to="/about" role="menuitem">About us</Link>
                          </li>
                          <li class="menu-item-has-children current-menu-item">
                            <a href="/service" role="menuitem">Services</a>
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
                            <Link href="/blogarchive">blog</Link>
                          </span>
                          </li>
                          <li>
                            <Link href="/contact" role="menuitem">Contact</Link>
                          </li>
                          <li>
                            <Link href="/careerdetails" role="menuitem">Become a partner</Link>
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

          <section class="inner-banner-wrap">
            <div class="inner-baner-container" style={{
              backgroundImage: `url(${img30})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '30vh', // Adjust this to your desired height
              width: '100%', // Adjust this to your desired width
            }}>
              <div class="container">
                <div class="inner-banner-content">
                  <h1 class="inner-title">Service List</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="home-service-section">
            <div className="container">
              <div className="service-detail-wrapper">
                <div className="section-head">
                  <h6 className="section-sub-title">ELECTRIC SERVICES</h6>
                  <h3 className="section-title">Our Best Services That We Offer To You !</h3>
                </div>
                <p className="service-detail-paragraph">
                  "BULAVO surpassed our expectations with their swift and effective service. Their meticulous
                  attention to detail and dedication to quality make them our preferred choice for home
                  appliance services."</p>
              </div>
              <div className="type-of-service">
                <Link to="/complain?service=A.C.%20Repair%20%26%20service" className="service-type">
                  <div className="service-title">
                    <h5>A.C Repair & service</h5>
                  </div>
                  <p className="service-info">
                    Efficient and reliable A/C repair and service to keep you cool and comfortable all year
                    round.
                  </p>
                  <div className="service-img-no d-flex justify-content-between align-items-end">
                    <figure className="service-img">
                      <img src={img1} alt="" />
                    </figure>
                    <h2 className="service-no"></h2>
                  </div>
                </Link>

                <Link to="/complain?service=Washing%20Machine%20Repair%20%26%20service" className="service-type">
                  <div className="service-title">
                    <h5>Washing machine Repair & service</h5>
                  </div>
                  <p className="service-info">
                    Expert washing machine repair and servicing for optimal performance and longevity.
                  </p>
                  <div className="service-img-no d-flex justify-content-between align-items-end">
                    <figure className="service-img">
                      <img src={img2} alt="" />
                    </figure>
                    <h2 className="service-no"></h2>
                  </div>
                </Link>
                <Link to="/complain?service=Refrigerator%20Repair%20%26%20service" className="service-type">
                  <div className="service-title">
                    <h5>Refrigerator Repair & service</h5>
                  </div>
                  <p className="service-info">
                    Reliable refrigerator repair and servicing to keep your appliances running smoothly.
                  </p>
                  <div className="service-img-no d-flex justify-content-between align-items-end">
                    <figure className="service-img">
                      <img src={img3} alt="" />
                    </figure>
                    <h2 className="service-no"></h2>
                  </div>
                </Link>
                <Link to="/complain?service=Microwave%20oven%20Repair%20%26%20service" className="service-type">
                  <div className="service-title">
                    <h5>Microwave oven Repair & service</h5>
                  </div>
                  <p className="service-info">
                    Professional microwave oven repair and servicing for hassle-free cooking experiences.
                  </p>
                  <div className="service-img-no d-flex justify-content-between align-items-end">
                    <figure className="service-img">
                      <img src={img4} alt="" />
                    </figure>
                    <h2 className="service-no"></h2>
                  </div>
                </Link>
                <Link to="/complain?service=Geyser%20Repair%20%26%20service" className="service-type">
                  <div className="service-title">
                    <h5>Geyser Repair & service</h5>
                  </div>
                  <p className="service-info">
                    Efficient geyser repair and servicing to ensure hot water whenever you need it.
                  </p>
                  <div className="service-img-no d-flex justify-content-between align-items-end">
                    <figure className="service-img">
                      <img src={img5} alt="" />
                    </figure>
                    <h2 className="service-no"></h2>
                  </div>
                </Link>
                <Link to="/complain?service=T.V%20Repair%20%26%20service" className="service-type">
                  <div className="service-title">
                    <h5>T.V Repair & service</h5>
                  </div>
                  <p className="service-info">
                    Expert TV repair and servicing for uninterrupted entertainment at home.
                  </p>
                  <div className="service-img-no d-flex justify-content-between align-items-end">
                    <figure className="service-img">
                      <img src={img6} alt="" />
                    </figure>
                    <h2 className="service-no"></h2>
                  </div>
                </Link>
                <Link to="/complain?service=Air%20cooler%20Repair%20%26%20service" className="service-type">
                  <div className="service-title">
                    <h5>Air cooler Repair & service</h5>
                  </div>
                  <p className="service-info">
                    Effective air cooler repair and servicing to keep you cool and comfortable during the
                    hottest days.
                  </p>
                  <div className="service-img-no d-flex justify-content-between align-items-end">
                    <figure className="service-img">
                      <img src={img7} alt="" />
                    </figure>
                    <h2 className="service-no"></h2>
                  </div>
                </Link>
                <Link to="/complain?service=Chimny%20Repair%20%26%20service" className="service-type">
                  <div className="service-title">
                    <h5>Chimney Repair & service</h5>
                  </div>
                  <p className="service-info">
                    Comprehensive chimney repair and servicing for a clean and odor-free kitchen
                    environment.
                  </p>
                  <div className="service-img-no d-flex justify-content-between align-items-end">
                    <figure className="service-img">
                      <img src={img8} alt="" />
                    </figure>
                    <h2 className="service-no"></h2>
                  </div>
                </Link>
                <Link to="/complain?service=Mixer%20Repair%20%26%20service" className="service-type">
                  <div className="service-title">
                    <h5>Mixer Repair & service</h5>
                  </div>
                  <p className="service-info">
                    Quality mixer repair and servicing to keep your kitchen running smoothly.
                  </p>
                  <div className="service-img-no d-flex justify-content-between align-items-end">
                    <figure className="service-img">
                      <img src={img9} alt="" />
                    </figure>
                    <h2 className="service-no"></h2>
                  </div>
                </Link>
                <Link to="/complain?service=Water-heater%20Repair%20%26%20service" className="service-type">
                  <div className="service-title">
                    <h5>Water-heater Repair & service</h5>
                  </div>
                  <p className="service-info">
                    Dependable water heater repair and servicing for consistent hot water supply.
                  </p>
                  <div className="service-img-no d-flex justify-content-between align-items-end">
                    <figure className="service-img">
                      <img src={img11} alt="" />
                    </figure>
                    <h2 className="service-no"></h2>
                  </div>
                </Link>
                <Link to="/complain?service=R.O%20water%20purifier%20Repair%20%26%20service"
                  className="service-type">
                  <div className="service-title">
                    <h5>R.O water purifier Repair & service</h5>
                  </div>
                  <p className="service-info">
                    Expert R.O. water purifier repair and servicing for pure and safe drinking water.
                  </p>
                  <div className="service-img-no d-flex justify-content-between align-items-end">
                    <figure className="service-img">
                      <img src={img12} alt="" />
                    </figure>
                    <h2 className="service-no"></h2>
                  </div>
                </Link>
                <div className="service-notification">
                  <h5 className="notifiy-title">We Are The Best in Home Appliances Service Business Since 2023.
                  </h5>
                  <Link to="/complain" className="button-round-primary">HIRE US </Link>
                </div>
              </div>
            </div>
          </section>
          <section class="home-working-step-section service-working-step ">
            <div class="container">
              <div class="section-head offset-lg-3 col-lg-6 offset-md-2 col-md-8 text-center">
                <h6 class="section-sub-title">WORK PROCESS</h6>
                <h3 class="section-title">4 Simple Process To Follow</h3>
              </div>
              <div class="process-step">
                <div class="row align-items-center justify-content-center">
                  <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="phase">
                      <figure class="phase-icon">
                        <i className="fa-solid fa-id-badge" aria-hidden="true"></i>
                        <h5 class="phase-no">1</h5>
                      </figure>
                      <div class="phase-content">
                        <h5 class="phase-title">
                          Schedule Your Appointment
                        </h5>
                        <p class="phase-info">
                          "Book your appointment today and let our skilled technicians guarantee the seamless operation of your home appliances."                                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="phase">
                      <figure class="phase-icon">
                        <i className="fa-solid fa-sheet-plastic " aria-hidden="true"></i>
                        <h5 class="phase-no">2</h5>
                      </figure>
                      <div class="phase-content">
                        <h5 class="phase-title">
                          Get Professional Advices
                        </h5>
                        <p class="phase-info">
                          "Looking for expert guidance on your home appliance needs? Consult with our experienced team for professional advice and solutions."                                      </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="phase">
                      <figure class="phase-icon">
                        <i className="fa-solid fa-gears" aria-hidden="true"></i>
                        <h5 class="phase-no">3</h5>
                      </figure>
                      <div class="phase-content">
                        <h5 class="phase-title">
                          Meet Expert Electricians
                        </h5>
                        <p class="phase-info">
                          "Introducing our team of skilled appliance technicians — a group of dedicated professionals prepared to energize your home projects with precision, reliability, and an unwavering commitment to excellence."                                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="phase">
                      <figure class="phase-icon">
                        {/* <i className="fa-brands fa-servicestack" aria-hidden="true"></i> */}
                        <i class="fa-regular fa-thumbs-up" aria-hidden="true"></i>
                        <h5 class="phase-no">4</h5>
                      </figure>
                      <div class="phase-content">
                        <h5 class="phase-title">
                          Get Our Best Services
                        </h5>
                        <p class="phase-info">
                          "Experience excellence with our best-in-class services crafted to fulfill your home appliance requirements."                                     </p>
                      </div>
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

export default Service
