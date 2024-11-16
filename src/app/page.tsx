import HeroSection from "@/modules/home/HeroSection";
import BrandsSection from "@/modules/home/BrandsSection";
import HowItWorksSection from "@/modules/home/HowItWorksSection";
import FeaturesSection from "@/modules/home/FeaturesSection";

export default function Home() {
    return (
        <div className="flex flex-col w-full justify-center overflow-x-hidden">
            <HeroSection />
            <BrandsSection />
            <HowItWorksSection />
            <FeaturesSection />
            <div className="h-screen bg-red-500" />
        </div>
    );
}
