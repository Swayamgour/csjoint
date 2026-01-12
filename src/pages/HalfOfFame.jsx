import React from 'react'
import CustomHeader from '../components/CustomHeader'
import From from './From'
import Footer from './Footer'
import CustomButton from '../components/CustomButton'

function HalfOfFame() {

    const data = {
        heading: 'Hall of fame',
        text: `At SSB with ISV, we celebrate candidates who didn’t just prepare, they evolved. With a recommendation rate well over 50%, our Hall of Fame highlights achievers from NDA, Army, Navy, Air Force, Coast Guard, and AFCAT entries who’ve truly lived the ISV pedagogy - focusing on authentic behaviour, disciplined thought, and GTO-aligned leadership. These success stories reflect resilience, real-world readiness, and a preparation philosophy rooted in experience, not shortcuts.`
    }
    return (
        <>
            {/* @extends('layout.main')
            @section('content')
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> */}




            <CustomHeader heading={data.heading} text={data.text} />


            <section className="container sectionspace80">
                <div className="hall-of-fame-section">
                    <div className="row g-4 col-12 mx-auto">

                        <div className="col-lg-4 col-md-6">
                            <div className="hof-column pattern-1">
                                <div className="Hall-of-fame-card small">
                                    <img src="assets/img/about/journey-slider.png" alt="image" />
                                    <div className="hof-content">
                                        <h5>Avinash Sunil Kumar</h5>
                                        <span>12 SSB Bangalore</span>
                                    </div>
                                </div>
                                <div className="Hall-of-fame-card small">
                                    <img src="assets/img/about/journey-slider.png" alt="image" />
                                    <div className="hof-content">
                                        <h5>Avinash Sunil Kumar</h5>
                                        <span>12 SSB Bangalore</span>
                                    </div>
                                </div>
                                <div className="Hall-of-fame-card large">
                                    <img src="assets/img/about/journey-slider.png" alt="image" />
                                    <div className="hof-content">
                                        <h5>Avinash Sunil Kumar</h5>
                                        <span>12 SSB Bangalore</span>
                                    </div>
                                </div>

                                <div className="Hall-of-fame-card small">
                                    <img src="assets/img/about/journey-slider.png" alt="image" />
                                    <div className="hof-content">
                                        <h5>Avinash Sunil Kumar</h5>
                                        <span>12 SSB Bangalore</span>
                                    </div>
                                </div>
                                <div className="Hall-of-fame-card small">
                                    <img src="assets/img/about/journey-slider.png" alt="image" />
                                    <div className="hof-content">
                                        <h5>Avinash Sunil Kumar</h5>
                                        <span>12 SSB Bangalore</span>
                                    </div>
                                </div>
                                <div className="Hall-of-fame-card large">
                                    <img src="assets/img/about/journey-slider.png" alt="image" />
                                    <div className="hof-content">
                                        <h5>Avinash Sunil Kumar</h5>
                                        <span>12 SSB Bangalore</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="hof-column pattern-2">
                                <div className="Hall-of-fame-card large">
                                    <img src="assets/img/about/journey-slider.png" alt="image" />
                                    <div className="hof-content">
                                        <h5>Avinash Sunil Kumar</h5>
                                        <span>12 SSB Bangalore</span>
                                    </div>
                                </div>
                                <div className="Hall-of-fame-card small">
                                    <img src="assets/img/about/journey-slider.png" alt="image" />
                                    <div className="hof-content">
                                        <h5>Avinash Sunil Kumar</h5>
                                        <span>12 SSB Bangalore</span>
                                    </div>
                                </div>
                                <div className="Hall-of-fame-card small">
                                    <img src="assets/img/about/journey-slider.png" alt="image" />
                                    <div className="hof-content">
                                        <h5>Avinash Sunil Kumar</h5>
                                        <span>12 SSB Bangalore</span>
                                    </div>
                                </div>

                                <div className="Hall-of-fame-card large">
                                    <img src="assets/img/about/journey-slider.png" alt="image" />
                                    <div className="hof-content">
                                        <h5>Avinash Sunil Kumar</h5>
                                        <span>12 SSB Bangalore</span>
                                    </div>
                                </div>
                                <div className="Hall-of-fame-card small">
                                    <img src="assets/img/about/journey-slider.png" alt="image" />
                                    <div className="hof-content">
                                        <h5>Avinash Sunil Kumar</h5>
                                        <span>12 SSB Bangalore</span>
                                    </div>
                                </div>
                                <div className="Hall-of-fame-card small">
                                    <img src="assets/img/about/journey-slider.png" alt="image" />
                                    <div className="hof-content">
                                        <h5>Avinash Sunil Kumar</h5>
                                        <span>12 SSB Bangalore</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="hof-column pattern-3">
                                <div className="Hall-of-fame-card small">
                                    <img src="assets/img/about/journey-slider.png" alt="image" />
                                    <div className="hof-content">
                                        <h5>Avinash Sunil Kumar</h5>
                                        <span>12 SSB Bangalore</span>
                                    </div>
                                </div>
                                <div className="Hall-of-fame-card large">
                                    <img src="assets/img/about/journey-slider.png" alt="image" />
                                    <div className="hof-content">
                                        <h5>Avinash Sunil Kumar</h5>
                                        <span>12 SSB Bangalore</span>
                                    </div>
                                </div>
                                <div className="Hall-of-fame-card small">
                                    <img src="assets/img/about/journey-slider.png" alt="image" />
                                    <div className="hof-content">
                                        <h5>Avinash Sunil Kumar</h5>
                                        <span>12 SSB Bangalore</span>
                                    </div>
                                </div>

                                <div className="Hall-of-fame-card small">
                                    <img src="assets/img/about/journey-slider.png" alt="image" />
                                    <div className="hof-content">
                                        <h5>Avinash Sunil Kumar</h5>
                                        <span>12 SSB Bangalore</span>
                                    </div>
                                </div>
                                <div className="Hall-of-fame-card large">
                                    <img src="assets/img/about/journey-slider.png" alt="image" />
                                    <div className="hof-content">
                                        <h5>Avinash Sunil Kumar</h5>
                                        <span>12 SSB Bangalore</span>
                                    </div>
                                </div>
                                <div className="Hall-of-fame-card small">
                                    <img src="assets/img/about/journey-slider.png" alt="image" />
                                    <div className="hof-content">
                                        <h5>Avinash Sunil Kumar</h5>
                                        <span>12 SSB Bangalore</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-12 row mx-auto mt-5 text-center">
                    <div className="col-sm-4 col-3"></div>
                    <div className="col-sm-4 col-6 mx-auto d-flex justify-content-center text-center">
                        <CustomButton text='Load More' />
                    </div>
                    <div className="col-sm-4 col-3 text-end">
                        <span className="bottom-paginate">1 of 30</span>
                    </div>
                </div>
            </section>





            <From />
            <Footer />




        </>
    )
}

export default HalfOfFame