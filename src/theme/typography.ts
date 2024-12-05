import { ThemeOptions } from "@mui/material/styles";
import { Be_Vietnam_Pro, Poppins } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export const createTypography = (
    theme: ThemeOptions
): ThemeOptions["typography"] => ({
    fontFamily: beVietnamPro.style.fontFamily,
    fontSize: 16,
    h1: {
        fontSize: "3.6rem",
        fontFamily: poppins.style.fontFamily,
        fontWeight: 500,
        letterSpacing: "-0.05em",
    },
    h2: {
        fontSize: "2.5rem", // Default font size
        fontWeight: 500,
        fontFamily: poppins.style.fontFamily,
        letterSpacing: "-1.6px",
        lineHeight: 1.05,
        "@media (min-width: 640px)": {
            // sm breakpoint
            fontSize: "3rem",
            lineHeight: 1.1,
        },
        "@media (min-width: 1024px)": {
            // lg breakpoint
            fontSize: "3.375rem",
        },
        "@media (min-width: 1280px)": {
            // xl breakpoint
            fontSize: "3.75rem",
        },
    },
    h3: {
        fontSize: "2.25rem",
        fontWeight: 500,
        fontFamily: poppins.style.fontFamily,
        "@media (min-width: 640px)": {
            // sm breakpoint
            fontSize: "2.8rem",
        },
    },
    h5: {
        fontWeight: 500,
        fontFamily: poppins.style.fontFamily,
        fontSize: "1.9rem",
    },
    h6: {
        lineHeight: 1.2,
    },
    body1: {
        fontSize: "1.125rem",
        fontWeight: 500,
        lineHeight: 1.2,
    },
    body2: {
        fontSize: "1.125rem",
        color: theme.palette?.text?.secondary || "#000",
    },
    button: {
        fontSize: "0.875rem",
        textTransform: "none",
    },
});
