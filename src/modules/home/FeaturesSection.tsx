import React from "react";
import Section from "@/layouts/Section";
import SectionTag from "@/components/SectionTag";
import { Typography } from "@mui/material";
import features from "@/data/features";
import Feature from "@/components/Feature";
import DefaultGrid from "@/layouts/DefaultGrid";

const FeaturesSection: React.FC = () => {
    return (
        <Section id="features">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <div className="flex w-full justify-center">
                        <SectionTag>Features</SectionTag>
                    </div>
                    <Typography variant="h2" className="text-center">
                        Alt hvad du skal bruge for at vækste
                    </Typography>
                </div>
                <Typography variant="body2" className="text-center text-base">
                    Metriks tilbyder en lang række advancerede features som
                    giver overblik, men også tillader dig at dykke ned i tallene
                </Typography>
            </div>
            <DefaultGrid>
                {features.map((feature, index) => (
                    <Feature key={index} {...feature} />
                ))}
            </DefaultGrid>
        </Section>
    );
};

export default FeaturesSection;
