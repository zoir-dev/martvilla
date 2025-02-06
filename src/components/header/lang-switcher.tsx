"use client";
// import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import React from "react";

export default function LangSwitcher() {
    // const pathname = usePathname();
    // const router = useRouter();
    const locale = useLocale();

    function changeLang(lang: string) {
        console.log(lang);
        // router.replace({ pathname }, { locale: lang });
    }
    return (
        <select
            value={locale}
            onChange={(e) => changeLang(e.target.value)}
            className="bg-white shadow-md h-9 px-2 rounded-full dark:bg-dark-light hover:shadow-lg hover:bg-transparent"
        >
            <option value="uz">Uz</option>
            <option value="en">En</option>
        </select>
    );
}
