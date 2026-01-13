// Heading.jsx
import React, { useEffect, useRef } from "react";
import "../style/heading.css";

function Heading({ h1, t1 }) {
    const headingRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    headingRef.current.classList.add("play-sweep");
                } else {
                    // 👇 viewport se bahar gaya → reset
                    headingRef.current.classList.remove("play-sweep");
                }
            },
            { threshold: 0.5 }
        );

        if (headingRef.current) observer.observe(headingRef.current);

        return () => observer.disconnect();
    }, []);

    const splitText = (text) =>
        text.split("").map((char, i) => (
            <span key={i} className="char">
                {char === " " ? "\u00A0" : char}
            </span>
        ));

    return (
        <h1 ref={headingRef} className="headingOfSSb">
            <span className="word highlight">{splitText(h1)}</span>

            {t1 && <span className="word highlight">{splitText(t1)}</span>}
        </h1>
    );
}

export default Heading;
