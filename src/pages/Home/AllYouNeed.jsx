import CustomButton from "../../components/CustomButton";
import styles from "../../style/AllYouNeed.module.css";

const AllYouNeed = () => {
    return (
        <section className={styles.section}>
            {/* BACKGROUND IMAGE */}
            <div className={styles.bgImage}></div>

            {/* LEFT FOREGROUND IMAGE */}
            <div className={styles.leftImage}></div>

            {/* CONTENT */}
            <div className={styles.contentMain}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>
                        All you need to   <span>

                            know  <br /> about SSB
                        </span>
                    </h2>


                    <div className={styles.infoBox}>
                        <div className={styles.sectionGlowTwo}></div>

                        <p>
                            The Services Selection Board (SSB) is not an exam, it is a five-day leadership assessment designed to identify officer-like qualities in candidates aspiring to identify shades of Officer-Like-Qualities in candidates aspiring to join the Indian Armed Forces in the officer cadre. From psychological test and group situational tasks to personal interviews, the SSB process
                        </p>


                        <CustomButton text={'KNOW MORE'} />
                        {/* <button className={styles.btn}>KNOW MORE</button> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllYouNeed;
