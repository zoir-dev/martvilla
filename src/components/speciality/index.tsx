/* eslint-disable @next/next/no-img-element */
import { getTranslations } from "next-intl/server";
import Check from "../icons/check";
import Layers from "../icons/layers";
import Users from "../icons/users";

const Speciality = async () => {
    const t = await getTranslations();
    return (
        <div className="pt-10 pb-16" id="about">
            <div className="flex flex-wrap gap-10">
                <div className="flex-1 basis-[20rem]">
                    <h1 className="sub-heading">{t("about us")}</h1>
                    <h1 className="heading">
                        {t(
                            "Your trusted partner in luxury real estate in Dubai"
                        )}
                    </h1>
                    <p className="mt-3">{t("about_des")}</p>
                    <div className="mt-4">
                        <div className="flex-align-center gap-x-2">
                            <div className="icon-box text-primary !bg-primary/20">
                                <Check />
                            </div>
                            <p>{t("Reliability")}</p>
                        </div>
                        <div className="mt-2 flex-align-center gap-x-2">
                            <div className="icon-box text-primary !bg-primary/20">
                                <Check />
                            </div>
                            <p>{t("Innovation")}</p>
                        </div>
                        <div className="mt-2 flex-align-center gap-x-2">
                            <div className="icon-box text-primary !bg-primary/20">
                                <Check />
                            </div>
                            <p>{t("Excellence in customer service")}</p>
                        </div>
                        <div className="mt-2 flex-align-center gap-x-2">
                            <div className="icon-box text-primary !bg-primary/20">
                                <Check />
                            </div>
                            <p>
                                {t(
                                    "Modern city locations and exceptional lifestyle"
                                )}
                            </p>
                        </div>
                        <button className="mt-4 btn btn-primary">
                            {t("read more")}
                        </button>
                    </div>
                </div>
                <div className="flex-1 basis-[20rem]">
                    <div className="relative">
                        <img
                            src="/images/property (5).jpg"
                            alt=""
                            className="rounded-lg w-full sm:h-[400px] object-cover"
                        />
                        <div className="absolute -bottom-10 sm:bottom-5 -left-2 md:-left-20">
                            <div className="p-3 bg-white rounded-lg shadow-md w-72 flex-center-between gap-x-3 dark:bg-dark-light">
                                <h1>
                                    {t(
                                        "We have been serving our customers for over 70 years"
                                    )}
                                </h1>
                                <div className="icon-box text-primary !bg-primary/20">
                                    <Users />
                                </div>
                            </div>
                            <div className="p-3 mt-4 ml-8 bg-white rounded-lg shadow-md w-72 flex-center-between gap-x-3 dark:bg-dark-light">
                                <h1>
                                    {t(
                                        "Working with the symbol and reputation of trustworthy trait"
                                    )}
                                </h1>
                                <div className="icon-box text-primary !bg-primary/20">
                                    <Layers />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speciality;
