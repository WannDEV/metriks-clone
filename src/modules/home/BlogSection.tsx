"use cient";
import React from "react";
import Section from "@/layouts/Section";
import SectionTag from "@/components/SectionTag";
import { Typography } from "@mui/material";
import DefaultGrid from "@/layouts/DefaultGrid";
import BLOG_DUMMY_DATA from "@/data/blog_dummy_data";
import Blog from "@modules/Blog";
import LinkButton from "@/components/buttons/LinkButton";
import EastIcon from "@mui/icons-material/East";

const BlogSection: React.FC = () => {
    return (
        <Section>
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-2">
                    <div className="flex w-full justify-center">
                        <SectionTag>BLOG</SectionTag>
                    </div>
                    <Typography variant="h2" className="text-center">
                        Læs mere
                    </Typography>
                </div>
                <DefaultGrid>
                    {BLOG_DUMMY_DATA.slice(0, 3).map((blog, index) => (
                        <Blog key={index} {...blog} typeInFocus />
                    ))}
                </DefaultGrid>
                <div className="flex w-full justify-center">
                    <LinkButton
                        variant="outlined"
                        href="/blog"
                        icon={<EastIcon />}
                        fillOnHover
                        expandOnHover
                        showIcon
                    >
                        Flere artikler
                    </LinkButton>
                </div>
            </div>
        </Section>
    );
};

export default BlogSection;
