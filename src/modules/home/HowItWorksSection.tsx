import React from "react";
import Section from "@/layouts/Section";
import SectionTag from "@/components/SectionTag";
import { Typography } from "@mui/material";
import HowItWorksLayout from "@/layouts/HowItWorksLayout";

const HowItWorksSection: React.FC = () => {
    return (
        <Section>
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <div className="flex w-full justify-center">
                            <SectionTag>Hvordan</SectionTag>
                        </div>
                        <Typography variant="h2" className="text-center">
                            Nøgletal direkte fra jeres økonomisystem
                        </Typography>
                    </div>
                    <Typography
                        variant="body2"
                        className="text-center text-base"
                    >
                        Med Metriks er jeres analytics baseret på virksomhedens
                        finansielle data og dermed af højeste datakvalitetet
                    </Typography>
                </div>
                <div>
                    <video
                        src="intro.mp4"
                        loop
                        muted
                        controls
                        className="w-full max-w-3xl mx-auto"
                    />
                </div>
                <HowItWorksLayout
                    imgSrc="/how-it-works-1.svg"
                    header="Beregner de væsentligste nøgletal"
                    imgPlacement="right"
                >
                    Metriks beregner jeres vigtigste nøgletal som retention,
                    churn, CLTV og mange flere og giver samtidig detaljeret
                    overblik på kunde- og produktniveau
                </HowItWorksLayout>
                <HowItWorksLayout
                    imgSrc="/how-it-works-2.svg"
                    header="Forventes af investorer"
                    imgPlacement="left"
                >
                    Revenue Analytics driver jeres værdiansættelse. Se hvad
                    investorer forventer samt gør jeres nuværende investorer
                    glade med det fulde overblik
                </HowItWorksLayout>
                <HowItWorksLayout
                    imgSrc="/how-it-works-3.svg"
                    header="Voks hurtigere"
                    imgPlacement="right"
                >
                    Med Metriks kan du let finde ud af hvad og hvem der driver
                    din forretning og hvor dit fokus bør og ikke bør være
                </HowItWorksLayout>
            </div>
        </Section>
    );
};

export default HowItWorksSection;
