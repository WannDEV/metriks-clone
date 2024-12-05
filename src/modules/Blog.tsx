"use client";
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import dateToDayString from "@/utils/dateToDayString";

type BlogProps = {
    id: number;
    title: string;
    img: string;
    type: string;
    date: Date;
    showDate?: boolean;
    typeInFocus?: boolean;
    href: string;
};

const Blog: React.FC<BlogProps> = ({
    title,
    img,
    type,
    date,
    showDate = false,
    typeInFocus = false,
    href,
}) => {
    const theme = useTheme();

    return (
        <Link href={href} className="cursor-pointer flex flex-col gap-6">
            <figure className="relative w-full aspect-[4/3] overflow-hidden ">
                <div className="absolute inset-0">
                    <Image
                        src={img}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105 rounded-xl"
                        priority={false}
                        loading="lazy"
                    />
                </div>
            </figure>
            <div className="flex flex-col gap-6">
                <div className="flex justify-between">
                    <Box
                        component="span"
                        className="flex items-center rounded-2xl py-2 px-4"
                        sx={{
                            backgroundColor: typeInFocus
                                ? theme.palette.primary.main
                                : "#eaf2ff",
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                color: typeInFocus
                                    ? theme.palette.primary.contrastText
                                    : theme.palette.primary.main,
                                fontSize: "0.75rem",
                                fontWeight: 700,
                            }}
                        >
                            {type.toUpperCase()}
                        </Typography>
                    </Box>
                    {showDate && (
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: "0.75rem",
                            }}
                        >
                            {dateToDayString(date)}
                        </Typography>
                    )}
                </div>
                <Typography variant="h6">{title}</Typography>
            </div>
        </Link>
    );
};

export default Blog;
