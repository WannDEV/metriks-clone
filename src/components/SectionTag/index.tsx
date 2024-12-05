"use client";
import React, { ReactNode } from "react";
import { Typography, useTheme } from "@mui/material";

type HeaderProps = {
    contained?: boolean;
    children?: ReactNode;
};

const SectionTag: React.FC<HeaderProps> = ({ contained = true, children }) => {
    const theme = useTheme();

    return (
        <Typography
            variant="body1"
            sx={{
                color: theme.palette.primary.main,
                fontWeight: "bold",
                fontSize: "0.75rem",
                display: "inline-block",
                backgroundColor: contained ? "#f3f7fd" : "none",
                borderRadius: theme.shape.borderRadius,
                padding: "0.5rem 0.875rem",
            }}
        >
            {children}
        </Typography>
    );
};

export default SectionTag;
