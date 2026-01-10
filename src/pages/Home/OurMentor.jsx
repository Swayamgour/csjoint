import React from "react";
import styles from "../../style/OurMentor.module.css";
import { mentorsData } from '../../util/data'

const Mentors = () => {

    console.log(mentorsData)


    return (
        <section className={styles.mentorsSection}>
            <div className="" >


                <div className={styles.headingContainer}>
                    <h2 className='headingOfSSb pl'>Our mentors</h2>
                    <div className={styles.headingContainerImg}>
                        <img src="/assets/Group16.png" />

                    </div>
                </div>

                <div className={styles.cardsWrapper}>
                    {mentorsData?.map((mentor) => (
                        <div key={mentor.id} className={styles.mentorCard}>
                            <div className={styles.imageWrapper}>
                                <img src={mentor.image} alt={mentor.role} />
                            </div>

                            <p className={styles.role}>{mentor.role}</p>

                            <h3 className={styles.name}>{mentor.name}</h3>

                            <p className={styles.description}>
                                {mentor.description.map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        <br />
                                    </span>
                                ))}
                            </p>
                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
};

export default Mentors;
