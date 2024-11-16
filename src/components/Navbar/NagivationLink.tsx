"use client";
import React from "react";
import Link from "next/link";
import { useTheme, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

const NavigationLink: React.FC<{ href: string; text: string }> = ({
    href,
    text,
}) => {
    const theme = useTheme();
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <Link href={href}>
            <Typography
                variant="body1"
                sx={{
                    color: isActive
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    "&:hover": {
                        color: theme.palette.primary.main,
                    },
                    cursor: "pointer",
                }}
            >
                {text}
            </Typography>
        </Link>
    );
};

export default NavigationLink;
