"use client";
import Sun from "../icons/sun";
import Moon from "../icons/moon";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    return (
        <div
            className="bg-white shadow-md icon-box dark:bg-dark-light hover:shadow-lg hover:bg-transparent"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            {theme === "light" ? <Sun /> : <Moon />}
        </div>
    );
}
