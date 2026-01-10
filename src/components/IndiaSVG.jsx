import styles from "../style/SelectionMap.module.css";

export default function IndiaSVG({ activeTab, hoveredRegion, setHoveredRegion }) {
    return (
        <svg
            viewBox="0 0 600 650"
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* BASE MAP */}
            <path
                className={styles.base}
                d="M300,50 L400,80 L500,150 L550,250 L520,400 L450,550 L350,600 L200,550 L150,450 L100,350 L80,250 L120,150 L200,100 Z"
            />

            {/* ARMY */}
            {activeTab === "army" && (
                <>
                    <path
                        className={`${styles.region} ${hoveredRegion === 0 ? styles.activeRegion : ""}`}
                        d="M280,100 L380,130 L450,200 L420,300 L350,350 L300,320 L250,250 L220,180 Z"
                        onMouseEnter={() => setHoveredRegion(0)}
                        onMouseLeave={() => setHoveredRegion(null)}
                    />
                    <text x="320" y="200" className={styles.regionText}>31|32</text>
                </>
            )}

            {/* NAVY */}
            {activeTab === "navy" && (
                <circle cx="150" cy="300" r="35" className={styles.navyRegion} />
            )}

            {/* AIR FORCE */}
            {activeTab === "airforce" && (
                <circle cx="280" cy="150" r="30" className={styles.airforceRegion} />
            )}
        </svg>
    );
}
