import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from '../../style/RogerThat.module.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";
import CustomButton from "../../components/CustomButton";
import Heading from "../../components/Heading";

const RogerThat = () => {
    const array = [
        { id: "1", img: "/assets/rebot1.png" },
        { id: "2", img: "/assets/robot2.png" },
        { id: "3", img: "/assets/rebot1.png" },
        { id: "4", img: "/assets/robot2.png" },
    ];


    // useRef

    const prevRef = useRef(null);
    const nextRef = useRef(null);


    return (
        <section className={styles.section}>
            {/* HEADER */}
            <div className={styles.header}>
                <div>

                    <div className="headingOfMargin">
                        <Heading h1={'ROGER That'} t1='with NKC' />
                    </div>
                    <p className={styles.subTitle}>Our Official Podcast channel</p>
                    <p className={styles.description}>
                        Roger That with NKC is Lt. Commander Nikhil Kumar Chandrakala’s military
                        leadership and strategy channel focused on deconstructing real stories
                        from the Indian Armed Forces.
                    </p>
                </div>

                {/* ARROWS */}
                <div className={styles.arrows}>
                    <div ref={prevRef} className={styles.arrow}><IoIosArrowBack /></div>
                    <div ref={nextRef} className={styles.arrow}><IoIosArrowForward /></div>
                </div>
            </div>

            {/* SWIPER */}
            <Swiper
                slidesPerView={2}
                spaceBetween={40}

                loop={true}   // 👈 boolean rakho (string nahi)

                autoplay={{
                    delay: 2500,                 // ⏱ 2.5 sec
                    disableOnInteraction: false, // 👆 swipe ke baad bhi chalta rahe
                    pauseOnMouseEnter: true,     // 🖱 hover par pause (optional)
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
                    1024: { slidesPerView: 2 },
                }}

                modules={[Pagination, Navigation, Autoplay]}
                className={styles.mySwiper}
            >

                {array.map((e) => (
                    <SwiperSlide key={e.id}>
                        <div className={styles.card}>
                            <img src={e.img} alt={e.id} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* CUSTOM PAGINATION */}
            <div className={styles.paginationWrapper}>
                <div style={{ width: 'fit-content' }} className="roger-pagination"></div>
            </div>

            {/* CTA */}
            <div className='col-12 text-center d-flex justify-content-center mt-4'>
                {/* <button className={styles.ctaBtn}></button> */}
                <CustomButton text={'VISIT OUR CHANNEL'} />
            </div>
        </section>
    );
};

export default RogerThat;
