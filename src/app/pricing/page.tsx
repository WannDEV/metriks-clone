import React from "react";
import PricingSection from "@/modules/pricing/PricingSection";
import NewsletterSection from "@/modules/home/NewsletterSection";

const Page: React.FC = () => {
    return (
        <div>
            <PricingSection />
            <NewsletterSection />
        </div>
    );
};

export default Page;
