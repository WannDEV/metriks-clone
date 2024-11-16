"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import HeroHighlightImage from "./HeroHighlightImage";

const HeroAnimation: React.FC = () => {
    return (
        <Box className="w-full relative pt-36 pb-16 md:p-8 overflow-visible flex">
            <Image
                src="/hero-background.svg"
                alt="Hero SVG"
                width={0}
                height={0}
                sizes="100vw"
                className="hidden md:block w-full h-auto opacity-20"
                priority // Ensures the image loads immediately
            />
            <HeroHighlightImage
                src="/hero-highlight-1.svg"
                position="left"
                shimmerDelay={3}
                translateSpeed={-0.1}
            />
            <HeroHighlightImage
                src="/hero-highlight-2.svg"
                position="middle"
                width={380}
                shimmerDelay={1}
                translateSpeed={0.2}
            />
            <HeroHighlightImage
                src="/hero-highlight-3.svg"
                position="right"
                shimmerDelay={3}
                translateSpeed={0.1}
            />
        </Box>
    );
};

export default HeroAnimation;
