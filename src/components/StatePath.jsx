import { useEffect, useRef } from "react";
import styles from "../style/SelectionMap.module.css";

export default function StatePath({
  state,
  isActive,
  setActiveBox,
  setHoveredState
}) {
  const pathRef = useRef(null);

  useEffect(() => {
    if (isActive && pathRef.current) {
      const bbox = pathRef.current.getBBox();
      setActiveBox({
        id: state.id,
        x: bbox.x + bbox.width / 2,
        y: bbox.y
      });
    }
  }, [isActive, state.id, setActiveBox]);

  return (
    <g>
      <path
        ref={pathRef}
        d={state.path}
        className={`${styles.state} ${
          isActive ? styles.activeState : ""
        }`}
        onMouseEnter={() => setHoveredState(state.id)}
        onMouseLeave={() => setHoveredState(null)}
      />
    </g>
  );
}
