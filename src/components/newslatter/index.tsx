import { getTranslations } from "next-intl/server";

const NewsLetter = async () => {
    const t = await getTranslations();
    return (
        <div className="flex flex-wrap  bg-primary h-fit sm:h-[250px] rounded-xl py-4 text-slate-100 max-w-7xl mx-auto px-4 overflow-hidden">
            <div className="flex-1 basis-[20rem]">
                <img
                    src="/images/3d-house.png"
                    alt=""
                    className="w-[400px] lg:w-[500px] -mt-14"
                />
            </div>
            <div className="flex-1 basis-[16rem] md:basis-[30rem] mt-3 sm:mt-10">
                <div className="text-center sm:text-left">
                    <h1 className="text-2xl font-bold capitalize">
                        {t("Contact")}
                    </h1>
                </div>
                <div className="mt-3">
                    <a
                        className="font-bold sm:text-lg py-0.5"
                        href="tel: +971508223134"
                    >
                        +971508223134
                    </a>
                    <br />
                    <a
                        className="font-bold sm:text-lg py-0.5"
                        href="tel: +971565881877"
                    >
                        +971565881877
                    </a>
                    <br />
                    <a
                        className="font-bold sm:text-lg py-0.5"
                        href="mailto: info@martvilla.ae"
                    >
                        info@martvilla.ae
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
