import React from "react";
import Section from "@/layouts/Section";
import SectionTag from "@/components/SectionTag";
import { Typography } from "@mui/material";
import features from "@/data/features";
import Feature from "@/components/Feature";

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
            <div className="grid gap-8 sm:grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] sm:grid-rows-[repeat(2,_min-content)] xl:grid-cols-[repeat(3,_minmax(13rem,_1fr))]">
                {features.map((feature, index) => (
                    <Feature key={index} {...feature} />
                ))}
            </div>
        </Section>
    );
};

export default FeaturesSection;
