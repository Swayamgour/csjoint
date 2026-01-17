import { useState } from "react";
import styles from "../style/SelectionMap.module.css";
import IndiaSVG from "./IndiaSVG";
import { style } from "framer-motion/client";

export default function SelectionMap() {
    const [activeTab, setActiveTab] = useState("army");
    const [hoveredRegion, setHoveredRegion] = useState(null);

    const selectionCenters = {
        army: [
            "31 | 32 – Selection Centre North, Jalandhar",
            "11 | 14 | 18 | 19 | 34 – Selection Centre East, Prayagraj",
            "20 | 21 | 22 | 33 – Selection Centre Central, Bhopal",
            "17 | 24 | 12 – Selection Centre South, Bangalore",
        ],

        airforce: [
            "1 AFSB – Dehradun",
            "2 AFSB – Mysore",
            "3 AFSB – Gandhinagar",
            "4 AFSB – Varanasi",
            "5 AFSB – Guwahati",
        ],

        navy: [
            "NSB I – Visakhapatnam",
            "NSB II – Bhopal",
            "NSB III – Kolkata",
            // "NSB IV – Visakhapatnam",
            "NSB V – Bangalore",
        ],
    };


    return (
        <>
            <section className={styles.section}>
                <h2 className={styles.title}>
                    Services Selection Boards & <br />
                    Air Force Selection Boards of India
                </h2>

                {/* TABS */}
                <div className={styles.tabs}>
                    {["army", "navy", "airforce"].map(tab => (
                        <button
                            key={tab}
                            className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
                            onClick={() => {
                                setActiveTab(tab);
                                setHoveredRegion(null);
                            }}
                        >
                            {tab.toUpperCase()}
                        </button>
                    ))}
                </div>

                <div className={styles.content}>
                    {/* MAP */}
                    <div className={styles.mapWrapper}>
                        <div className={styles.mapContainer}>
                            <IndiaSVG
                                activeTab={activeTab}
                                hoveredRegion={hoveredRegion}
                                setHoveredRegion={setHoveredRegion}
                            // text={'kjhgf'}
                            />
                        </div>
                    </div>

                    {/* <div className={styles.SelectionMapCon}>
                        <h2>Index</h2> */}

                    <div className={styles.SelectionMapCon}>
                        <h2>Index</h2>

                        {selectionCenters[activeTab]?.map((item, index) => (
                            <p style={{marginTop:'5px'}} key={index} className={styles.indexItem}>
                                {item}
                            </p>
                        ))}
                    </div>

                    {/* </div> */}



                </div>
            </section>


            <section className="FAQ-section sectionspace80">
                <div className="container">
                    <div className="sct-title">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-9">
                            <div className="accordion faq-accordion" id="faqAccordion">

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq1" aria-expanded="true">
                                            What is the duration of the SSB selection process?
                                        </button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            The SSB selection process lasts for 05 consecutive days.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq2">
                                            Is coaching necessary for SSB preparation?
                                        </button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Coaching is not mandatory; self-preparation with guidance is sufficient.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq3">
                                            What happens if a candidate fails the SSB?
                                        </button>
                                    </h2>
                                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Candidates can reapply for future entries if eligible.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq4">
                                            Can candidates apply for multiple Armed Forces simultaneously?
                                        </button>
                                    </h2>
                                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Yes, candidates may apply for multiple services if eligibility criteria are met.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq5">
                                            Are there any special reservations or relaxations?
                                        </button>
                                    </h2>
                                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Reservations and relaxations are as per government norms.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>



    );
}
