import React from "react";
import Section from "@/layouts/Section";
import SectionTag from "@/components/SectionTag";
import { Typography, Box } from "@mui/material";

const ContactSection: React.FC = () => {
    return (
        <Box>
            <Section>
                <Box className="flex flex-col w-[60%] items-center mx-auto">
                    <Box className="flex flex-col gap-6 items-center">
                        <Box className="flex flex-col gap-4 items-center">
                            <SectionTag contained={false}>Kontakt</SectionTag>
                            <Typography variant="h1" className="text-center">
                                Har du nogle spørgsmål?
                            </Typography>
                        </Box>
                        <Typography variant="body2" className="text-center">
                            Har du et spørgsmål, forslag eller bare vil høre
                            mere om vores platform? Tøv ikke med at række ud.
                        </Typography>
                    </Box>
                </Box>
            </Section>
        </Box>
    );
};

export default ContactSection;
