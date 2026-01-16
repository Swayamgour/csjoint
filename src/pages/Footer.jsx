import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style/Footer.module.css";

function Footer() {
    const navigate = useNavigate();

    return (
        <footer className={styles.footer}>


            <div className="bottom-contact-box-wrapper">

                {/* CALL */}
                <a
                    href="tel:+919024667319"
                    className="bottom-contact-box"
                    aria-label="Call us"
                >
                    <i className="fa fa-phone"></i>
                </a>

                {/* WHATSAPP */}
                <a
                    href="https://wa.me/918420422821"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bottom-contact-box"
                    aria-label="Chat on WhatsApp"
                >
                    <i className="fa fa-whatsapp"></i>
                </a>

            </div>



            <div className={styles.container}>

                {/* LOGO */}
                <div className={styles.logoBox}>
                    <img
                        src="/assets/logo/logo.png"
                        alt="CS Joint Services Academy"
                        className={styles.logo}
                    />
                </div>

                {/* LINKS */}
                <div className={styles.links}>
                    <h4>Useful Links</h4>
                    <ul>
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate('/SsbPage')}>What is SSB?</li>
                        <li >Podcast</li>
                        <li >Privacy policy</li>
                    </ul>
                </div>

                {/* SERVICES */}
                <div className={styles.links}>
                    <h4>Our Services</h4>
                    <ul>
                        <li onClick={() => navigate("/Courses")}>Courses</li>
                        <li onClick={() => navigate("/Magazine")}>Magazine</li>

                        {/* <li onClick={() => navigate("/About")}>About Us</li>
                        <li onClick={() => navigate("/HalfOfFame")}>Hall of Fame</li>
                        <li onClick={() => navigate("/GtoTrain")}>GTO Training</li>
                        <li onClick={() => navigate("/SsbPage")}>SSB</li> */}
                    </ul>

                    {/* SOCIAL ICONS */}

                </div>

                {/* CONTACT */}
                <div className={styles.contact}>
                    <h4>Contact Us</h4>

                    <div className={styles.contactRow}>

                        {/* WhatsApp */}
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

                        {/* Phone Call */}
                        <a
                            href="tel:+919024667319"
                            className={styles.contactItem}
                        >
                            <p>
                                <i className="fa fa-phone"></i> +91 90246 67319
                            </p>
                        </a>

                    </div>


                    <div className={styles.contactRow}>
                        <p>
                            <i className="fa fa-envelope"></i> info@ssbwithisv.in
                        </p>

                        {/* <div className={styles.socials}>
                            <i className="fa fa-youtube-play"></i>
                            <i className="fa fa-linkedin-square"></i>
                            <i className="fa fa-instagram"></i>
                            <i className="fa fa-facebook"></i>
                        </div> */}

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



                </div>

            </div>

            <span className={styles.copy}>
                © Copyright 2026 All Rights Reserved
            </span>
        </footer>
    );
}

export default Footer;
