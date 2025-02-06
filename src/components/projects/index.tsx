/* eslint-disable @next/next/no-img-element */
import { Link } from "@/i18n/routing";

const Projects = () => {
    return (
        <div className="pt-10 pb-16" id="projects">
            <div className="text-center">
                <h1 className="mx-auto sub-heading">our projects</h1>
                <h1 className="heading">
                    excellent projects both small and complex
                </h1>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3">
                {projects.map(({ id, name, number, image }) => (
                    <div key={id} className="relative w-full group">
                        <div className="overflow-hidden">
                            <Link href={"/"} className="!opacity-100">
                                <img
                                    src={image}
                                    alt={name}
                                    className="w-full  h-fit md:h-[250px] object-cover group-hover:scale-125 transition-a"
                                />
                            </Link>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 text-slate-100 to-transparent">
                            <h1 className="text-lg font-semibold">{name}</h1>
                            <p>{number} Poperty</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

const projects = [
    {
        id: 1,
        name: "Apartment",
        number: 20,
        image: "/images/property (17).jpg",
    },
    {
        id: 2,
        name: "Office",
        number: 23,
        image: "/images/property (1).jpeg",
    },
    {
        id: 3,
        name: "Townhouse",
        number: 36,
        image: "/images/property (21).jpg",
    },
    {
        id: 4,
        name: "living room",
        number: 12,
        image: "/images/property (1).jpg",
    },
    {
        id: 5,
        name: "Real estate",
        number: 36,
        image: "/images/property (20).jpg",
    },
    {
        id: 6,
        name: "luxury apartment",
        number: 14,
        image: "/images/property (18).jpg",
    },
];
