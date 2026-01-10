import styles from "../style/SelectionMap.module.css";
import { STATES } from "../util/data";

export default function IndiaSVG({
    activeTab,
    hoveredState,
    setHoveredState
}) {
    return (
        <svg viewBox="0 0 1000 1100" className={styles.svg}>
            {STATES.map((state) => {
                const isActive = state[activeTab];

                return (
                    <path
                        key={state.id}
                        d={state.path}
                        className={`${styles.state} ${isActive ? styles.activeState : ""
                            }`}
                        // onMouseEnter={() => setHoveredState(state.id)}
                        // onMouseLeave={() => setHoveredState(null)}
                    />
                );
            })}
        </svg>
    );
}
