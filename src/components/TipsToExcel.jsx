import React, { useState } from "react";
import styles from "../style/TipsToExcel.module.css";

const TipsToExcel = () => {

    const tipsData = [
        {
            title: "Enhance your general awareness",
            desc: `Stay updated with current affairs, national and international
    events, and defence-related news. A well-informed candidate stands
    out during group discussions and interviews.`,

        },
        {
            title: "Practice time management",
            desc: `Stay updated with current affairs, national and international
    events, and defence-related news. A well-informed candidate stands
    out during group discussions and interviews.`,
        },
        {
            title: "Prepare for the personal interview",
            desc: `Stay updated with current affairs, national and international
    events, and defence-related news. A well-informed candidate stands
    out during group discussions and interviews.`,
        },
        {
            title: "Participate in group activities",
            desc: `Stay updated with current affairs, national and international
    events, and defence-related news. A well-informed candidate stands
    out during group discussions and interviews.`,
        },
        {
            title: "Stay physically fit",
            desc: `Stay updated with current affairs, national and international
    events, and defence-related news. A well-informed candidate stands
    out during group discussions and interviews.`,
        },
    ];

    const [active, setActive] = useState(0);


    return (
        <section className={styles.section}>
            {/* HEADER */}
            <div className={styles.header}>
                <h1>
                    Tips to excel at <br /> Services Selection Board
                </h1>
                <p>
                    Succeeding in the Services Selection Board selection process requires
                    diligent preparation and a focused approach. Here are some valuable
                    tips to help you excel.
                </p>

                <h3>
                    Understand the Officer Like Qualities (OLQs)
                </h3>

                <p style={{ marginTop: '20px' }}>
                    The Services Selection Board looks for shades of Officer Like Qualities (OLQs) in candidates. Officer Like Qualities is nothing but a method to interpret one’s personality. There are 15 OLQs as enumerated below:
                </p>
            </div>

            {/* CONTENT */}
            <div className={styles.content}>
                {/* LEFT : FACTORS */}
                <div className={styles.factors}>
                    <div className={styles.factorCard}>
                        <h3>Factor 1</h3>
                        <h4>Planning and Organising</h4>
                        <ul>
                            <li>Effective Intelligence</li>
                            <li>Reasoning Ability</li>
                            <li>Organising Ability</li>
                            <li>Power of Expression</li>
                        </ul>
                    </div>

                    <div className={styles.factorCard}>
                        <h3>Factor 2</h3>
                        <h4>Social Adjustment</h4>
                        <ul>
                            <li>Social Adaptability</li>
                            <li>Cooperation</li>
                            <li>Sense of Responsibility</li>
                        </ul>
                    </div>

                    <div className={styles.factorCard}>
                        <h3>Factor 3</h3>
                        <h4>Social Effectiveness</h4>
                        <ul>
                            <li>Initiative</li>
                            <li>Self Confidence</li>
                            <li>Speed of Decision</li>
                            <li>Ability to Influence the Group</li>
                            <li>Liveliness</li>
                        </ul>
                    </div>

                    <div className={styles.factorCard}>
                        <h3>Factor 4</h3>
                        <h4>Dynamic</h4>
                        <ul>
                            <li>Determination</li>
                            <li>Courage</li>
                            <li>Stamina</li>
                        </ul>
                    </div>
                </div>

                {/* RIGHT : TIPS */}
                <div className={styles.tips}>
                    {tipsData?.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.tip} ${active === index ? styles.open : ""
                                }`}
                            onClick={() =>
                                setActive(active === index ? null : index)
                            }
                        >
                            <div  className={styles.tipTitle}>{item.title}</div>

                            {item.desc && (
                                <div
                                    className={`${styles.tipContent} ${active === index ? styles.show : ""
                                        }`}
                                >
                                    <p>{item.desc}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TipsToExcel;
