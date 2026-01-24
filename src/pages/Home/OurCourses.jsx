import { useState, useRef, useEffect } from 'react';
import styles from '../../style/OurCourses.module.css';
import CustomButton from '../../components/CustomButton';
import { coursesData } from '../../util/data';
import Heading from '../../components/Heading';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
    const [activeCard, setActiveCard] = useState(0); // First card active by default
    const courseListRef = useRef(null);
    const cardRefs = useRef([]);

    // Set up refs for each card
    useEffect(() => {
        cardRefs.current = cardRefs.current.slice(0, coursesData.length);
    }, [coursesData]);

    // Handle scroll to detect active card
    const handleScroll = () => {
        if (!courseListRef.current) return;

        const scrollTop = courseListRef.current.scrollTop;
        const containerHeight = courseListRef.current.clientHeight;
        const scrollPosition = scrollTop + (containerHeight / 2); // Middle of viewport

        // Find which card is in the middle
        for (let i = 0; i < cardRefs.current.length; i++) {
            const card = cardRefs.current[i];
            if (!card) continue;

            const cardTop = card.offsetTop;
            const cardHeight = card.clientHeight;
            const cardBottom = cardTop + cardHeight;

            if (scrollPosition >= cardTop && scrollPosition <= cardBottom) {
                setActiveCard(i);
                break;
            }
        }
    };

    // Click on card to make it active
    const handleCardClick = (index) => {
        setActiveCard(index);
        // Scroll to center the clicked card
        if (cardRefs.current[index]) {
            cardRefs.current[index].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    };

    const navigate = useNavigate()

    // Click on indicator dot
    const handleIndicatorClick = (index) => {
        handleCardClick(index);
    };

    return (
        <section className={styles.coursesSection}>
            {/* Header */}

            <div className={styles.header}>
                {/* <h2 className='headingOfSSb'>
                    Our courses
                </h2> */}
                <Heading h1='Our Courses' />
                <CustomButton text='Know More' onClick={() => navigate('/Courses')} />
            </div>

            {/* Content */}
            <div className={styles.content}>
                {/* LEFT LIST */}
                <div
                    className={styles.courseList}
                    ref={courseListRef}
                    onScroll={handleScroll}
                >
                    {coursesData?.map((course, index) => (
                        <div
                            key={course.id}
                            ref={el => cardRefs.current[index] = el}
                            className={`${styles.courseCardHud} ${activeCard === index ? styles.active : styles.inactive
                                }`}
                            onClick={() => handleCardClick(index)}
                        >
                            {/* <div className={styles.sectionGlow}></div> */}
                            <div className={styles.courseCardHudCon}>
                                {/* Corner Brackets */}
                                <div className={`${styles.corner} ${styles.tl}`}></div>
                                <div className={`${styles.corner} ${styles.tr}`}></div>
                                <div className={`${styles.corner} ${styles.bl}`}></div>
                                <div className={`${styles.corner} ${styles.br}`}></div>

                                {/* Card Content */}
                                <div style={{ padding: '20px' }} className={styles.courseCardHudConCen}>

                                    <h1 className={styles.number}>{course.number}</h1>
                                    <h3>{course.title}</h3>
                                    <p>Total Sessions - {course.sessions}</p>
                                    <p>Total Learning Hours - {course.hours}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CARD INDICATOR DOTS */}
                <div className={styles.cardIndicator}>
                    {coursesData.map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.indicatorDot} ${activeCard === index ? styles.active : ''
                                }`}
                            onClick={() => handleIndicatorClick(index)}
                            title={`Course ${index + 1}`}
                        />
                    ))}
                </div>

                {/* RIGHT IMAGE PANEL */}
                {/* <div className={styles.preview}> */}

                <div
                    className={styles.preview}
                    style={{
                        backgroundImage: `url(${coursesData[activeCard]?.image || '/assets/img/courses/default.webp'})`
                    }}
                >


                    <div className={styles.previewOverlay}>

                        <h1 className={styles.courseTitle}>
                            <span className={styles.white}>{coursesData[activeCard]?.description}</span>

                        </h1>

                    </div>
                </div>
            </div>
            {/* <div className={styles.sectionGlowTwo}></div> */}

        </section>
    );
};

export default Courses;