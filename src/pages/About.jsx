import React, { useRef } from 'react'
import From from './From'
import Footer from './Footer'
import CustomHeader from '../components/CustomHeader'
import SwiperComponents from '../components/SwiperComponents'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import styles from '../style/RogerThat.module.css'

// import 

function About() {


    const prevRef = useRef(null);
    const nextRef = useRef(null);


    const data =
    {
        heading: 'About us',

        text: ' The Integrated SSB Virtuosos, a unit of CS Joint Services Academy (CSJSA), was was setup on 04 July 2021 with a goal to shape India’s youth and fuel their aspirations to join Indian Armed Forces in the Officer Cadre.',
        textTwo: ` We’re not just an academy, we’re a close-knit mentoring community. At CSJSA, every aspirant is personally guided by Lt Cdr Nikhil, whose experience assessing over 12,500 SSB candidates shapes our focused,
                                psychology-driven approach to SSB preparation. Our goal is simple yet powerful: to help every deserving young aspirant realise the dream of becoming a commissioned officer in the Indian Armed Forces.`



    }

    const teamData = [
        {
            id: "member-1",
            image: "/assets/img/about/founder.png",
            designation: "Group Testing Officer",
            name: "Lt. Commander Nikhil Kumar Chandrakala (Retd.)",
            sections: [
                {
                    id: "ssb",
                    title: "SSB Assessor Background",
                    content: [
                        "Trained at DIPR & NSB, Coimbatore",
                        "Certified Group Testing Officer",
                        "Youngest Panelist in SSB history",
                        "Assessed 12,500+ candidates",
                    ],
                },
                {
                    id: "navy",
                    title: "Navy Background",
                    content: [
                        "Indian Navy Officer",
                        "Leadership roles",
                        "Operational experience",
                    ],
                },
            ],
        },

        {
            id: "member-2",
            image: "/assets/img/about/founder.png",
            designation: "Group Testing Officer",
            name: "Lt. Commander Nikhil Kumar Chandrakala (Retd.)",
            sections: [
                {
                    id: "education",
                    title: "Educational Background",
                    text: "Academic qualifications supporting assessment expertise.",
                },
            ],
        },
    ];

    return (
        <>

            <CustomHeader heading={data?.heading} text={data?.text} textTwo={data.textTwo} />



            <SwiperComponents />




            <section className="team-section container sectionspace80 ">
                <div className="row flex-column flex-md-row align-items-center gy-3">

                    {/* TITLE */}
                    <div className="col-12 col-lg-9 order-1 order-lg-1">
                        <div style={{marginBottom:'0'}} className="sct-title">
                            <h2>CS Joint Services Academy team</h2>
                        </div>
                    </div>

                    {/* ARROWS */}


                    {/* <div className="col-12 col-lg-3 order-2 order-lg-2 text-start text-lg-end"> */}

                        <div className="thm-sld-nav-btns d-flex justify-content-start justify-content-lg-end">

                            <div ref={prevRef} className={styles.arrow}>
                                <IoIosArrowBack />
                            </div>
                            <div ref={nextRef} className={styles.arrow}>
                                <IoIosArrowForward />
                            </div>
                        </div>
                    {/* </div> */}

                </div>






                {/* <div className="team-swiper-wrapper">

                    CUSTOM BUTTONS
                    <div className="team-swiper-btn prev-btn">←</div>
                    <div className="team-swiper-btn next-btn">→</div> */}

                <Swiper
                    slidesPerView={1}
                    spaceBetween={40}
                    loop={true}

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}

                    pagination={{
                        el: ".roger-pagination",
                        clickable: true,
                    }}

                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}

                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}

                    breakpoints={{
                        0: { slidesPerView: 1 },
                        1024: { slidesPerView: 1 },
                        1420: { slidesPerView: 1 },
                        1520: { slidesPerView: 1 },
                    }}

                    modules={[Pagination, Navigation, Autoplay]}
                    className={styles.mySwiper}
                >


                    {teamData.map((member, slideIndex) => (
                        <SwiperSlide key={member.id} className="team-slide">
                            <div className="team-card">
                                <div className="col-12 row mx-auto">

                                    {/* LEFT */}
                                    <div className="col-xl-3 col-lg-4 col-md-5">
                                        <div className="team-image">
                                            <div className="teamImgDiv">
                                                <img src={member.image} alt={member.name} />
                                            </div>
                                            <span className="team-designation">{member.designation}</span>
                                            <h4>{member.name}</h4>
                                        </div>
                                    </div>

                                    {/* RIGHT */}
                                    <div className="col-xl-9 col-lg-8 col-md-7">
                                        <div className="team-detailed-content">
                                            <div className="accordion team-accordion">

                                                {member.sections.map((section, index) => {
                                                    const collapseId = `collapse-${slideIndex}-${section.id}`;

                                                    return (
                                                        <div className="accordion-item" key={section.id}>
                                                            <div className="accordion-header">
                                                                <button
                                                                    className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target={`#${collapseId}`}
                                                                >
                                                                    {section.title}
                                                                </button>
                                                            </div>

                                                            <div
                                                                id={collapseId}
                                                                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                                            >
                                                                <div className="accordion-body">

                                                                    {/* LIST CONTENT */}
                                                                    {section.content && (
                                                                        <ul>
                                                                            {section.content.map((item, i) => (
                                                                                <li key={i}>{item}</li>
                                                                            ))}
                                                                        </ul>
                                                                    )}

                                                                    {/* TEXT CONTENT */}
                                                                    {section.text && <p>{section.text}</p>}

                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}


                </Swiper>

                <div className={styles.paginationWrapper}>
                    <div className="roger-pagination"></div>
                </div>

            </section>

            <From />
            <Footer />


        </>
    )
}

export default About