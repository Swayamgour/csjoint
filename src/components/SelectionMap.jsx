import { useState } from "react";
import styles from "../style/SelectionMap.module.css";
import IndiaSVG from "./IndiaSVG";
import { style } from "framer-motion/client";
import { faqData } from "../util/data";

export default function SelectionMap() {
    const [activeTab, setActiveTab] = useState("army");
    const [hoveredRegion, setHoveredRegion] = useState(null);


//   {faqData}


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
            // "NSB I – Visakhapatnam",
            "NSB Vizag",
            "33 SSB, Bhopal",
            // "NSB II – Bhopal",
            "SSB (Kolkata)",
            "12 SSB, Bangalore",
            // "NSB III – Kolkata",
            // // "NSB IV – Visakhapatnam",
            // "NSB V – Bangalore",
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
                        {/* <h2>Index</h2> */}

                        {selectionCenters[activeTab]?.map((item, index) => (
                            <p style={{ marginTop: '5px' }} key={index} className={styles.indexItem}>
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
                                {faqData.map((item, index) => (
                                    <div className="accordion-item" key={item.id}>
                                        <h2 className="accordion-header">
                                            <button
                                                className={`accordion-button ${!item.isOpen ? "collapsed" : ""}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#${item.id}`}
                                                aria-expanded={item.isOpen}
                                            >
                                                {item.question}
                                            </button>
                                        </h2>

                                        <div
                                            id={item.id}
                                            className={`accordion-collapse collapse ${item.isOpen ? "show" : ""}`}
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                           
                        </div>
                    </div>

                </div>

            </section>
        </>



    );
}
