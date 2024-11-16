"use client";
import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import Image from "next/image";

type Features = {
    icon: string;
    title: string;
    description: string;
};

const FeaturesSection: React.FC<Features> = ({ icon, title, description }) => {
    const theme = useTheme();

    return (
        <div className="px-5 py-10 flex flex-col w-full items-center gap-4 text-center">
            <Box
                className="w-16 h-16 flex items-center justify-center rounded-full"
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    padding: "10px",
                }}
            >
                <Image src={icon} alt={title} width={40} height={40} />
            </Box>
            <Typography
                variant="body1"
                sx={{
                    fontWeight: 700,
                }}
            >
                {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
        </div>
    );
};

export default FeaturesSection;
