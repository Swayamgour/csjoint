import React from 'react'
import From from './From'
import Footer from './Footer'
import CustomHeader from '../components/CustomHeader'
import SwiperComponents from '../components/SwiperComponents'
// import 

function About() {

    const data =
    {
        heading: 'About US',

        text: ' The Integrated SSB Virtuosos, a unit of CS Joint Services Academy (CSJSA), was was setup on 04 July 2021 with a goal to shape India’s youth and fuel their aspirations to join Indian Armed Forces in the Officer Cadre.',
        textTwo: ` We’re not just an academy, we’re a close-knit mentoring community. At CSJSA, every aspirant is personally guided by Lt Cdr Nikhil, whose experience assessing over 12,500 SSB candidates shapes our focused,
                                psychology-driven approach to SSB preparation. Our goal is simple yet powerful: to help every deserving young aspirant realise the dream of becoming a commissioned officer in the Indian Armed Forces.`



    }
    return (
        <>

            <CustomHeader heading={data?.heading} text={data?.text} textTwo={data.textTwo} />



            <SwiperComponents />




            <section className="team-section container sectionspace80 ">
                <div className="row flex-column flex-md-row align-items-center gy-3">

                    {/* TITLE */}
                    <div className="col-12 col-lg-9 order-1 order-lg-1">
                        <div className="sct-title">
                            <h2>CS joint services academy team</h2>
                        </div>
                    </div>

                    {/* ARROWS */}
                    {/* <div className="col-12 col-lg-3 order-2 order-lg-2 text-start text-lg-end">
                        <div className="thm-sld-nav-btns d-flex justify-content-start justify-content-lg-end">
                            <div className="thm-sld-nav-prev">&#10094;</div>
                            <div className="thm-sld-nav-next">&#10095;</div>
                        </div>
                    </div> */}
                </div>


                <div className="swiper team-swiper">
                    <div className="swiper-wrapper">

                        {/* <!-- SLIDE --> */}
                        <div className="swiper-slide team-slide">

                            <div className="team-card">

                                <div className="col-12 row mx-auto">
                                    <div className="col-lg-3 col-md-4">
                                        {/* <!-- LEFT IMAGE --> */}
                                        <div className="team-image">
                                            <img src="/assets/img/about/founder.png" alt="Image" />
                                            <span className="team-designation">Group Testing Officer</span>
                                            <h4>Lt. Commander Nikhil Kumar Chandrakala (Retd.)</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-8">
                                        {/* <!-- RIGHT CONTENT --> */}
                                        <div className="team-detailed-content">
                                            <div className="accordion team-accordion" id="teamAccordion">

                                                {/* <!-- Item 1 --> */}
                                                <div className="accordion-item">
                                                    <div className="accordion-header">
                                                        <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#bg1">
                                                            SSB Assessor Background
                                                        </button>
                                                    </div>
                                                    <div id="bg1" className="accordion-collapse collapse show" data-bs-parent="#teamAccordion">
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Trained at DIPR & NSB, Coimbatore</li>
                                                                <li>Certified Group Testing Officer</li>
                                                                <li>Youngest Panelist in SSB history</li>
                                                                <li>Assessed 12,500+ candidates</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <!-- Item 2 --> */}
                                                <div className="accordion-item">
                                                    <div className="accordion-header">
                                                        <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#bg2">
                                                            Navy Background
                                                        </button>
                                                    </div>
                                                    <div id="bg2" className="accordion-collapse collapse" data-bs-parent="#teamAccordion">
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Trained at DIPR & NSB, Coimbatore</li>
                                                                <li>Certified Group Testing Officer</li>
                                                                <li>Youngest Panelist in SSB history</li>
                                                                <li>Assessed 12,500+ candidates</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <!-- Item 3 --> */}
                                                <div className="accordion-item">
                                                    <div className="accordion-header">
                                                        <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#bg3">
                                                            Educational Background
                                                        </button>
                                                    </div>
                                                    <div id="bg3" className="accordion-collapse collapse" data-bs-parent="#teamAccordion">
                                                        <div className="accordion-body">
                                                            <p>Academic qualifications supporting assessment expertise.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- SLIDE --> */}
                        <div className="swiper-slide team-slide">

                            <div className="team-card">

                                <div className="col-12 row mx-auto">
                                    <div className="col-lg-3 col-md-4">
                                        {/* <!-- LEFT IMAGE --> */}
                                        <div className="team-image">
                                            <img src="/assets/img/about/founder.png" alt="Image" />
                                            <span className="team-designation">Group Testing Officer</span>
                                            <h4>Lt. Commander Nikhil Kumar Chandrakala (Retd.)</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-8">
                                        {/* <!-- RIGHT CONTENT --> */}
                                        <div className="team-detailed-content">
                                            <div className="accordion team-accordion" id="teamAccordion">

                                                {/* <!-- Item 1 --> */}
                                                <div className="accordion-item">
                                                    <div className="accordion-header">
                                                        <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#bg1">
                                                            SSB Assessor Background
                                                        </button>
                                                    </div>
                                                    <div id="bg1" className="accordion-collapse collapse show" data-bs-parent="#teamAccordion">
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Trained at DIPR & NSB, Coimbatore</li>
                                                                <li>Certified Group Testing Officer</li>
                                                                <li>Youngest Panelist in SSB history</li>
                                                                <li>Assessed 12,500+ candidates</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <!-- Item 2 --> */}
                                                <div className="accordion-item">
                                                    <div className="accordion-header">
                                                        <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#bg2">
                                                            Navy Background
                                                        </button>
                                                    </div>
                                                    <div id="bg2" className="accordion-collapse collapse" data-bs-parent="#teamAccordion">
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>Trained at DIPR & NSB, Coimbatore</li>
                                                                <li>Certified Group Testing Officer</li>
                                                                <li>Youngest Panelist in SSB history</li>
                                                                <li>Assessed 12,500+ candidates</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <!-- Item 3 --> */}
                                                <div className="accordion-item">
                                                    <div className="accordion-header">
                                                        <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#bg3">
                                                            Educational Background
                                                        </button>
                                                    </div>
                                                    <div id="bg3" className="accordion-collapse collapse" data-bs-parent="#teamAccordion">
                                                        <div className="accordion-body">
                                                            <p>Academic qualifications supporting assessment expertise.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <div className="thm-sld-pagination"></div> */}
            </section>

            {/* <From />
            <Footer /> */}


        </>
    )
}

export default About