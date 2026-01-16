import { useEffect, useRef } from "react";
import "../style/heading.css";

/* 🔹 Helper: split text into chars */
const splitText = (text) =>
    text.split("").map((char, i) => (
        <span key={i} className="char">
            {char === " " ? "\u00A0" : char}
        </span>
    ));

export default function Heading({ h1, t1 }) {
    const headingRef = useRef(null);

    useEffect(() => {
        const el = headingRef.current;
        if (!el) return;

        /* 🔹 Intersection Observer */
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // RESET animation
                    el.classList.remove("sweep-done");
                    void el.offsetWidth; // 🔥 force reflow
                    el.classList.add("play-sweep");
                }
            },
            { threshold: 0.6 } // 60% visible
        );

        observer.observe(el);

        /* 🔹 Animation end handler */
        const onAnimationEnd = (e) => {
            if (e.target.classList.contains("highlight")) {
                el.classList.add("sweep-done");
                el.classList.remove("play-sweep");
            }
        };

        el.addEventListener("animationend", onAnimationEnd);

        return () => {
            observer.disconnect();
            el.removeEventListener("animationend", onAnimationEnd);
        };
    }, []);

    return (
        <h1 ref={headingRef} className="headingOfSSb">
            <span className="word highlight first">
                {splitText(h1)}
            </span>

            {t1 && (
                <span className="word highlight second">
                    {splitText(t1)}
                </span>
            )}
        </h1>
    );
}
