import { motion, useAnimationControls } from "framer-motion";
import styles from "../style/Navbar.module.css";
import { useRef } from "react";

export default function CircleStat({ number, title }) {
    const controls = useAnimationControls();
    const hasViewed = useRef(false);

    const runAnimation = async () => {
        await controls.set({ rotate: 0 }); // reset
        controls.start({
            rotate: 360,
            transition: { duration: 1, ease: "easeInOut" },
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
                            runAnimation();
                        }
                    }}
                    viewport={{ once: true }} // 👈 screen me ek hi baar
                >
                    <motion.div className={styles.orbit} animate={controls}>
                        <div className={styles.dot}></div>
                    </motion.div>

                    <div className={styles.center}>
                        <span className={styles.number}>{number}</span>
                        <span className={styles.plus}>+</span>
                    </div>
                </motion.div>
            </div>

            <p className={styles.circleOutSideContent}>{title}</p>
        </div>
    );
}
