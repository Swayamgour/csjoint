import { useState } from "react";
import styles from "../../src/style/Methodology.module.css";
import DaySchedule from "./DaySchedule";

const DATA = {
    stage1: {
        intro: "Stage 1 is a screening stage consisting of intelligence and perception tests:",
        items: [
            {
                title: "Officer Intelligence Rating (OIR)",
                desc: "Verbal and Non-Verbal intelligence tests to assess reasoning ability.",
            },
            {
                title: "Picture Perception & Discussion Test (PPDT)",
                desc: "Candidates write a story on a picture and participate in group discussion.",
            },
        ],
    },

    stage2: {
        intro: "It comprises 03 assessments by 03 different specialists:",
        items: [
            {
                title: "Personal Interview by Interviewing Officer",
            },
            {
                title: "Psych Tests",
                desc: "Thematic Apperception Test (TAT), Word Association Test (WAT), Situation Reaction Test (SRT) and Self Description Test (SDT) evaluated by a Psychologist or Technical Officer",
            },
            {
                title: "Group Testing by Group Testing Officer",
            },
        ],
    },

    conference: {
        intro:
            "Board Conference is the final stage where overall performance is reviewed:",
        items: [
            {
                title: "Conference Discussion",
                desc: "Final interaction with the board members.",
            },
            {
                title: "Final Recommendation",
                desc: "Merit list prepared based on cumulative performance.",
            },
        ],
    },
};

const Methodology = () => {
    const [activeTab, setActiveTab] = useState("stage2");

    const currentData = DATA[activeTab];

    return (
        <>
            <section className={styles.section}>
                <div className={styles.wrapper}>
                    {/* TITLE */}
                    <h2 className={styles.title}>
                        Methodology of selection of officers <br />
                        at Services Selection Board
                    </h2>

                    {/* TABS */}
                    <div className={styles.tabs}>
                        <span
                            className={`${styles.tab} ${activeTab === "stage1" ? styles.active : ""
                                }`}
                            onClick={() => setActiveTab("stage1")}
                        >
                            Stage 1 Testing
                        </span>

                        <span
                            className={`${styles.tab} ${activeTab === "stage2" ? styles.active : ""
                                }`}
                            onClick={() => setActiveTab("stage2")}
                        >
                            Stage 2 Testing
                        </span>

                        <span
                            className={`${styles.tab} ${activeTab === "conference" ? styles.active : ""
                                }`}
                            onClick={() => setActiveTab("conference")}
                        >
                            Board Conference
                        </span>
                    </div>

                    {/* CONTENT */}
                    <div className={styles.content}>
                        <p className={styles.intro}>{currentData.intro}</p>

                        {currentData.items.map((item, index) => (
                            <div key={index}>
                                <div className={styles.item}>
                                    <span className={styles.index}>{index + 1}.</span>
                                    <span className={styles.text}>{item.title}</span>
                                </div>

                                {item.desc && (
                                    <p className={styles.subText}>{item.desc}</p>
                                )}

                                {index !== currentData.items.length - 1 && (
                                    <div className={styles.divider}></div>
                                )}
                            </div>
                        ))}

                        <div className={styles.dot}></div>
                    </div>
                </div>
            </section>

          
        </>
    );
};

export default Methodology;
