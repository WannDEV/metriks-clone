import HeroSection from "@/modules/home/HeroSection";
import BrandsSection from "@/modules/home/BrandsSection";
import HowItWorksSection from "@/modules/home/HowItWorksSection";
import FeaturesSection from "@/modules/home/FeaturesSection";
import BlogSection from "@/modules/home/BlogSection";
import NewsletterSection from "@/modules/home/NewsletterSection";

export default function Home() {
    return (
        <div className="flex flex-col w-full justify-center overflow-x-hidden">
            <HeroSection />
            <BrandsSection />
            <HowItWorksSection />
            <FeaturesSection />
            <BlogSection />
            <NewsletterSection />
        </div>
    );
}
