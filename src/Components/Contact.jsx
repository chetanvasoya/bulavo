import React, { useState } from 'react'
import logo from "../Components/img/logo.png"
import img1 from "../Components/img/whatsapp(1).png"
import img2 from "../Components/img/mail.png"
import img3 from "../Components/img/plumbero-img40.jpg"
import img29 from "../Components/img/plumbero-img038.png"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Contact = () => {
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
                  <div
                    className="schedule-wrapper d-flex justify-content-md-start justify-content-center flex-wrap flex-sm-nowrap">
                    <div className="header-schedule-info">
                      <i aria-hidden="true" className="far fa-clock"></i>
                      <span className="schedule-info">
                        Open : 9am - 5pm (Mon - Sat)
                      </span>
                    </div>
                    <div className="header-schedule-info">
                      <i aria-hidden="true" className="fas fa-map-marker-alt"></i>
                      <span className="schedule-info">
                        AHEMEDABAD </span>
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
                <div
                  className=" mid-left-header col-md-6 d-flex align-items-center justify-content-md-end justify-content-between flex-grow-1 flex-wrap flex-sm-nowrap">
                  <div className="header-contact-info">
                    <a href="tel:+91 93289 39099">
                      <div className="header-contact-inner">
                        <span className="icon">
                          <i className="fa-solid fa-phone" aria-hidden="true"></i>
                        </span>
                        <div className="details-content">
                          <span className="content-title">24*7 EMERGENCY SERVICES</span>
                          <h5>
                            093289 39099</h5>
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
                      <li>
                        <Link to="/service">Services</Link>

                      </li>

                      <li>
                        <Link to="/blogarchive">Blog List</Link>

                      </li>
                      <li className="current-menu-item">
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
                          <li class="menu-item-has-children">
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
                          <li class="menu-item-has-children slicknav_collapsed slicknav_parent">
                            <span class="slicknav_parent-link slicknav_row">
                              <a href="/blogarchive">blog</a>
                            </span>
                          </li>
                          <li>
                            <a href="/contact" role="menuitem" className="current-menu-item">Contact</a>
                          </li>
                          <li>
                            <a href="/careerdetails" role="menuitem">Become a partner</a>
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
                  <h1 className="inner-title">Contact</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="contact-page-section">
            <div className="container">
              <div className="contact-form-wrapper">
                <div className="contact-deatil-form">
                  <div className="section-head-info">

                    <h3 className="section-title">Contact Us !</h3>
                    <p className="section-paragraph">
                    </p>
                  </div>
                  <form className="reachus" id="reachus">
                    {/* <img src={img1} />
                    <h6>To reach us massage us on our whasapp number</h6> */}
                    <div className="widget-bg upload-widget text-center">
                      <div className="widget-icon whtsapps">
                        <a href="https://api.whatsapp.com/send?phone=9328939099">
                          <img src={img1} />
                        </a>
                      </div>

                      <h5>Massage us on our whatsapp</h5><br />
                      <h6>+91 93289 39099</h6>

                      <span className="or-style">---- OR ----</span><br />

                      <div className="widget-icon whtsapps">
                        <a href="mailto:bulavoservices@gmail.com">
                          <img src={img2} />
                        </a>
                      </div>
                      <h5>Mail us </h5><br />
                      <h6>bulavoservices@gmail.com</h6>
                      {/* <p>Do you want to work with us? Please, send your CV to <a href="https://demo.bosathemes.com/cdn-cgi/l/email-protection#e98d8684888087d8dbdaa98e84888085c78a8684"><span className="__cf_email__" data-cfemail="ff9b90929e9691cecdccbf98929e9693d19c9092">bulavoservices@gmail.com</span></a></p> */}
                      {/* <span className="or-style">OR</span>
                      <a href="contact.html" className="button-round-secondary">CONTACT US</a> */}
                    </div>

                    {/* <p>
                      <input type="text" name="full_name" id="fullName" placeholder="Name" required />
                    </p>
                    <p className="half-width">
                      <input type="email" name="email" id="email" placeholder="Email" required />
                    </p>
                    <p className="half-width">
                      <input type="text" name="phone_no" id="phoneNo" placeholder="Phone No" required />
                    </p>
                    <p>
                      <textarea rows="8" name="message" id="message" placeholder="Message" required></textarea>
                    </p>
                    <p>
                      <button type="submit" className="button-round-primary">SEND MESSAGE</button>
                    </p> */}
                  </form>

                </div>
                <figure className="contact-image-info">
                  {/* <img src={img3} alt="" /> */}
                  <div className="img-info">
                    <h4>
                      Feel Free To Contact Us !
                    </h4>
                    <p>
                      BULAVO, Welcomes you </p>
                  </div>
                </figure>
              </div>
            </div>
          </section>
          {/* <div className="map-section">
            <p style={{ alignItems: "center" }}> map </p>
            <iframe src="https://www.google.com/maps/place/Revti+Plaza/@23.0527015,72.6803081,16.61z/data=!3m1!5s0x395e873de2ed06dd:0x331f3513e03ce206!4m6!3m5!1s0x395e8772a59d62c1:0xe82bbc1d2c70f671!8m2!3d23.0526077!4d72.6800579!16s%2Fg%2F11ghsd3vrw?entry=ttu" height="350" allowfullscreen="" loading="lazy"></iframe>
          </div> */}
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

export default Contact