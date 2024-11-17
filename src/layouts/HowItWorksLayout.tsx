"use client";
import React from "react";
import { Typography } from "@mui/material";
import LinkButton from "@/components/buttons/LinkButton";
import Image from "next/image";

type HeaderProps = {
    imgSrc: string;
    header: string;
    imgPlacement?: "left" | "right";
    children?: React.ReactNode;
};

const HowItWorksLayout: React.FC<HeaderProps> = ({
    imgSrc,
    header,
    imgPlacement = "left",
    children,
}) => {
    return (
        <div
            className={`flex flex-col ${
                imgPlacement == "left" ? "md:flex-row-reverse" : "md:flex-row"
            } gap-10 pt-20 w-full`}
        >
            <div className="flex flex-col flex-1">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <Typography variant="h3">{header}</Typography>
                        <Typography variant="body2">{children}</Typography>
                    </div>
                    <LinkButton
                        href="/signup"
                        variant="outlined"
                        fillOnHover
                        expandOnHover
                        showIcon
                    >
                        Prøv Metriks
                    </LinkButton>
                </div>
            </div>
            <div className="relative w-full md:w-[32.5rem] h-[22.5rem]">
                <Image
                    src={imgSrc}
                    alt={header}
                    fill
                    className="block w-full h-full object-center object-contain"
                    sizes="(min-width: 48rem) 32.5rem, 100vw"
                />
            </div>
        </div>
    );
};

export default HowItWorksLayout;
