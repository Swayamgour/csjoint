import { motion, useAnimationControls } from "framer-motion";
import styles from "../style/Navbar.module.css";
import { useRef } from "react";
import useCountUp from "./useCountUp";

export default function CircleStat({ number, title, timeDel }) {
    const controls = useAnimationControls();
    const hasViewed = useRef(false);

    const { ref, count } = useCountUp(Number(number), 2000);

    const runAnimation = async (timeDel) => {
        await controls.set({ rotate: 10 }); // reset
        controls.start({
            rotate: 360,
            transition: { duration: timeDel, ease: "easeInOut" },
        });
    };

    return (
        <div className={styles.containerOfCircle}>
            <div className={styles.wrapper}>
                <motion.div
                    className={styles.circle}
                    onMouseEnter={runAnimation}
                    onViewportEnter={() => {
                        if (!hasViewed.current) {
                            hasViewed.current = true;
                            runAnimation(timeDel);
                        }
                    }}
                    viewport={{ once: true }} // 👈 screen me ek hi baar
                >
                    <motion.div className={styles.orbit} animate={controls}>
                        <div className={styles.dot}></div>
                    </motion.div>

                    <div ref={ref} className={styles.center}>
                        <span className={styles.number}>{count}</span>
                        <span className={styles.plus}>+</span>
                    </div>
                </motion.div>
            </div>

            <p className={styles.circleOutSideContent}>{title}</p>
        </div>
    );
}




