import Building from "../icons/building";
import FullScreen from "../icons/fullscreen";
import HeadPhone from "../icons/headphones";
import Home2Icon from "../icons/home2";
import Roller from "../icons/roller";
import Shield from "../icons/shield";

const Services = () => {
    return (
        <div className="pt-10 pb-16" id="services">
            <div className="text-center">
                <h1 className="mx-auto sub-heading">services</h1>
                <h1 className="heading">
                    specialists services provided in this apartment building
                </h1>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3">
                {services.map(({ id, name, icon, text }) => (
                    <div
                        className="p-3 text-center rounded-lg hover:card-shadow  border-t-4 border-t-transparent hover:border-t-primary dark:hover:bg-card-dark"
                        key={id}
                    >
                        <div className="icon-box !opacity-100 !w-14 !h-14 mx-auto !bg-primary/20 text-primary hover:!bg-primary hover:text-white">
                            <div className="text-2xl"> {icon}</div>
                        </div>
                        <h1 className="mt-2 heading !text-xl">{name}</h1>
                        <p className="mt-2">{text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;

const services = [
    {
        id: 1,
        name: "luxury apartment",
        icon: <Building />,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum commodi provident est ex similique.",
    },
    {
        id: 2,
        name: "architectural design",
        icon: <FullScreen />,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum commodi provident est ex similique.",
    },
    {
        id: 3,
        name: "extra security",
        icon: <Shield />,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum commodi provident est ex similique.",
    },
    {
        id: 4,
        name: "Home remodelling",
        icon: <Home2Icon />,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum commodi provident est ex similique.",
    },
    {
        id: 5,
        name: "office renovation",
        icon: <Roller />,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum commodi provident est ex similique.",
    },
    {
        id: 6,
        name: "24/7 support",
        icon: <HeadPhone />,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum commodi provident est ex similique.",
    },
];
