"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, useTheme } from "@mui/material";

const companyInformation = [
    "Metriks ApS",
    "Ryvangs Allé 81, 2.",
    "2900 Hellerup, DK",
    "Company registration no.: DK42805807",
];

const footerLinks = [
    {
        title: "Data Processing Agreement (DPA)",
        href: "/data-processing-agreement",
    },
    {
        title: "Accounting Practices when using Metriks",
        href: "/accounting-practices",
    },
    {
        title: "Terms of Service",
        href: "/terms-of-service",
    },
    {
        title: "Privacy Policy",
        href: "/privacy-policy",
    },
];

const Footer: React.FC = () => {
    const theme = useTheme();

    return (
        <Box
            component="footer"
            className="w-full flex justify-center"
            sx={{
                borderTop: "1px solid #ecf1f7",
            }}
        >
            <div className="py-14 px-14 max-w-screen-xl w-full flex flex-col gap-10">
                <div>
                    <Image
                        src="/logo-small.svg"
                        alt="Logo"
                        width={30}
                        height={30}
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="w-full flex flex-col gap-[0.625rem]">
                        {companyInformation.map((info, index) => (
                            <Typography
                                key={index}
                                variant="body2"
                                sx={{
                                    color: theme.palette.lightGrey,
                                    fontSize: "0.875rem",
                                }}
                            >
                                {info}
                            </Typography>
                        ))}
                    </div>
                    <div className="w-full flex flex-col gap-[0.625rem]">
                        {footerLinks.map((link, index) => (
                            <Link key={index} href={link.href}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: theme.palette.lightGrey,
                                        fontSize: "0.875rem",
                                        "&:hover": {
                                            color: theme.palette.common.black,
                                        },
                                    }}
                                >
                                    {link.title}
                                </Typography>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default Footer;
