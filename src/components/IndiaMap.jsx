import styles from "../style/SelectionMap.module.css";

export default function IndiaMap({ activeTab, hoveredRegion, setHoveredRegion }) {
    return (
        <svg
            viewBox="0 0 600 650"
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* INDIA BASE */}
            <path
                className={styles.base}
                d="M300,50 L400,80 L500,150 L550,250 L520,400 L450,550 L350,600 L200,550 L150,450 L100,350 L80,250 L120,150 L200,100 Z"
            />

            {/* ARMY REGIONS */}
            {activeTab === "army" && (
                <>
                    <path
                        className={`${styles.region} ${hoveredRegion === 0 ? styles.activeRegion : ""}`}
                        d="M280,100 L380,130 L450,200 L420,300 L350,350 L300,320 L250,250 L220,180 Z"
                        onMouseEnter={() => setHoveredRegion(0)}
                        onMouseLeave={() => setHoveredRegion(null)}
                    />
                    <text x="320" y="200" className={styles.regionText}>31|32</text>

                    <path
                        className={`${styles.region} ${hoveredRegion === 1 ? styles.activeRegion : ""}`}
                        d="M380,130 L480,180 L530,300 L500,400 L420,450 L350,350 L420,300 Z"
                        onMouseEnter={() => setHoveredRegion(1)}
                        onMouseLeave={() => setHoveredRegion(null)}
                    />
                    <text x="450" y="320" className={styles.regionText}>11|14|18|19|34</text>

                    <path
                        className={`${styles.region} ${hoveredRegion === 2 ? styles.activeRegion : ""}`}
                        d="M250,250 L350,350 L420,450 L350,500 L250,450 L200,350 Z"
                        onMouseEnter={() => setHoveredRegion(2)}
                        onMouseLeave={() => setHoveredRegion(null)}
                    />
                    <text x="280" y="400" className={styles.regionText}>20|21|22</text>

                    <path
                        className={`${styles.region} ${hoveredRegion === 3 ? styles.activeRegion : ""}`}
                        d="M200,350 L250,450 L350,500 L300,580 L200,550 L150,450 Z"
                        onMouseEnter={() => setHoveredRegion(3)}
                        onMouseLeave={() => setHoveredRegion(null)}
                    />
                    <text x="230" y="500" className={styles.regionText}>17|24</text>
                </>
            )}

            {/* NAVY */}
            {activeTab === "navy" && (
                <>
                    <circle cx="150" cy="300" r="35" className={styles.navyRegion} />
                    <circle cx="450" cy="350" r="35" className={styles.navyRegion} />
                    <circle cx="250" cy="550" r="35" className={styles.navyRegion} />
                </>
            )}

            {/* AIR FORCE */}
            {activeTab === "airforce" && (
                <>
                    <circle cx="280" cy="150" r="30" className={styles.airforceRegion} />
                    <circle cx="200" cy="450" r="30" className={styles.airforceRegion} />
                    <circle cx="380" cy="280" r="30" className={styles.airforceRegion} />
                    <circle cx="480" cy="200" r="30" className={styles.airforceRegion} />
                </>
            )}
        </svg>
    );
}
