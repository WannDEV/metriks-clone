import React from "react";
import Image from "next/image";
import { Box, useTheme } from "@mui/material";
import hexToRgba from "@/utils/hexToRgba";
import useScrollPosition from "@/hooks/useScrollPosition";

type Position = "left" | "middle" | "right";

interface HeroHighlightImageProps {
    src: string;
    position: Position;
    width?: number;
    shimmerDelay?: number;
    translateSpeed?: number;
}

const HeroHighlightImage: React.FC<HeroHighlightImageProps> = ({
    src,
    position,
    width = 300,
    shimmerDelay = 0,
    translateSpeed = 0,
}) => {
    const positionStyles = {
        left: "md:top-1/2 -left-14 md:left-0 -translate-y-1/2 md:-translate-y-1/2",
        middle: "md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-y-3/4",
        right: "md:top-1/2 -right-14 md:right-0 -translate-y-1/2 md:-translate-y-1/2",
    };

    const theme = useTheme();
    const { scrollY } = useScrollPosition();

    return (
        <Box className={`absolute z-10 transform ${positionStyles[position]}`}>
            <Box
                className="relative"
                sx={{
                    width: width,
                    overflow: "hidden",
                    borderRadius: "3rem",
                    transform: `translateY(${translateSpeed * scrollY}px)`,
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: "0.25rem",
                        left: 0,
                        right: 0,
                        height: "3px",
                        background: `linear-gradient(270deg, ${hexToRgba(
                            theme.palette.primary.light,
                            0
                        )} 0%, ${hexToRgba(
                            theme.palette.primary.light,
                            0.3
                        )} 50%, ${hexToRgba(
                            theme.palette.primary.light,
                            0
                        )} 100%)`,
                        transform: "translateX(-100%)",
                        animation: `shimmer 4s ease-in-out ${shimmerDelay}s infinite`,
                    },
                    "@keyframes shimmer": {
                        "0%": { transform: "translateX(-100%)" },
                        "70%": { transform: "translateX(100%)" }, // Shimmer completes in 2.8s
                        "100%": { transform: "translateX(100%)" }, // Pause for remaining time (1.2s)
                    },
                }}
            >
                <Image
                    src={src}
                    alt="Hero Highlight"
                    width={width}
                    height={0}
                />
            </Box>
        </Box>
    );
};

export default HeroHighlightImage;
