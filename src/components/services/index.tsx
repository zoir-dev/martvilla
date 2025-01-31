import { getTranslations } from "next-intl/server";
import Building from "../icons/building";
import FullScreen from "../icons/fullscreen";
import Shield from "../icons/shield";

const Services = async () => {
    const t = await getTranslations();
    return (
        <div className="pt-10 pb-16" id="services">
            <div className="text-center">
                <h1 className="mx-auto sub-heading">{t("Services")}</h1>
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
                        <h1 className="mt-2 heading !text-xl">{t(name)}</h1>
                        <p className="mt-2">{t(text)}</p>
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
        name: "Sale and rent",
        icon: <Building />,
        text: "sale_des",
    },
    {
        id: 2,
        name: "Investitsiya imkoniyatlari",
        icon: <FullScreen />,
        text: "invest_des",
    },
    {
        id: 3,
        name: "Property management",
        icon: <Shield />,
        text: "property_des",
    },
];
