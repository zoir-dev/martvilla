import { Link } from "@/i18n/routing";
import Building from "../icons/building";
import Facebook from "../icons/facebook";
import Twitter from "../icons/twitter";
import Instagram from "../icons/instagram";
import Linkedin from "../icons/linkedin";
import { getTranslations } from "next-intl/server";

const Footer = async () => {
    const t = await getTranslations();
    return (
        <div className="text-slate-200">
            <footer>
                <div className="flex flex-wrap gap-2 max-w-7xl mx-auto px-4">
                    <div className="flex-1 basis-[10rem]">
                        <Link
                            href="/"
                            className="flex-shrink-0 flex-align-center gap-x-1"
                        >
                            <Building />
                            <h1 className="hidden md:block">
                                Prime Haven Properties
                            </h1>
                        </Link>
                        <div className="mt-3">
                            <p className="text-sm">
                                {t(
                                    "Your trusted partner in luxury real estate in Dubai"
                                )}
                            </p>
                            <div className="gap-5 my-6 flex-center-center">
                                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                                    <Facebook />
                                </div>

                                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                                    <Twitter />
                                </div>

                                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                                    <Instagram />
                                </div>

                                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                                    <Linkedin />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 basis-[10rem]">
                        <h2 className="text-xl font-semibold">Services</h2>
                        <ul>
                            <li className="my-3 text-muted">
                                <a href="#"> Order Tracking</a>
                            </li>
                            <li className="my-3 text-muted">
                                <a href="#">Whislist</a>
                            </li>
                            <li className="my-3 text-muted">
                                <a href="#">Terms of use</a>
                            </li>
                            <li className="my-3 text-muted">
                                <a href="#">Contact support</a>
                            </li>
                            <li className="my-3 text-muted">
                                <a href="#">2 year guarantee</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 basis-[10rem]">
                        <h2 className="text-xl font-semibold">Quick Links</h2>
                        <ul>
                            <li className="my-3 text-muted">
                                <a href="#about">{t("About Us")}</a>
                            </li>
                            <li className="my-3 text-muted">
                                <a href="#services">{t("Services")}</a>
                            </li>
                            <li className="my-3 text-muted">
                                <a href="#blog">{t("Blog")}</a>
                            </li>
                            <li className="my-3 text-muted">
                                <a href="#projects">{t("Portfolio")}</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 basis-[10rem]">
                        <h2 className="text-xl font-semibold">Business</h2>
                        <ul>
                            <li className="my-3 text-muted">
                                <a href="#"> Success</a>
                            </li>
                            <li className="my-3 text-muted">
                                <a href="#">Guide</a>
                            </li>
                            <li className="my-3 text-muted">
                                <a href="#">Mission</a>
                            </li>
                            <li className="my-3 text-muted">
                                <a href="#">Terms & Conditions</a>
                            </li>
                            <li className="my-3 text-muted">
                                <a href="#">Pricacy Policy</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 basis-[10rem] text-center md:text-left">
                        <h2 className="text-xl font-semibold">
                            Subscribe to our Newsletter
                        </h2>
                        <p className="text-sm text-muted">
                            Subscribe to be the first one to know about updates.
                            Enter your email
                        </p>
                        <div className="justify-center my-3 flex-align-center">
                            <input
                                type="text"
                                className="px-4 py-[0.35rem] card-bordered dark:shadow-none outline-none bg-transparent rounded-lg border-dark"
                                placeholder="Email Address.."
                            />
                            <button className="-ml-2 btn btn-primary">
                                subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
