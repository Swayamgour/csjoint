import { useEffect, useRef, useState } from "react";
import "../style/heading.css";

export default function HeadingTwo({ h1, t1 }) {
    const headingRef = useRef(null);
    const [status, setStatus] = useState("play-sweep");

    useEffect(() => {
        const el = headingRef.current;
        if (!el) return;

        let timeoutId;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // 🔁 RESET first (important)
                    setStatus("play-sweep");

                    // next frame so browser registers change
                    requestAnimationFrame(() => {
                        el.classList.add("active");

                        timeoutId = setTimeout(() => {
                            setStatus("sweep-done");
                            el.classList.remove("active");
                        }, 1600);
                    });
                } else {
                    // 👇 viewport se bahar gaya → reset
                    el.classList.remove("active");
                    setStatus("play-sweep");
                    clearTimeout(timeoutId);
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(el);

        return () => {
            observer.disconnect();
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <h1 ref={headingRef} className={`headingOfSSb ${status}`}>
            <span className="word highlight  second-part">{h1}</span>
            {" "}
            {t1 && (
                <span className="word highlight first-part">{t1}</span>
            )}
        </h1>
    );
}
