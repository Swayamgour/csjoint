// Footer.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style/Footer.module.css";

function Footer() {
    const navigate = useNavigate();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* LOGO SECTION */}
                <div className={styles.logoBox}>
                    <img
                        src="/assets/logo/logo.png"
                        alt="Joint Services Academy"
                        className={styles.logo}
                    />
                </div>



                {/* USEFUL LINKS WITH SOCIAL MEDIA */}
                <div className={styles.links}>
                    <h4>Useful Links</h4>
                    <ul>
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate('/SsbPage')}>What is SSB?</li>
                        <li onClick={() => window.open('/podcast', '_blank')}>Podcast</li>
                        <li onClick={() => navigate('/privacy-policy')}>Privacy policy</li>
                    </ul>

                    {/* SOCIAL MEDIA ICONS - Added here */}
                    <div className={styles.socials}>
                        <a
                            href="https://www.youtube.com/@ssbwithisv"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                        >
                            <i className="fa fa-youtube-play"></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/company/ssbwithisv/posts"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <i className="fa fa-linkedin-square"></i>
                        </a>

                        <a
                            href="https://www.instagram.com/ssbwithisv/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <i className="fa fa-instagram"></i>
                        </a>

                        <a
                            href="https://www.facebook.com/ssbwithisv/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <i className="fa fa-facebook"></i>
                        </a>
                    </div>
                </div>

                {/* OUR SERVICES */}
                <div className={styles.links}>
                    <h4>Our Services</h4>
                    <ul>
                        <li onClick={() => navigate("/Courses")}>Courses</li>
                        <li onClick={() => navigate("/Magazine")}>Magazine</li>
                    </ul>
                </div>

                {/* CONTACT US WITH COPYRIGHT */}
                <div className={styles.contact}>
                    <div>
                        <h4>Contact Us</h4>

                        <div className={styles.contactRow}>
                            <a
                                href="https://wa.me/918420422821"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.contactItem}
                            >
                                <p>
                                    <i className="fa fa-whatsapp"></i> +91 84204 22821
                                </p>
                            </a>

                            <a
                                href="tel:+919024667319"
                                className={styles.contactItem}
                            >
                                <p>
                                    <i className="fa fa-phone"></i> +91 90246 67319
                                </p>
                            </a>

                            <p>
                                <i className="fa fa-envelope"></i> info@ssbwithisv.in
                            </p>
                        </div>

                        {/* <div style={{ paddingTop: '5px' }} className={styles.contactRow}>

                        </div> */}
                    </div>

                    {/* COPYRIGHT - Added here in same flex container */}
                    <div className={styles.copyrightBox}>
                        <span className={styles.copy}>
                            © Copyright 2026 All Rights Reserved
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;