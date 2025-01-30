"use client";
import House from "../icons/house";
import { Link } from "@/i18n/routing";
import { navLinks } from "./nav-links";
import ThemeSwitcher from "./theme-switcher";
import LangSwitcher from "./lang-switcher";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Menu from "../icons/menu";

export default function Header() {
    const [open, setOpen] = useState(false);
    const t = useTranslations();
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        navLinks.forEach((id) => {
            const element = document.getElementById(id.path?.slice(1));
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="navbar fixed w-full z-20 top-0 left-0 py-2 bg-white/60 border-b backdrop-blur-sm dark:border-dark dark:bg-card-dark/60">
            <div className="max-w-7xl mx-auto px-4 flex-center-between">
                <Link
                    href="/"
                    className="flex-shrink-0 flex-align-center gap-x-1"
                >
                    <House />
                    <h1 className="hidden md:block">MartVilla</h1>
                </Link>
                <div className="flex-align-center gap-x-4">
                    <div className="hidden md:flex-align-center">
                        {navLinks.map((link) => (
                            <a
                                href={link.path}
                                key={link.path}
                                className={`px-3 py-[0.6rem] lg:px-4 link border-b-2 border-transparent hover:text-primary duration-300 ${
                                    activeSection === link.path?.slice(1)
                                        ? "!border-primary text-primary"
                                        : ""
                                }`}
                            >
                                {t(link.name)}
                            </a>
                        ))}
                    </div>

                    <div
                        className={`lg:hidden mobile-modal fixed w-screen h-screen top-0 left-0 bg-black/50 z-50 opacity-0 pointer-events-none transition-a  ${
                            open && "open"
                        }`}
                        onClick={() => setOpen(false)}
                    >
                        <ul
                            className={`mobile-dialog overflow-auto absolute flex flex-col space-y-4 p-3 bg-white dark:bg-card-dark h-screen max-w-[300px] w-full -translate-x-[500px] transition-a ${
                                open && "open"
                            }`}
                        >
                            <div className="border-b flex-center-between dark:border-slate-800">
                                <p className="uppercase">menu</p>
                            </div>
                            {navLinks.map((link) => (
                                <a
                                    href={link.path}
                                    key={link.path}
                                    className={`link border-b-2 border-transparent hover:text-primary duration-300 ${
                                        activeSection === link.path?.slice(1)
                                            ? "!border-primary text-primary"
                                            : ""
                                    }`}
                                    onClick={() => setOpen(false)}
                                >
                                    {t(link.name)}
                                </a>
                            ))}
                        </ul>
                    </div>

                    <LangSwitcher />
                    <ThemeSwitcher />
                    <div
                        className="bg-white shadow-md icon-box dark:bg-dark-light hover:shadow-lg hover:bg-transparent md:hidden"
                        onClick={() => setOpen(true)}
                    >
                        <Menu />
                    </div>
                </div>
            </div>
        </div>
    );
}
