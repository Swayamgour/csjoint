import { useState } from "react";
// import "./PhilosophySection.css";

const PhilosophySection = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [activeCircle, setActiveCircle] = useState(null);

    const circles = [
        {
            id: "manasa",
            title: "Manasa",
            content:
                "Exhibiting clarity of thought, sound judgment, and a strong sense of purpose.",
        },
        {
            id: "vacha",
            title: "Vacha",
            content:
                "Exhibiting clarity of communication, truthful expression, and effective articulation.",
        },
        {
            id: "karmana",
            title: "Karmana",
            content:
                "Exhibiting decisive action, leadership, and consistent ethical behavior.",
        },
    ];

    const isSplit = isHovered || activeCircle;

    return (
        <section className={`philosophy-section ${isSplit ? "split" : "centered"}`}>
           
            {/* LEFT */}
            <div
                className="circles-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    if (!activeCircle) setIsHovered(false);
                }}
            >
                {/* INITIAL CIRCLE */}
                <div className={`initial-circle ${isSplit ? "hidden" : "visible"}`}>
                    <div className="circle-glow"></div>
                    <p>Limitless & Fearless</p>
                </div>

                {/* THREE CIRCLES */}
                <div className={`three-circles ${isSplit ? "visible" : "hidden"}`}>
                    {circles.map((circle) => (
                        <div
                            key={circle.id}
                            className={`circle ${circle.id}
                ${activeCircle === circle.id ? "active" : ""}
                ${activeCircle && activeCircle !== circle.id ? "dim" : ""}
              `}
                            onClick={() => setActiveCircle(circle.id)}
                        >
                            <span>{circle.title}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT CONTENT */}
            {/* {isHovered && */}
                {/* <div className="content-panel">
                    {!activeCircle ? (
                        <div className="default-content">
                            <h3>Limitless & Fearless</h3>
                            <p>
                                When Manasa, Vacha and Karmana align, a human being becomes
                                limitless and fearless.
                            </p>
                        </div>
                    ) : (
                        <div className="circle-content">
                            <h2>
                                {circles.find((c) => c.id === activeCircle)?.title}
                            </h2>
                            <p>
                                {circles.find((c) => c.id === activeCircle)?.content}
                            </p>
                        </div>
                    )}
                </div> */}
        </section>
    );
};

export default PhilosophySection;
