import React from "react";
import styles from "../style/Navbar.module.css";
import { IoMenu } from "react-icons/io5";
import CircularCard from "../components/CircularCard";
import CustomButton from "../components/CustomButton";

function Navbar() {
    const array = [
        { number: "180", title: "Candidates Recommended" },
        { number: "90", title: "Years of Domain Expertise" },
        { number: "4", title: "Years of Proven Track Record" },
    ];

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.pageWrapperMain}>
                {/* HERO SECTION */}
                <section className={styles.heroSection}>
                    <div className={styles.topBar}>
                        <img
                            src="/assets/logo/logo.png"
                            alt="Logo"
                            className={styles.logo}
                        />
                        <IoMenu className={styles.menuIcon} />
                    </div>

                    <header className={styles.header}>
                        <div className={styles.subtitle}>CRAFTING THE FUTURE OF</div>

                        <h1 className={styles.title}>
                            <span className={styles.military}>Indian Military</span>{" "}
                            <span className={styles.leadership}>Leadership</span>
                        </h1>

                        <div className={styles.subtitleTwo}>
                            Integrated SSB Virtuosos
                        </div>
                    </header>
                </section>

                {/* CIRCLE SECTION */}
                <section className={styles.circleSection}>
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
                            <h1 className={styles.headingOfSSb}>
                                <span>What is</span>
                                <span style={{ color: "#3b3930" }}>
                                    SSB with ISV?
                                </span>
                            </h1>

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

                            <CustomButton text="Sign Up Now" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Navbar;
