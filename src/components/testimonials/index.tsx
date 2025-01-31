import { getTranslations } from "next-intl/server";
import TestimonialCard from "./card";

const Testimonial = async () => {
    const t = await getTranslations();
    return (
        <div className="pt-10 pb-16">
            <div className="text-center">
                <h1 className="mx-auto sub-heading">testimonial</h1>
                <h1 className="heading">
                    {t("what they're saying about our work feedback")}
                </h1>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
                {testimonials.map((testimonial) => (
                    <TestimonialCard {...testimonial} key={testimonial.id} />
                ))}
            </div>
        </div>
    );
};

export default Testimonial;

const testimonials = [
    {
        id: 1,
        name: "Wabz Braize",
        role: "Menejer",
        image: "/images/avatar.png",
        reviewText:
            "Working with Prime Haven Properties was very easy and efficient",
    },
    {
        id: 2,
        name: "Ethan Hunt",
        role: "Menejer",
        image: "/images/avatar-1.png",
        reviewText: "My property was sold in no time Much obliged",
    },
];
