import { useState, useEffect } from "react";
import "../../style/PhilosophySection.css";
import Heading from "../../components/Heading";

const PhilosophySection = () => {
    const [isActive, setIsActive] = useState(false);
    const [activeCircle, setActiveCircle] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const circles = [
        {
            id: "manasa",
            title: "Manasa (Thoughts)",
            desc: "Exhibiting clarity of thought, sound judgment, and a strong sense of purpose.",
            color: "#e0c214"
        },
        {
            id: "vacha",
            title: "Vacha (Speech)",
            desc: "Exhibiting clarity of communication, truthful expression, and effective articulation.",
            color: "#d4b416"
        },
        {
            id: "karmana",
            title: "Karmana (Action)",
            desc: "Exhibiting decisive action, leadership, and consistent ethical behavior.",
            color: "#c9a818"
        },
    ];

    const handleActivate = () => {
        if (isAnimating) return;
        setIsAnimating(true);

        requestAnimationFrame(() => {
            setTimeout(() => {
                setIsActive(true);
                setIsAnimating(false);
            }, 400);
        });
    };


    const handleDeactivate = () => {
        setIsAnimating(true);
        setActiveCircle(null);
        setTimeout(() => {
            setIsActive(false);
            setIsAnimating(false);
        }, 300);
    };

    return (
        <section className="philosophy-root">

            {/* TOP TEXT */}
            <div className="top-text">
                <div className="d-flex justify-content-center headingOfMargin">

                    <Heading h1={'Mentoring'} t1='philosophy' />
                </div>
                <p className="ConceptofManasa">Concept of Manasa - Vacha – Karmana</p>
                {/* <h2>
                    When the Manasa-Vacha-Karmana synchronizes, the human being becomes
                    <span> Limitless & Fearless</span>
                </h2> */}

                <p className="recruitmentManasa">
                    When the Manasa-Vacha-Karmana synchronizes, the human being becomes Limitless & Fearless
                </p>
                <p className="recruitmentManasa">
                    The recruitment of officers in the Indian Armed Forces through the
                    Services Selection Board (SSB) evaluates thought, speech, and action
                    together. The principle of Manasa-Vacha-Karmana—the alignment of
                    thought, speech, and action—is central to this evaluation.
                </p>
            </div>

            {/* MAIN AREA */}
            <div className="main-area">

                {/* LEFT – CIRCLES */}
                <div className="circle-area">

                    {/* SINGLE CIRCLE with smooth exit */}
                    {!isActive && (
                        // <div
                        //     className={`single-circle ${isAnimating ? 'exiting' : ''}`}
                        //     onMouseEnter={handleActivate}
                        // >
                        //     Limitless & Fearless
                        // </div>

                        <div
                            className={`glow-wrapper ${isAnimating ? 'exiting' : ''}`}
                            onMouseEnter={handleActivate}
                        >
                            <div className="glow-circle">
                                <span>Limitless &amp; Fearless</span>
                            </div>
                        </div>

                    )}

                    {/* VENN DIAGRAM with smooth entrance */}
                    {isActive && (
                        <div className="venn-container">
                            <div
                                className="venn"
                                onMouseLeave={handleDeactivate}
                            >
                                {circles.map((c) => (
                                    <div
                                        key={c.id}
                                        className={`venn-circle ${c.id}
                                      ${activeCircle === c.id ? "focus" : ""}
                                      ${activeCircle && activeCircle !== c.id ? "dim" : ""}
                                    `}
                                        onMouseEnter={() => setActiveCircle(c.id)}
                                    >
                                        <span>{c.id.charAt(0).toUpperCase() + c.id.slice(1)}</span>
                                    </div>
                                ))}

                                {/* Intersection areas */}
                                <div className="intersection intersection-1"></div>
                                <div className="intersection intersection-2"></div>
                                <div className="intersection intersection-3"></div>
                            </div>
                        </div>
                    )}
                </div>

                {/* RIGHT – STATIC CONTENT with smooth entrance */}
                {isActive && (
                    <div className="text-area">
                        {circles.map((c) => (
                            <div
                                key={c.id}
                                className={`text-block ${activeCircle === c.id ? "active" : ""
                                    }`}
                                onMouseEnter={() => setActiveCircle(c.id)}
                            >
                                <h3>{c.title}</h3>
                                <p>{c.desc}</p>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
};

export default PhilosophySection;