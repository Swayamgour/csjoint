// hooks/useCountUpOnView.js
import { useEffect, useRef, useState } from "react";

export default function useCountUpOnView(target, duration = 2000) {
    const ref = useRef(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        let observer;
        let animationFrame;

        const animate = (startTime) => {
            const step = (currentTime) => {
                const progress = Math.min(
                    (currentTime - startTime) / duration,
                    1
                );

                const eased = 1 - Math.pow(1 - progress, 3);
                setCount(Math.floor(eased * target));

                if (progress < 1) {
                    animationFrame = requestAnimationFrame(step);
                }
            };

            animationFrame = requestAnimationFrame(step);
        };

        observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCount(0); // 🔁 reset every time
                    animate(performance.now());
                }
            },
            {
                threshold: 0.5, // 50% visible
            }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (observer && ref.current) observer.unobserve(ref.current);
            cancelAnimationFrame(animationFrame);
        };
    }, [target, duration]);

    return { ref, count };
}
