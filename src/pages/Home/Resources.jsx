import styles from "../../style/Resources.module.css";
import { resourcesData } from "../../util/data";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";



import "swiper/css";
import "swiper/css/pagination"
import CustomButton from "../../components/CustomButton";

const Resources = () => {
    return (
        <section className={styles.resourcesSection}>
            {/* HEADING */}
            <h2 className={styles.heading}>
                Resources for <span>SSB preparation</span>
            </h2>

            {/* SCROLL LIST */}
            <div className={styles.cardsWrapper}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}

                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}

                    modules={[Autoplay]}   // ✅ THIS IS REQUIRED

                    breakpoints={{
                        0: { slidesPerView: 1 },
                        560: { slidesPerView: 2 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1420: { slidesPerView: 5 },
                    }}

                    className={styles.mySwiper}
                >


                    {resourcesData.map((item) => (
                        <SwiperSlide>

                            <div key={item.id} className={styles.card}>
                                <div className={styles.imageBox}>
                                    <img src={item.image} alt="" />
                                    {/* <span className={styles.overlayText}>SSB WITH ISV</span> */}
                                </div>

                                <div className={styles.description}>
                                    <p >{item.title}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="KnowMoreBtn">
                <CustomButton text='EXPLORE MORE' />
            </div>
        </section>
    );
};

export default Resources;




