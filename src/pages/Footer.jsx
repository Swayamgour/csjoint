import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style/Footer.module.css";

function Footer() {
    const navigate = useNavigate();

    return (
        <footer className={styles.footer}>
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
                        <li onClick={() => navigate("/WhatIsSSB")}>What is SSB?</li>
                        <li onClick={() => navigate("/PrivacyPolicy")}>Privacy policy</li>
                    </ul>
                </div>

                {/* SERVICES */}
                <div className={styles.links}>
                    <h4>Our Services</h4>
                    <ul>
                        <li onClick={() => navigate("/About")}>About Us</li>
                        <li onClick={() => navigate("/Magazine")}>Magazine</li>
                        <li onClick={() => navigate("/HalfOfFame")}>Hall of Fame</li>
                        <li onClick={() => navigate("/Courses")}>Courses</li>
                        <li onClick={() => navigate("/GtoTrain")}>GTO Training</li>
                    </ul>

                    {/* SOCIAL ICONS */}
                    <div className={styles.socials}>
                        <i className="fa fa-youtube-play"></i>
                        <i className="fa fa-linkedin-square"></i>
                        <i className="fa fa-instagram"></i>
                        <i className="fa fa-facebook"></i>
                    </div>
                </div>

                {/* CONTACT */}
                <div className={styles.contact}>
                    <h4>Contact Us</h4>

                    <p>
                        <i className="fa fa-whatsapp"></i> +91 84204 22821
                    </p>
                    <p>
                        <i className="fa fa-phone"></i> +91 90246 67319
                    </p>
                    <p>
                        <i className="fa fa-envelope"></i> info@ssbwithisv.in
                    </p>

                    <span className={styles.copy}>
                        © Copyright 2026 All Rights Reserved
                    </span>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
