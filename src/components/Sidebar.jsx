import { NavLink } from "react-router-dom";
import styles from "../style/Sidebar.module.css";

const Sidebar = ({ open, onClose }) => {
    return (
        <>
            {/* Overlay */}
            <div
                className={`${styles.overlay} ${open ? styles.show : ""}`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <aside className={`${styles.sidebar} ${open ? styles.open : ""}`}>
                {/* Close */}
                <button className={styles.closeBtn} onClick={onClose}>
                    ✕
                </button>

                {/* Top line */}
                <div className={styles.topLine}>
                    <span className={styles.dot}></span>
                    <span className={styles.line}></span>
                </div>

                {/* Menu */}
                <nav className={styles.menu}>
                    <NavLink
                        to="/"
                        onClick={onClose}
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        onClick={onClose}
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }
                    >
                        About us
                    </NavLink>

                    <NavLink
                        to="/magazine"
                        onClick={onClose}
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }
                    >
                        Roger That - Our monthly magazine
                    </NavLink>

                    <NavLink
                        to="/HalfOfFame"
                        onClick={onClose}
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }
                    >
                        Hall of fame
                    </NavLink>

                    <NavLink
                        to="/Courses"
                        onClick={onClose}
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }
                    >
                        Courses
                    </NavLink>

                    <NavLink
                        to="/GtoTrain"
                        onClick={onClose}
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }
                    >
                        GTX™
                    </NavLink>
                    <NavLink
                        to="/SsbPage"
                        onClick={onClose}
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }
                    >
                        SSB
                    </NavLink>


                </nav>

                {/* Bottom line */}
                <div className={styles.bottomLine}>
                    <span className={styles.line}></span>
                    <span className={styles.dot}></span>
                </div>

                {/* Contact */}
                <div className={styles.contact}>
                    <div> <i className="fa fa-phone"></i> +91 84204 22821</div>
                    <div> <i className="fa fa-phone"></i> +91 90246 67319</div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
