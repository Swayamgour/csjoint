import { useEffect, useRef } from "react";
import '../style/heading.css'

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

        const onAnimationEnd = (e) => {
            if (e.target.classList.contains("highlight")) {
                el.classList.add("sweep-done");
            }
        };

        el.addEventListener("animationend", onAnimationEnd);
        return () => el.removeEventListener("animationend", onAnimationEnd);
    }, []);

    return (
        <h1 ref={headingRef} className="headingOfSSb play-sweep">
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
