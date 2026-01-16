import React from 'react'
import CustomHeader from '../../components/CustomHeader'
import From from '../From'
import Footer from '../Footer'

function GtoTrain() {

    const data = {
        heading: 'GTX',
        span: 'TM',
        textTwo: ` GTX™ (GTO Training Xperience) is a virtual training Experience that emulates the outdoor group tasks as they exist on a real GTO ground across SSBs and AFSBs.
                                    It offers aspirants a first-hand visual and mental experience of the tasks before they encounter them physically — building clarity, familiarity, and confidence.`,

        text: ' See the GTO ground before you step onto it.',
        textThree: 'GTO Training Xperience',
        color: true
    }
    return (
        <>




            <CustomHeader heading={data.heading} text={data.text} textTwo={data.textTwo} span={data.span} textThree={data.textThree} color={data?.color} />

            <section className="GTO-pedagogical-section sectionspace80">
                <div className="container">
                    <div className="sct-title">
                        <h2>The pedagogical intent</h2>
                    </div>

                    <div className="pedagogical-orbit-box">
                        <span className="pedagogical-box-orbit-dot d1"></span>
                        <span className="pedagogical-box-orbit-dot d2"></span>
                        <span className="pedagogical-box-orbit-dot d3"></span>

                        <div className="pedagogical-text-box">
                            <p>
                                For most candidates, the hardest part of the GTO ground isn’t the task — it’s the unknown.
                                Unfamiliar structures, unclear movement, time pressure, and group dynamics often distract capable aspirants from what truly matters: their behaviour under observation.
                            </p>

                            <p>
                                GTX<sup>TM</sup> does not teach shortcuts or rehearsed behaviour.<br />
                                It prepares the mind first — much like chair flying before a sortie or mental navigation before letting go of a ship’s lines. By understanding task structure, group flow, and time pressure in advance, aspirants can approach the physical ground with calm and focus.

                            </p>
                        </div>
                    </div>

                </div>
            </section>
            <section className="enable-section sectionspace80">
                <div className="container">
                    <div className="row align-items-center g-4">


                        <div className="col-lg-5">
                            <div className="sct-title mb-3">
                                <h2>What it enables</h2>
                            </div>
                            <p className="enable-subtitle">GTX<sup>TM</sup> helps aspirants:</p>

                            <div className="enable-list">
                                <div className="enable-item">
                                    <i className="fa fa-eye"></i>
                                    <span>VISUALISE TASK LAYOUTS AND SEQUENCING</span>
                                </div>

                                <div className="enable-item">
                                    <i className="fa fa-users"></i>
                                    <span>UNDERSTAND GROUP MOVEMENT AND TIMING</span>
                                </div>

                                <div className="enable-item">
                                    <i className="fa fa-gears"></i>
                                    <span>REDUCE AVOIDABLE ANXIETY FROM UNFAMILIARITY</span>
                                </div>

                                <div className="enable-item">
                                    <i className="fa fa-bullseye"></i>
                                    <span>FOCUS ON NATURAL BEHAVIOUR AND LEADERSHIP</span>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-7">
                            <div className="enable-image-wrap">
                                <img src="/assets/img/about/journey-slider.png" alt="Enable Image" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>




            <section className="GTO-img-section">
                <div className="container-fluid px-0">
                    <div className="row g-0">
                        <div className="col-lg-12 img-gradient-wrapper">
                            <img src="/assets/img/about/about-breed.webp" alt="Enable Image" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="GTO-what-is-not-section sectionspace80">
                <div className="container what-is-not-text-box px-0">
                    <div className="row g-0">
                        <div className="col-lg-3 d-flex align-items-center justify-content-center">
                            <div className="what-is-not-img">
                                <img src="/assets/img/about/Group_67.png" alt="GTX Image" />
                            </div>
                        </div>
                        <div className="col-lg-9 px-0">
                            <div className="what-is-not-text">
                                <div className="sct-title">
                                    <h2>What GTX™ is not</h2>
                                </div>
                                <ul className="ps-0">
                                    <li>It is not a replacement for the real GTO ground.</li>
                                    <li>It is not a coaching shortcut.</li>
                                    <li>GTX™ is a preparatory bridge — designed to support authentic performance.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="GTO-bottom-banner-section sectionspace40 pb-5">
                <div className="container bottom-banner-text-box">
                    <div className="row g-0">

                        <div className="col-lg-9 mx-auto">
                            <div className="bottom-banner-text text-center">
                                <div className="sct-title mb-4">
                                    <h2>Built with experience, <br />used with responsibility</h2>
                                </div>
                                <p className='text-center'>
                                    Created by an ex-GTO, GTX™ blends real assessment insight with modern technology   <br />staying fully aligned with the spirit and integrity of the SSB process.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <From />
            <Footer />


        </>
    )
}

export default GtoTrain