import styles from "../style/SelectionMap.module.css";
import { STATES } from "../util/data";

export default function IndiaSVG({ activeTab, hoveredRegion, setHoveredRegion }) {

    console.log(hoveredRegion)

    return (
        <>

            {/* // <div className={styles.svgWrapper}> */}
            <svg viewBox="0 0 1000 1100" className={styles.svg}>
                {STATES.map((state) => {
                    const isActive = state[activeTab];

                    return (
                        <path
                            key={state.id}
                            d={state.path}
                            className={`${styles.state} ${isActive ? styles.activeState : ""}`}
                            onMouseEnter={(e) =>
                                setHoveredRegion({
                                    name: state.name,
                                   
                                    label:
                                        activeTab === "army"
                                            ? state.label || state.name
                                            : activeTab === "navy"
                                                ? state.label2 || state.name
                                                : state.label3 || state.name,


                                    x: e.clientX,
                                    y: e.clientY,
                                })
                            }
                            onMouseLeave={() => setHoveredRegion(null)}
                        />
                    );
                })}
            </svg>

            {/* Tooltip box */}
            {hoveredRegion && (
                <div
                    className={styles.tooltip}
                    style={{
                        left: hoveredRegion.x + 10,
                        top: hoveredRegion.y + 10,
                    }}
                >
                    {hoveredRegion.label}
                </div>
            )}
            {/* // </div> */}
        </>
    );
}

