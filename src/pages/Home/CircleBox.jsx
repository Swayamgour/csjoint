import React from 'react'
import styles from '../../style/Navbar.module.css'
import CircularCard from "../../components/CircularCard";
import CustomButton from "../../components/CustomButton";
import Glow from '../../components/Glow';
import Heading from '../../components/Heading';

function CircleBox() {

    const array = [
        { number: "180", title: "Candidates Recommended" },
        { number: "90", title: "Years of Domain Expertise" },
        { number: "4", title: "Years of Proven Track Record" },
    ];



    return (
        <section className={styles.circleSection}>
            {/* <Glow  */}
            <Glow
                size="clamp(180px, 30vw, 320px)"
                top="clamp(150px, 40vh, 300px)"
                left="clamp(55%, 60vw, calc(50% + 320px))"
            />

            <div className={styles.circleSectionCenterCon}>
                <div className={styles.circleSectionContainer}>
                    {array.map((e, index) => (
                        <CircularCard
                            key={index}
                            number={e.number}
                            title={e.title}
                        />
                    ))}
                </div>

                <div>
                    {/* <h1 className={styles.headingOfSSb}>
                        <span>What is</span>
                        <span style={{ color: "#3b3930" }}>
                            SSB with ISV?
                        </span>
                    </h1> */}

                    <Heading h1='What is' t1='SSB with ISV?' />

                    <p className={styles.titleOfSecondSection}>
                        India’s first online SSB mentoring platform with a
                        proprietary digital GTO training experience (GTX ™).
                    </p>

                    <p className={styles.titleOfThirdSection}>
                        <span className={styles.text}>
                            Handholding till recommendation
                        </span>
                        <span className={styles.divider}>/</span>
                        <span className={styles.text}>
                            Over 50% candidates recommended
                        </span>
                        <span className={styles.divider}>/</span>
                        <span className={styles.text}>
                            Virtual GTO Training Experience
                        </span>
                    </p>
                    <div style={{ marginTop: '30px' }}>

                        <CustomButton text="Sign Up Now" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CircleBox