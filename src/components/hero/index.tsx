/* eslint-disable @next/next/no-img-element */
import { getTranslations } from "next-intl/server";

const Hero = async () => {
    const t = await getTranslations();
    return (
        <div
            className="relative z-0 flex-wrap min-h-screen gap-2 md:-mt-10 flex-center-center"
            style={{
                background: "url('/images/hero-bg-pattern.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
            }}
            id="home"
        >
            <div className="absolute top-0 right-0 rounded-full bg-[#04a7ff]/30 dark:bg-[#04a7ff]/50 w-72 h-72 -z-10 blur-[120px]"></div>
            <div className="flex-1 basis-[20rem]">
                <h1 className="text-4xl font-bold capitalize md:text-5xl">
                    Prime Haven Properties
                </h1>
                <div className="pl-3 mt-5 border-l-4 border-primary">
                    <p className="sm:text-lg">
                        {t(
                            "Your trusted partner in luxury real estate in Dubai"
                        )}
                    </p>
                </div>
                <button className="mt-6 btn btn-primary">
                    {t("get started")}
                </button>
                <div className="mt-6 text-center flex-align-center gap-x-6">
                    <div>
                        <h1 className="text-2xl font-bold">
                            12k <span className="text-sm text-primary">+</span>
                        </h1>
                        <p>{t("Requested Projects")}</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">
                            15k <span className="text-sm text-primary">+</span>
                        </h1>
                        <p>{t("Projects Completed")}</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">
                            100 <span className="text-sm text-primary">+</span>
                        </h1>
                        <p>{t("Served Clients")}</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 basis-[20rem]">
                <img src="/images/hero-4.png" alt="" className="w-full" />
            </div>
        </div>
    );
};

export default Hero;
