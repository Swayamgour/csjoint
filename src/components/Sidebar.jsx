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

                <div className={styles.sidebarContainer}>


                    {/* Close */}
                    <button className={styles.closeBtn} onClick={onClose}>
                        ✕
                    </button>

                    {/* Top line */}
                    {/* <div className={styles.topLine}>
                        <span className={styles.dot}></span>
                        <span className={styles.line}></span>
                    </div> */}

                    <div className={styles.topLine}>
                        <span className={styles.line}></span>
                        <span className={`${styles.dot} ${styles.dotLeftToRight}`}></span>
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
                        <NavLink
                            to="/ContactUS"
                            onClick={onClose}
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                        >
                            Contact US
                        </NavLink>
                        <NavLink
                            to="/login"
                            onClick={onClose}
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                        >
                            Login
                        </NavLink>


                    </nav>

                    {/* Bottom line */}
                    {/* <div className={styles.bottomLine}>
                        <span className={styles.line}></span>
                        <span className={styles.dot}></span>
                    </div> */}

                    <div className={styles.bottomLine}>
                        <span className={`${styles.dot} ${styles.dotRightToLeft}`}></span>
                        <span className={styles.line}></span>
                    </div>


                    {/* Contact */}
                    {/* <div className={styles.contact}>
                        <div> <i className="fa fa-whatsapp"></i> +91 84204 22821</div>
                        <div> <i className="fa fa-phone"></i> +91 90246 67319</div>
                    </div> */}

                    <div className={styles.contact}>
                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/918420422821"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.contactItem}
                        >
                            <i className="fa fa-whatsapp"></i> +91 84204 22821
                        </a>

                        {/* Phone Call */}
                        <a
                            href="tel:+919024667319"
                            className={styles.contactItem}
                        >
                            <i className="fa fa-phone"></i> +91 90246 67319
                        </a>
                    </div>

                </div>
            </aside>
        </>
    );
};

export default Sidebar;
