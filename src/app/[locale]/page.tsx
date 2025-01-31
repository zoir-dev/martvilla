import BackToTopButton from "@/components/back-to-top";
import Brands from "@/components/brands";
import Counter from "@/components/counter";
import Featured from "@/components/featured";
import Feeds from "@/components/feeds";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Invest from "@/components/invest";
import NewsLetter from "@/components/newslatter";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Speciality from "@/components/speciality";
import Testimonial from "@/components/testimonials";

export default async function Home() {
    return (
        <div>
            <Header />
            <div className="pt-16 max-w-7xl mx-auto px-4 pb-40">
                <Hero />
                <Invest />
                <Speciality />
                <Services />
                <Featured />
                <Counter />
                <Projects />
                <Testimonial />
                <Brands />
                <Feeds />
            </div>
            <div className="px-[2%] md:px-[6%] bg-card-dark border border-card-dark">
                <NewsLetter />
                <div className="mt-20">
                    <Footer />{" "}
                </div>
            </div>
            <BackToTopButton />
        </div>
    );
}
