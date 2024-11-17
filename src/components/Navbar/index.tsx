"use client";
import React, { useState, useEffect } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavigationLink from "./NagivationLink";
import Logo from "./Logo";
import LinkButton from "@/components/buttons/LinkButton";
import hexToRgba from "@utils/hexToRgba";
import useScrollPosition from "@hooks/useScrollPosition";

const Navbar: React.FC = () => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { scrollY, scrollDirection } = useScrollPosition();
    const [isBlurred, setIsBlurred] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    useEffect(() => {
        if (scrollY > 0 && scrollDirection === "up") {
            setIsBlurred(true);
        } else {
            setIsBlurred(false);
        }
    }, [scrollY, scrollDirection]);

    useEffect(() => {
        if (isMdUp) {
            setIsDrawerOpen(false);
        }
    }, [isMdUp]);

    return (
        <AppBar
            position="fixed"
            className="px-4 py-2 md:px-8 md:py-2 lg:px-16 lg:py-4 z-30"
            elevation={0}
            sx={{
                backgroundColor: {
                    xs: theme.palette.background.paper, // Solid color on small screens
                    md: hexToRgba(
                        scrollY > 0
                            ? theme.palette.background.default
                            : theme.palette.background.paper,
                        isBlurred ? 0.8 : 1
                    ), // Transparent and blurred on md and larger screens
                },
                backdropFilter: {
                    xs: "none", // No blur on small screens
                    md: isBlurred ? "blur(10px)" : "none", // Blur effect on md and larger screens
                },
                overflow: "hidden",
            }}
        >
            <Toolbar
                variant="dense"
                className="p-0"
                sx={{ justifyContent: "space-between" }}
            >
                <Logo />

                {/* Desktop Links */}
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        gap: theme.spacing(3),
                    }}
                >
                    <NavigationLink href="/pricing" text="Priser" />
                    <NavigationLink href="/contact" text="Kontakt" />
                    <NavigationLink href="/blog" text="Blog" />
                </Box>

                {/* Right Side - Login and Sign Up Buttons */}
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        gap: theme.spacing(2),
                    }}
                >
                    <LinkButton href="/login" variant="outlined" fillOnHover>
                        Login
                    </LinkButton>
                    <LinkButton
                        href="/sign-up"
                        expandOnHover
                        variant="contained"
                        showIcon
                    >
                        Sign up
                    </LinkButton>
                </Box>

                {/* Mobile Menu Icon */}
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer}
                    sx={{ display: { xs: "block", md: "none" } }}
                >
                    {isDrawerOpen ? (
                        <CloseIcon
                            sx={{
                                fontSize: 40,
                                color: theme.palette.text.primary,
                            }}
                        />
                    ) : (
                        <MenuIcon
                            sx={{
                                fontSize: 40,
                                color: theme.palette.text.primary,
                            }}
                        />
                    )}
                </IconButton>
            </Toolbar>

            {/* Expanded Content - Visible only when isDrawerOpen is true */}
            {isDrawerOpen && (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: theme.spacing(2),
                        paddingY: theme.spacing(2),
                    }}
                    className=""
                >
                    {/* Links */}
                    <NavigationLink href="/pricing" text="Priser" />
                    <NavigationLink href="/contact" text="Kontakt" />
                    <NavigationLink href="/blog" text="Blog" />

                    {/* Login and Sign Up Buttons */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: theme.spacing(2),
                            mt: 2,
                            width: "100%",
                        }}
                    >
                        <LinkButton
                            href="/login"
                            variant="outlined"
                            fillOnHover
                            fullWidth
                        >
                            Login
                        </LinkButton>
                        <LinkButton
                            href="/sign-up"
                            expandOnHover
                            variant="contained"
                            showIcon
                        >
                            Sign up
                        </LinkButton>
                    </Box>
                </Box>
            )}
        </AppBar>
    );
};

export default Navbar;
