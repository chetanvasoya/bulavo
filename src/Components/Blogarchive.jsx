// import React, { useState, useEffect } from 'react';
// import "./Blogarchive.css";
// import img3 from "../Components/img/plumbero-img40.jpg";
// import { db } from '../firebase.config'; // Adjust this import path
// import { collection, query, orderBy, getDocs } from 'firebase/firestore';

// const Blogarchive = () => {
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [visiblePosts, setVisiblePosts] = useState(3);

//   useEffect(() => {
//     // Fetch blog posts
//     const fetchBlogPosts = async () => {
//       try {
//         const blogCollection = collection(db, "blog");
//         const blogQuery = query(blogCollection, orderBy("submissionTime", "desc"));
//         const querySnapshot = await getDocs(blogQuery);
//         const posts = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));
//         setBlogPosts(posts);
//       } catch (error) {
//         console.error("Error fetching blog posts: ", error);
//       }
//     };

//     fetchBlogPosts();
//   }, []);

//   const loadMore = () => {
//     setVisiblePosts(prevVisible => prevVisible + 3);
//   };

//   return (
//     <div>
//       <div className="home">
//         <main id="content" className="site-main">
//           <section className="inner-banner-wrap">
//             <div className="inner-baner-container" style={{
//               backgroundImage: `url(${img3})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               height: '30vh',
//               width: '100%',
//             }}>
//               <div className="container">
//                 <div className="inner-banner-content">
//                   <h1 className="inner-title">Archives</h1>
//                 </div>
//               </div>
//             </div>
//           </section>
//           <section>
//             <div id="articleContainer" className="blog-container">
//               {blogPosts.slice(0, visiblePosts).map((post) => (
//                 <a key={post.id} href={`blog-archive.html#${post.id}`} className="blog-post-link">
//                   <div className="blog-post">
//                     <img className="blog-image" src={post.imageURL} alt="Blog Image" />
//                     <div className="blog-title-overlay">{post.imageTitle}</div>
//                     <div className="blog-title">{post.blogTitle}</div>
//                     <div className="blog-content">{post.content}</div>
//                     <hr />
//                     <div className="blog-timestamp">
//                       {post.submissionTime && post.submissionTime.toDate instanceof Function
//                         ? post.submissionTime.toDate().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
//                         : "Invalid Date"}
//                     </div>
//                   </div>
//                 </a>
//               ))}
//             </div>
//             {visiblePosts < blogPosts.length && (
//               <button id="loadMoreBtn" onClick={loadMore}>Load More</button>
//             )}
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Blogarchive;
import "./Blogarchive.css"
import logo from "../Components/img/logo.png"
import img29 from "../Components/img/plumbero-img038.png"
import img3 from "../Components/img/plumbero-img40.jpg"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { db } from '../firebase.config'; // Adjust this import path
import { collection, query, orderBy, getDocs } from 'firebase/firestore';


const Blogarchive = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(5);

  useEffect(() => {
    // Fetch blog posts
    const fetchBlogPosts = async () => {
      try {
        const blogCollection = collection(db, "blog");
        const blogQuery = query(blogCollection, orderBy("submissionTime", "desc"));
        const querySnapshot = await getDocs(blogQuery);
        const posts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error fetching blog posts: ", error);
      }
    };

    fetchBlogPosts();
  }, []);
  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
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
  const loadMore = () => {
    setVisiblePosts(prevVisible => prevVisible + 5);
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
    <div>
      <div className="home">
        <header className={`site-header site-header-transparent ${scrolled ? "fixed-header" : ""}`} id="masthead">
          <div className="top-header">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-7 flex-grow-1">
                  <div className="schedule-wrapper d-flex justify-content-md-start justify-content-center flex-wrap flex-sm-nowrap">
                    <div className="header-schedule-info">
                      <i aria-hidden="true" className="far fa-clock"></i>
                      <span className="schedule-info">Open : 9am - 5pm (Mon - Sat)</span>
                    </div>
                    <div className="header-schedule-info">
                      <i aria-hidden="true" className="fas fa-map-marker-alt"></i>
                      <span className="schedule-info">AHEMEDABAD</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 d-flex justify-content-sm-end justify-content-center align-items-center">
                  <div className="header-social social-links">
                    <ul>
                      <li>
                        <Link to="https://m.facebook.com/profile.php/?id=61553107342288&name=xhp_nt__fb__action__open_user" target="_blank">
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
                <div className="mid-left-header col-md-6 d-flex align-items-center justify-content-md-end justify-content-between flex-grow-1 flex-wrap flex-sm-nowrap">
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
                  <Link to="/complain" className="button-round-secondary appoinment-btn">
                    REQUEST AN APPOINTMENT
                  </Link>
                 
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
                      <li className="current-menu-item">
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
                            <Link to="/blogarchive" className="current-menu-item">blog</Link>
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
            <div
              className="inner-baner-container"
              style={{
                backgroundImage: `url(${img3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '30vh',
                width: '100%',
              }}
            >
              <div className="container">
                <div className="inner-banner-content">
                  <h1 className="inner-title">Archives</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="blog-section">
            <div className="blog-container">
              {blogPosts.slice(0, visiblePosts).map((post) => (
                <article key={post.id} className="blog-post">
                  <Link to={`/blog/${post.id}`} className="blog-post-link">
                    <div className="blog-image-container">
                      <img className="blog-image" src={post.imageURL} alt="Blog Image" />
                      <div className="blog-title-overlay">{post.imageTitle}</div>
                    </div>
                    <div className="blog-content-wrapper">
                      <h2 className="blog-title">{post.blogTitle}</h2>
                      <p className="blog-excerpt">{truncateText(post.content, 10)}</p>
                      <div className="blog-footer">
                        <span className="blog-timestamp">
                          {post.submissionTime && post.submissionTime.toDate instanceof Function
                            ? post.submissionTime.toDate().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
                            : "Invalid Date"}
                        </span>
                        <span className="read-more">Read More</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
            {visiblePosts < blogPosts.length && (
              <button className="load-more-btn" onClick={loadMore}>
                Load More
              </button>
            )}
          </section>
        </main>

        <div className="col-lg-10">
          <div className="primary">
            <div className="inner-blog-wrapper" id="blogSection"></div>
          </div>
        </div>

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
      </div>
    </div>
  )
}

export default Blogarchive


