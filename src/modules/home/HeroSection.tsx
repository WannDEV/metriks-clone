"use client";
import React, { use } from "react";
import { Typography, Box, useTheme } from "@mui/material";
import LinkButton from "@components/LinkButton";
import HeroAnimation from "@/components/HeroAnimation";
import Section from "@/layouts/Section";

const HeroSection: React.FC = () => {
    const theme = useTheme();

    return (
        <Section
            id="hero"
            customClass="pt-40 px-5 md:px-10 pb-16 md:pb-20 grid gap-5"
            sx={{
                backgroundColor: theme.palette.background.paper,
            }}
        >
            <div className="grid content-center text-center max-w-3xl mx-auto gap-8">
                <div>
                    <Typography
                        variant="h2"
                        className="sm:text-[3rem] lg:text-[3.375rem] xl:text-[3.75rem]"
                    >
                        Revenue Analytics & Revenue Management
                    </Typography>
                </div>

                <div className="grid gap-12">
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        className="xl:text-[1.25rem]"
                    >
                        Metriks er jeres overblik over retention, churn, CLTV,
                        CAC samt andre analytics.
                    </Typography>

                    {/* Responsive button container */}
                    <div className="flex flex-col gap-4 justify-center w-full sm:flex-row">
                        <LinkButton
                            href="/sign-up"
                            variant="outlined"
                            fillOnHover
                            className="grow w-full sm:grow-0 sm:w-auto"
                        >
                            Prøv Metriks
                        </LinkButton>
                        <LinkButton
                            href="#how-it-works"
                            expandOnHover
                            variant="contained"
                            showIcon
                            className="group grow w-full sm:grow-0 sm:w-auto"
                        >
                            Se hvordan det virker
                        </LinkButton>
                    </div>
                </div>
            </div>
            <HeroAnimation />
        </Section>
    );
};

export default HeroSection;
