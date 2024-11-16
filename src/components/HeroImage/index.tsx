"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import HeroHighlightImage from "./HeroHighlightImage";

const HeroImage: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Calculate transformation properties based on scroll position
    const translateY = Math.min(scrollY * 0.5, 100); // Max translateY of 100px
    const scale = 1 + Math.min(scrollY * 0.001, 0.5); // Max scale of 1.5

    return (
        <Box
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
            sx={{
                transform: `translateY(-${translateY}px) scale(${scale})`,
                transition: "transform 0.2s ease-out",
            }}
        >
            <Image
                src="/hero-background.svg"
                alt="Hero SVG"
                width={800} // Set your desired width
                height={600} // Set your desired height
                priority // Ensures the image loads immediately
            />
            <HeroHighlightImage />
        </Box>
    );
};

export default HeroImage;
