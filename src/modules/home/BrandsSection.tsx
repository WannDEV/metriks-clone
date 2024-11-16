"use client";
import React from "react";
import { useTheme, Typography } from "@mui/material";
import Section from "@/layouts/Section";
import Marquee from "@/components/Marquee";

const texts = [
    "B2B-virksomheder",
    "Digitale marketingsvirksomheder",
    "E-learning",
    "Event-branchen",
    "Konsulenthuse",
    "Salg af digitale ydelser",
    "Software-virksomheder",
    "Workforce Management",
    "Booking platforme",
];

const BrandsSection: React.FC = () => {
    const theme = useTheme();

    return (
        <Section id="brands" className="pb-0 flex flex-col gap-3">
            <Typography variant="body2" className="text-center pt-16 px-10">
                Anvendes allerede i følgende brancher
            </Typography>
            <Marquee speed={100} direction="left">
                {texts.map((text, index) => (
                    <Typography
                        key={index}
                        variant="h6"
                        sx={{
                            color: theme.palette.lightText,
                            fontSize: "1.5rem",
                            fontWeight: 500,
                            marginRight: "5rem",
                        }}
                    >
                        {text}
                    </Typography>
                ))}
            </Marquee>
        </Section>
    );
};

export default BrandsSection;
