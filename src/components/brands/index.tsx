import { getTranslations } from "next-intl/server";

const Brands = async () => {
    const t = await getTranslations();
    return (
        <div className="pt-6 pb-10" id="brands">
            <div className="text-center max-w-[400px] mx-auto">
                <h1 className="mx-auto sub-heading">{t("brands")}</h1>
                <h1 className="heading">{t("our brands")}</h1>
            </div>
            <div className="flex-wrap p-4 mt-8 flex-center-center gap-x-16 gap-y-5">
                {brands.map((image, i) => (
                    <div className="group" key={i}>
                        <img
                            src={image}
                            alt=""
                            className="w-20 group-hover:scale-125 transition-a"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brands;

const brands = [
    "/images/brands/airbnb.png",
    "/images/brands/cisco.png",
    "/images/brands/ebay.png",
    "/images/brands/microsoft.png",
    "/images/brands/uber.png",
];
