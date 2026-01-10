import { useState } from "react";
import styles from "../style/SelectionMap.module.css";
import IndiaSVG from "./IndiaSVG";

export default function SelectionMap() {
    const [activeTab, setActiveTab] = useState("army");
    const [hoveredRegion, setHoveredRegion] = useState(null);

    return (
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
                        />
                    </div>
                </div>

                {/* INDEX */}
                <div className={styles.index}>
                    <h3>Index</h3>
                    <p>Active: {activeTab.toUpperCase()}</p>
                </div>
            </div>
        </section>
    );
}
