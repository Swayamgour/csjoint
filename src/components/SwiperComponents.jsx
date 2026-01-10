// import React from 'react'

// function SwiperComponents() {
//     return (
//         <div>SwiperComponents</div>
//     )
// }

// export default SwiperComponents

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { useState } from "react";
import "swiper/css";

import styles from "../style/Journey.module.css";
import { journeyData } from "../util/data";

const SwiperComponents = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Our journey</h2>

            <div className={styles.wrapper}>
                {/* TIMELINE */}
                <div className={styles.timeline}>
                    <div className={styles.baseLine}></div>

                    <div
                        className={styles.progressLine}
                        style={{
                            height: `${(activeIndex / (journeyData.length - 1)) * 100}%`,
                        }}
                    />

                    {journeyData.map((_, i) => (
                        <span
                            key={i}
                            className={`${styles.dot} ${i <= activeIndex ? styles.active : ""
                                }`}
                            style={{ top: `${(i / (journeyData.length - 1)) * 100}%` }}
                        />
                    ))}
                </div>

                {/* SWIPER */}
                <Swiper
                    direction="vertical"
                    slidesPerView={1}
                    mousewheel={{
                        forceToAxis: true,
                        sensitivity: 1,
                        releaseOnEdges: true, // 🔥 YAHI MAIN FIX HAI
                    }}
                    modules={[Mousewheel]}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    className={styles.swiper}
                >

                    {journeyData.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className={styles.slide}>
                                <span className={styles.date}>{item.date}</span>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>

                                <div className={styles.imageBox}>
                                    <img src={item.image} alt={item.title} />
                                </div>
                            </div>


                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default SwiperComponents;
