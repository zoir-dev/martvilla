import { getTranslations } from "next-intl/server";

const Counter = async () => {
    const t = await getTranslations();
    return (
        <div className="flex-wrap justify-center gap-4 px-4 py-8 flex-align-center sm:justify-between bg-secondary">
            <div className="text-center">
                <h1 className="heading !text-slate-100">12k+</h1>
                <p className="text-slate-100">{t("Renovation Projects")}</p>
            </div>
            <div className="text-center">
                <h1 className="heading !text-slate-100">100+</h1>
                <p className="text-slate-100">{t("Team Members")}</p>
            </div>
            <div className="text-center">
                <h1 className="heading !text-slate-100">15k+</h1>
                <p className="text-slate-100">{t("Projects Completed")}</p>
            </div>
            <div className="text-center">
                <h1 className="heading !text-slate-100">100%</h1>
                <p className="text-slate-100">{t("Satisfied Clients")}</p>
            </div>
        </div>
    );
};

export default Counter;
