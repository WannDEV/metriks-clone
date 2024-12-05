"use client";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { palette } from "./palette";
import { createTypography } from "./typography";

const themeOptions: ThemeOptions = {
    palette: {
        ...palette,
        mode: "light",
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: "contained" },
                    style: {
                        borderRadius: "0.375rem", // Tailwind's rounded-md
                        textTransform: "none", // Keep button text as-is
                        padding: "0.5rem 1rem", // Tailwind's p-2 px-4
                    },
                },
            ],
        },
    },
    shape: {
        borderRadius: 8,
    },
    transitions: {
        duration: {
            standard: 800,
        },
    },
};

themeOptions.typography = createTypography(themeOptions);

const theme = createTheme(themeOptions);

export default theme;
