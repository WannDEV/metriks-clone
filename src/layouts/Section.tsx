import React from "react";
import { Box, BoxProps } from "@mui/material";

interface SectionProps extends BoxProps {
    customClass?: string;
}
const Section: React.FC<SectionProps> = ({
    customClass = "",
    children,
    ...props
}) => {
    return (
        <Box className="w-full flex justify-center" sx={{ ...props.sx }}>
            <Box
                component="section"
                className={`py-14 px-5 md:px-14 max-w-screen-xl w-full ${customClass}`}
                {...props}
            >
                {children}
            </Box>
        </Box>
    );
};

export default Section;
