"use client";
import React, { useState } from "react";
import Section from "@/layouts/Section";
import SectionTag from "@/components/SectionTag";
import {
    Typography,
    Switch,
    FormControlLabel,
    useTheme,
    Slider,
} from "@mui/material";

const PricingSection: React.FC = () => {
    const minRevenue = 0;
    const maxRevenue = 1500000;

    const theme = useTheme();
    const [isYearlyChecked, setIsYearlyChecked] = useState(true);
    const [revenue, setRevenue] = useState(750000);
    const [priceEstimate, setPriceEstimate] = useState("DKK 1000/måned");

    const getPrice = (revenue: number, period: boolean): string => {
        if (period) {
            // Yearly pricing
            if (revenue < 100000) {
                return "Gratis"; // Free for revenue under 100,000
            } else if (revenue < 500000) {
                return "DKK 410/måned";
            } else if (revenue < maxRevenue) {
                return "DKK 1000/måned";
            } else {
                return "Kontakt for pris"; // Custom pricing for max revenue
            }
        } else {
            // Monthly pricing
            if (revenue < 100000) {
                return "Gratis"; // Free for revenue under 100,000
            } else if (revenue < 500000) {
                return "DKK 625/måned";
            } else if (revenue < maxRevenue) {
                return "DKK 1500/måned";
            } else {
                return "Kontakt for pris"; // Custom pricing for max revenue
            }
        }
    };

    const handlePeriodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsYearlyChecked(event.target.checked);
        setPriceEstimate(getPrice(revenue, event.target.checked));
    };

    const handleRevenueChange = (event: Event, value: number | number[]) => {
        if (typeof value === "number") {
            setRevenue(value);
            setPriceEstimate(getPrice(value, isYearlyChecked));
        }
    };

    return (
        <Section id="pricing">
            <div className="w-full flex flex-col items-center gap-12">
                <div className="w-full flex flex-col gap-4 items-center">
                    <div className="flex w-full justify-center">
                        <SectionTag>Priser</SectionTag>
                    </div>
                    <Typography variant="h1" className="text-center">
                        Hvad koster
                        <br />
                        Metriks?
                    </Typography>
                    <Typography variant="body2" className="text-center w-[70%]">
                        14 dages gratis prøve - Inden udløb af prøveperioden
                        beder vi om tilmelding til betalingsservice. Se priserne
                        nedenfor
                    </Typography>
                </div>
                <div className="flex flex-col w-full items-center gap-6">
                    <FormControlLabel
                        control={
                            <Switch
                                checked={isYearlyChecked}
                                onChange={handlePeriodChange}
                                disableRipple
                            />
                        }
                        label={
                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: "0.8rem",
                                }}
                            >
                                Årlig
                            </Typography>
                        }
                    />
                    <Typography
                        variant="h6"
                        sx={{
                            color: theme.palette.text.secondary,
                        }}
                    >
                        Hvad er din nuværende månedsomsætning?
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: theme.palette.primary.main,
                        }}
                    >
                        DKK {new Intl.NumberFormat("en-US").format(revenue)}
                        {revenue == maxRevenue ? "+" : ""}
                    </Typography>
                    <Slider
                        aria-label="Revenue estimate"
                        value={revenue}
                        onChange={handleRevenueChange}
                        min={minRevenue}
                        max={maxRevenue}
                        step={1000}
                        sx={{
                            maxWidth: "25rem",
                        }}
                    />
                    <Typography
                        variant="h5"
                        sx={{
                            color: theme.palette.primary.main,
                        }}
                    >
                        {priceEstimate}
                    </Typography>
                    <Typography variant="body2" className="text-center w-[70%]">
                        Alle priser er ekslusiv moms. Årsaftale faktureres på
                        årlig basis
                    </Typography>
                </div>
            </div>
        </Section>
    );
};

export default PricingSection;
