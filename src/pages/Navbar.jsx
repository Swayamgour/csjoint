import React, { useState } from "react";
import styles from "../style/Navbar.module.css";
import { IoMenu } from "react-icons/io5";

import Sidebar from "../components/Sidebar";

function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.pageWrapperMain}>
                {/* <div className={styles.}></div> */}
                {/* HERO SECTION */}
                <section className={styles.heroSection}>
                    <div className={styles.topBar}>
                        <img
                            src="/assets/logo/logo.png"
                            alt="Logo"
                            className={styles.logo}
                        />
                        <IoMenu className={styles.menuIcon} onClick={() => setOpen(true)} />
                    </div>

                    

                    <header className={styles.header}>
                        <div className={styles.subtitle}>CRAFTING THE FUTURE OF</div>

                        <h1 className={styles.title}>
                            <span className={styles.military}>Indian Military</span>{" "}
                            <span className={styles.leadership}>Leadership</span>
                        </h1>

                        <div className={styles.subtitleTwo}>
                            Integrated SSB Virtuosos
                        </div>
                    </header>

                    {/* <div className={styles.Divider}>

                    </div> */}
                   
                </section>

                <Sidebar open={open} onClose={() => setOpen(false)} />

                {/* CIRCLE SECTION */}

            </div>


        </div>
    );
}

export default Navbar;
