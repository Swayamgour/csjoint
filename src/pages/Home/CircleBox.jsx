import React from 'react'
import styles from '../../style/Navbar.module.css'
import CircularCard from "../../components/CircularCard";
import CustomButton from "../../components/CustomButton";
import Glow from '../../components/Glow';
import Heading from '../../components/Heading';
import { useNavigate } from 'react-router-dom';
import HeadingTwo from '../../components/HeadingTwo';

function CircleBox() {

    const array = [
        { number: "180", title: "Candidates Recommended", timeDel: '2' },
        { number: "90", title: "Years of Domain Expertise", timeDel: '4' },
        { number: "4", title: "Years of Proven Track Record", timeDel: '6' },
    ];


    const navigate = useNavigate()


    const handelLogin = () => {
        navigate('/ContactUS')
    }


    return (
        <section className={styles.circleSection}>
            {/* <Glow  */}
            {/* <Glow
                size="clamp(180px, 30vw, 320px)"
                top="clamp(150px, 40vh, 300px)"
                left="clamp(55%, 60vw, calc(50% + 320px))"
            /> */}

            {/* <div className={styles.sectionGlow}></div> */}
            <div className={styles.circleSectionCenterCon}>
                {/* <div className={styles.circleSectionContainer}>
                    {array.map((e, index) => (
                        <CircularCard
                            key={index}
                            number={e.number}
                            title={e.title}
                            timeDel={e.timeDel}
                        />


                    ))}
                </div> */}

                <div className={styles.circleSectionContainer}>
                    {array.map((e, index) => (
                        <CircularCard
                            key={index}
                            index={index}        // 👈 index pass
                            number={e.number}
                            title={e.title}
                            timeDel={e.timeDel}
                        />
                    ))}
                </div>


                <div>
                    {/* <h1 className={styles.headingOfSSb}>
                        <span>What is</span>
                        <span style={{ color: "#3b3930" }}>
                            SSB with ISV?
                        </span>
                    </h1> */}
                    <div className='headingOfMargin'>
                        <HeadingTwo h1='What is' t1='SSB with ISV?' />

                    </div>

                    <p className={styles.titleOfSecondSection}>
                        India’s first online SSB mentoring platform with a proprietary virtual  training experience (VTX™). Led by <br/>  veterans of the Indian Armed Forces, SSB with ISV is a venture that comes with a promise to guide and <br/>  prepare aspiring officers for success in the Services Selection Board.
                    </p>

                    <p className={styles.titleOfThirdSection}>
                        <span className={styles.text}>
                            Handholding till recommendation
                        </span>
                        <span className={styles.divider}>/</span>
                        <span className={styles.text}>
                            Over 50% candidates recommended
                        </span>
                        <span className={styles.divider}>/</span>
                        <span className={styles.text}>
                            Virtual GTO Training Experience
                        </span>
                    </p>
                    <div style={{ marginTop: '30px' }}>

                        <CustomButton text="Sign Up Now" onClick={handelLogin} />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CircleBox