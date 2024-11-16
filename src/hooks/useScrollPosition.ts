import { useState, useEffect } from "react";

const useScrollPosition = () => {
    const [scrollY, setScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState<
        "up" | "down" | null
    >(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        let lastScrollY = window.scrollY || 0;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);

            if (currentScrollY > lastScrollY) {
                setScrollDirection("down");
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection("up");
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return { scrollY, scrollDirection };
};

export default useScrollPosition;
