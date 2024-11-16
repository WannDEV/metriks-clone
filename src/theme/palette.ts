import { PaletteOptions } from "@mui/material/styles";
import { red, green } from "@mui/material/colors";

declare module "@mui/material/styles" {
    interface Palette {
        lightText: string;
    }
    interface PaletteOptions {
        lightText?: string;
    }
}

export const palette: PaletteOptions = {
    primary: {
        main: "#1787A7",
        light: "#1388a7",
        dark: "#1b6877",
        contrastText: "#fff", // White text on primary buttons
    },
    secondary: {
        main: green[500], // Tailwind's green-500
        light: green[300], // Tailwind's green-300
        dark: green[700], // Tailwind's green-700
        contrastText: "#fff",
    },
    error: {
        main: red[500], // Tailwind's red-500
    },
    background: {
        default: "#ffffff", // Light grey background
        paper: "#f3f7fd", // White paper background
    },
    text: {
        primary: "#072933", // Darker text color
        secondary: "#68708C", // Lighter text color
    },
    lightText: "#B9BED1",
};
