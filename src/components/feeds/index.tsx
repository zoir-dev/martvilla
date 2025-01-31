import { getTranslations } from "next-intl/server";
import SingleFeedCardGrid from "./card";

const Feeds = async () => {
    const t = await getTranslations();
    return (
        <div className="pt-10 pb-16" id="team">
            <div className="text-center">
                <h1 className="mx-auto sub-heading">{t("Our team")}</h1>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2">
                {feeds.slice(0, 4).map((feed) => (
                    <SingleFeedCardGrid key={feed.id} {...feed} />
                ))}
            </div>
        </div>
    );
};

export default Feeds;

const feeds = [
    {
        id: 1,
        title: "Ikromov Ilyosbek",
        image: "/ikrom_aka.png",
        category: "Ceo",
        description: "i_des",
        author: {
            name: "Wabweni Brian",
            avatar: "/images/avatar.png",
        },
    },
    {
        id: 2,
        title: "Javlonbek Otaxonov",
        image: "/javlon_aka.png",
        category: "Lead",
        description: "j_des",
        author: {
            name: "Wabweni Brian",
            avatar: "/images/avatar.png",
        },
    },
];
