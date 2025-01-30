import TestimonialCard from "./card";

const Testimonial = () => {
    return (
        <div className="pt-10 pb-16">
            <div className="text-center">
                <h1 className="mx-auto sub-heading">testimonial</h1>
                <h1 className="heading">
                    what {"they're"} saying about our work feedback
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
        role: "Front-end developer",
        image: "/images/avatar.png",
        reviewText:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis porro ex perferendis, nulla consectetur consequuntur odio qui adipisci harum earum dolor, eius accusantium quia praesentium.",
    },
    {
        id: 2,
        name: "Ethan Hunt",
        role: "Backend engineer",
        image: "/images/avatar-1.png",
        reviewText:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis porro ex perferendis, nulla consectetur consequuntur odio qui adipisci harum earum dolor, eius accusantium quia praesentium.",
    },
    {
        id: 3,
        name: "Raven Kent",
        role: "UI Designer",
        image: "/images/avatar-2.png",
        reviewText:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis porro ex perferendis, nulla consectetur consequuntur odio qui adipisci harum earum dolor, eius accusantium quia praesentium.",
    },
];
