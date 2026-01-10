import React from 'react'
import { useNavigate } from 'react-router-dom'


function Footer() {

    const navigate = useNavigate()
    return (
        <footer className="footer-section sectionspace80">
            <div className="container">

                <div className="row">
                    {/* //  LOGO --> */}
                    <div className="col-lg-3 col-md-6 text-center text-md-start">
                        <img src="/assets/logo/logo.png" className="footer-logo" alt="Footer logo" />
                    </div>

                    {/* <div className=''> */}
                        {/* //  LINKS --> */}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="footer-widget-title">Useful Links</h3>
                                <ul>
                                    <li onClick={() => navigate('/')}>Home</li>
                                    <li>What is SSB?</li>
                                    <li>Privacy policy</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="footer-widget-title">Our Services</h3>
                                <ul>
                                    <li onClick={() => navigate('/About')} >About US</li>
                                    <li onClick={() => navigate('/Magazine')} >Magazine</li>
                                    <li onClick={() => navigate('/HalfOfFame')} >Hall Of Fame</li>
                                    <li onClick={() => navigate('/Courses')} >Courses</li>
                                    <li onClick={() => navigate('/GtoTrain')} >GTO Training</li>
                                    {/* <li>Podcast</li> */}
                                </ul>
                                <div className="footer-socials">
                                    <i className="footer-social-icon fa fa-youtube-play"></i>
                                    <i className="footer-social-icon fa fa-linkedin-square"></i>
                                    <i className="footer-social-icon fa fa-instagram"></i>
                                    <i className="footer-social-icon fa fa-facebook"></i>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}

                    {/* //  CONTACT --> */}
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h3 className="footer-widget-title">Contact Us</h3>
                            <ul>
                                <li><i className="fa fa-whatsapp me-2 fs-5"></i> +91 84204 22821</li>
                                <li><i className="fa fa-phone me-2 fs-5"></i> +91 90246 67319</li>
                                <li><i className="fa fa-envelope me-2 fs-5 "></i> info@ssbwithisv.in</li>
                            </ul>
                            <p className="footer-widget-text">© Copyright 2024 All Rights Reserved</p>
                        </div>
                    </div>

                </div>


            </div>
        </footer>
    )
}

export default Footer