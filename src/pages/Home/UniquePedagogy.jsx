import CustomButton from "../../components/CustomButton";
import Heading from "../../components/Heading";
import styles from "../../style/UniquePedagogy.module.css";

const UniquePedagogy = () => {
    return (
        <section className={styles.wrapper}>
            {/* TOP CONTENT */}

            {/* <div className={styles.top}> */}
            {/* <div className={styles.left}> */}
            <div className="pl mb">

                {/* <h2 className="headingOfSSb">
                     <span></span>
                </h2> */}
                <Heading h1={'Unique pedagogy:'} t1='GTX™' />
            </div>
            {/* </div> */}
            {/* </div> */}
            <div className={styles.top}>
                <div className={styles.left}>

                    <p>
                        Our pedagogy includes GTX™ (GTO Training Xperience); a first-of-its-kind digital GTO ground, created to replicate the outdoor group tasks of a real GTO ground as they exist across Services Selection Boards and Air Force Selection Boards. This approach represents a capability not seen in conventional SSB preparation.
                    </p>
                </div>

                <div className={styles.divider}>
                    <span className={styles.dot}></span>
                </div>

                <div className={styles.right}>
                    <p>
                        GTX allows aspirants to see, understand, and mentally experience the structure of GTO tasks before they step onto the physical ground — how tasks are laid out, how groups move, how time pressure unfolds, and how observation happens in real conditions. It brings the unseen into view.
                    </p>
                </div>
            </div>

            {/* IMAGE SECTION */}
            <div className={styles.imageSection}></div>

            <div className={styles.KnowMoreBtn}>
                <CustomButton text='KNOW MORE' />
            </div>
        </section >
    );
};

export default UniquePedagogy;
