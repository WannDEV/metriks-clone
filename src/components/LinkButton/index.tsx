import React, { ReactNode } from "react";
import { Button, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import NorthEastIcon from "@mui/icons-material/NorthEast";

interface LinkButtonProps {
    href: string;
    expandOnHover?: boolean;
    fillOnHover?: boolean;
    icon?: ReactNode;
    showIcon?: boolean;
    fullWidth?: boolean;
    className?: string;
    children: ReactNode;
    variant?: "text" | "outlined" | "contained";
}

const StyledButton = styled(Button, {
    shouldForwardProp: (prop) =>
        prop !== "expandOnHover" &&
        prop !== "fillOnHover" &&
        prop !== "fullWidth",
})<{
    expandOnHover?: boolean;
    fillOnHover?: boolean;
    fullWidth?: boolean;
}>(({ theme, expandOnHover, fillOnHover, fullWidth }) => ({
    transition: "all 0.3s ease",
    ...(fillOnHover && {
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        "&:hover": {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.main,
        },
    }),
    ...(expandOnHover && {
        "&:hover": {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
    }),
    padding: `${theme.spacing(1.375)} ${theme.spacing(3)}`,
    borderRadius: theme.shape.borderRadius,
    width: fullWidth ? "100%" : "auto", // Set width conditionally
    ...(fillOnHover &&
        expandOnHover && {
            "&:hover": {
                color: theme.palette.common.white,
                backgroundColor: theme.palette.primary.main,
                paddingLeft: theme.spacing(4),
                paddingRight: theme.spacing(4),
            },
        }),
}));

const LinkButton: React.FC<LinkButtonProps> = ({
    href,
    expandOnHover = false,
    fillOnHover = false,
    icon = <NorthEastIcon />,
    showIcon = false,
    fullWidth = false,
    className,
    children,
    variant = "text",
    ...props
}) => {
    const theme = useTheme();

    return (
        <Link
            href={href}
            passHref
            style={{
                flexGrow: fullWidth ? 1 : undefined,
            }}
            className={className}
        >
            <StyledButton
                expandOnHover={expandOnHover}
                fillOnHover={fillOnHover}
                variant={variant}
                fullWidth={fullWidth} // Pass fullWidth to StyledButton
                {...props}
                sx={{
                    paddingRight: showIcon
                        ? theme.spacing(1.5)
                        : theme.spacing(3),
                    height: "3rem",
                }}
                className={className}
            >
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: "1rem",
                    }}
                >
                    {children}
                </Typography>
                {showIcon && (
                    <span style={{ marginLeft: theme.spacing(0.5) }}>
                        {icon}
                    </span>
                )}
            </StyledButton>
        </Link>
    );
};

export default LinkButton;
