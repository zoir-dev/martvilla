import BackToTopButton from "@/components/back-to-top";
import Brands from "@/components/brands";
import Counter from "@/components/counter";
import Feeds from "@/components/feeds";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Invest from "@/components/invest";
import NewsLetter from "@/components/newslatter";
import Services from "@/components/services";
import Speciality from "@/components/speciality";
import Testimonial from "@/components/testimonials";

export default async function Home() {
    return (
        <div>
            <Header />
            <div className="pt-16 max-w-7xl mx-auto px-4 pb-20">
                <Hero />
                <Invest />
                <Speciality />
                <Services />
                <Counter />
                <Testimonial />
                <Brands />
                <Feeds />
            </div>
            <div>
                <NewsLetter />
                <div className=" text-center p-1">
                    <p>@ Copyright 2025 PHP - All rights reserved</p>
                    {/* <Footer />{" "} */}
                </div>
            </div>
            <BackToTopButton />
        </div>
    );
}
