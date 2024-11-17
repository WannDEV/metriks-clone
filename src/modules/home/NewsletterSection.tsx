"use client";
import React, { useState } from "react";
import Section from "@/layouts/Section";
import { Typography, useTheme, Box, Input, Button } from "@mui/material";
import validator from "validator";

const NewsletterSection: React.FC = () => {
    const theme = useTheme();
    const [email, setEmail] = useState("");

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (validator.isEmail(email)) {
            console.log(
                "Form submitted without API request. Email is: ",
                email
            );
        } else {
            console.log("Invalid email address. Email is: ", email);
        }
    };

    return (
        <Section>
            <Box
                className="w-full py-14 px-5 md:px-14 max-w-screen-xl rounded-2xl flex flex-col md:flex-row"
                sx={{
                    backgroundColor: theme.palette.primary.main,
                }}
            >
                <div className="flex flex-col gap-4 flex-grow w-[60%]">
                    <Typography
                        variant="h3"
                        sx={{
                            color: theme.palette.primary.contrastText,
                        }}
                    >
                        Hold dig opdateret
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: theme.palette.primary.contrastText,
                        }}
                    >
                        Metriks deler løbende viden om værdiskabelse. Tilmeld
                        vores nyhedsbrev og vær sikker på at være opdateret
                    </Typography>
                </div>
                <div className="flex w-full flex-col md:flex-row items-center gap-[0.625rem]">
                    <Input
                        placeholder="name@email.com"
                        disableUnderline
                        className="p-4 w-full md:w-auto"
                        type="email"
                        onChange={handleEmailChange}
                        sx={{
                            backgroundColor: theme.palette.common.white,
                            borderRadius: "8px",
                            "&:hover": {
                                border: "none", // Optional hover effect
                            },
                            fontSize: "1rem",
                            fontWeight: 400,
                            ".MuiInput-input": {
                                padding: 0,
                            },
                        }}
                    />
                    <div className="relative top-0 right-0 bottom-0">
                        <Button
                            type="submit"
                            variant="contained"
                            disableRipple
                            className="p-4"
                            onClick={handleSubmit}
                            sx={{
                                backgroundColor:
                                    theme.palette.primary.contrastText, // White background
                                color: theme.palette.primary.main, // Primary color for text
                                borderRadius: "8px",
                                fontSize: "1rem",
                                fontWeight: 400,
                                "&:hover": {
                                    backgroundColor:
                                        theme.palette.primary.contrastText, // Prevent hover effect
                                    color: theme.palette.primary.main, // Maintain text color
                                    boxShadow: "none",
                                },
                                "&:active": {
                                    backgroundColor:
                                        theme.palette.primary.contrastText, // Prevent active effect
                                    color: "primary.main",
                                },
                                "&:focus": {
                                    backgroundColor:
                                        theme.palette.primary.contrastText, // Prevent focus effect
                                    outline: "none",
                                },
                                boxShadow: "none",
                            }}
                        >
                            Subscribe
                        </Button>
                    </div>
                </div>
            </Box>
        </Section>
    );
};

export default NewsletterSection;
