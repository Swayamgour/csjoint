// // DaySchedule.jsx
// import { useState, useEffect } from 'react';
import styles from '../style/Methodology.module.css';

// const DaySchedule = () => {
//   const [activeDay, setActiveDay] = useState(1);
//   const [animated, setAnimated] = useState(false);

//   const days = [
//     { id: 1, title: "DAY 1", subtitle: "STAGE 1 TESTING", activities: ["GIB & PPGT"] },
//     { id: 2, title: "DAY 2", subtitle: "PSYCH TESTS", activities: ["TAT, WAT, SRT, SDT", "Personal Interview"] },
//     { id: 3, title: "DAY 3", subtitle: "GTO 1", activities: ["GD, GOR, PGT, HGT, IOT", "Personal Interview"] },
//     { id: 4, title: "DAY 4", subtitle: "GTO 2", activities: ["GPE, CT, FAT", "Personal Interview"] },
//     { id: 5, title: "DAY 5", subtitle: "BOARD CONFERENCE", activities: ["Final Assessment & Review"] },
//   ];

//   useEffect(() => {
//     // Trigger animation on mount
//     setAnimated(true);

//     // Auto-rotate days (optional)
//     const interval = setInterval(() => {
//       setActiveDay(prev => (prev % 5) + 1);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className={styles.section}>
//       <div className={styles.container}>
//         {/* Title */}
//         <h2 className={styles.title}>
//           Day wise assessment schedule
//         </h2>

//         {/* Timeline */}
//         <div className={styles.timeline}>
//           {/* Progress Line */}
//           <div className={styles.progressLine}>
//             <div 
//               className={styles.progressFill} 
//               style={{ width: `${(activeDay - 1) * 25}%` }}
//             ></div>
//           </div>

//           {/* Days */}
//           {days.map((day) => (
//             <div 
//               key={day.id} 
//               className={`${styles.dayWrapper} ${day.id === activeDay ? styles.active : ''}`}
//               onClick={() => setActiveDay(day.id)}
//             >
//               {/* Day Marker */}
//               <div className={styles.dayMarker}>
//                 <div className={styles.outerCircle}>
//                   <div className={`${styles.innerCircle} ${day.id === activeDay ? styles.animated : ''}`}>
//                     <span className={styles.dayNumber}>{day.id}</span>
//                   </div>
//                 </div>

//                 {/* Connecting Line (except for last item) */}
//                 {day.id < days.length && (
//                   <div className={styles.connectorLine}></div>
//                 )}
//               </div>

//               {/* Day Content */}
//               <div className={`${styles.dayContent} ${animated ? styles.fadeIn : ''}`}>
//                 <div className={styles.dayHeader}>
//                   <h3 className={styles.dayTitle}>{day.title}</h3>
//                   <span className={styles.daySubtitle}>{day.subtitle}</span>
//                 </div>

//                 <div className={styles.activities}>
//                   {day.activities.map((activity, index) => (
//                     <div key={index} className={styles.activity}>
//                       <span className={styles.activityDot}></span>
//                       <span className={styles.activityText}>{activity}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Dots */}
//         <div className={styles.navigationDots}>
//           {days.map((day) => (
//             <button
//               key={day.id}
//               className={`${styles.navDot} ${day.id === activeDay ? styles.active : ''}`}
//               onClick={() => setActiveDay(day.id)}
//               aria-label={`Go to Day ${day.id}`}
//             >
//               <span className={styles.pulseRing}></span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DaySchedule;


// import styles from "./DaySchedule.module.css";

const DaySchedule = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Day wise assessment schedule</h2>

            <div className={styles.timeline}>
                {/* ROW 1 */}
                <div className={styles.row}>
                    <div className={styles.box}>
                        DAY 1 – STAGE 1 TESTING (OIR & PPDT)
                    </div>

                    <div className={styles.connector}>
                        <span className={styles.dot}></span>
                    </div>

                    <div className={styles.box}>
                        DAY 2 – PSYCH TESTS (TAT, WAT, SRT, SDT)
                    </div>

                    <div className={styles.connector}>
                        <span className={styles.dot}></span>
                    </div>

                    <div className={styles.label}>Personal Interview</div>
                </div>

                {/* ROW 2 */}
                <div className={styles.row}>
                    <div className={styles.box}>
                        DAY 4 – GTO 2 DAY (IO, CT, FGT)
                    </div>

                    <div className={styles.connector}>
                        <span className={styles.dot}></span>
                    </div>

                    <div className={styles.label}>Personal Interview</div>

                    <div className={styles.connector}>
                        <span className={styles.dot}></span>
                    </div>

                    <div className={styles.box}>
                        DAY 3 – GTO 1 DAY (GD, GPE, PGT, GOR, HGT, LECTURETTE)
                    </div>
                </div>

                {/* ROW 3 */}
                <div className={styles.row}>
                    <div className={styles.label}>Personal Interview</div>

                    <div className={styles.connector}>
                        <span className={styles.dot}></span>
                    </div>

                    <div className={styles.box}>
                        DAY 5 – BOARD CONFERENCE
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DaySchedule;
