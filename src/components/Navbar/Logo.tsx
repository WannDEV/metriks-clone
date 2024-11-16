import React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import Image from "next/image";

const Logo: React.FC = () => {
    return (
        <Link href="/" passHref>
            <Box className="flex items-center space-x-4">
                <Image
                    src="/logo.svg"
                    alt="Metriks Logo"
                    width={150}
                    height={0} // 0 will auto-scale the height
                    className="max-w-[100px] md:max-w-[150px]"
                />
            </Box>
        </Link>
    );
};

export default Logo;
