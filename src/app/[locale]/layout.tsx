import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { Questrial } from "next/font/google";
import { getMessages } from "next-intl/server";
import { ThemeLayout } from "@/layouts/theme-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Prime Haven Properties",
    description: "Dubaydagi hashamatli ko'chmas mulkning ishonchli hamkori",
};

const questrial = Questrial({
    subsets: ["latin"],
    weight: "400",
});

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const locale = (await params).locale;
    const messages = await getMessages();
    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={questrial.className}>
                <ThemeLayout
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NextIntlClientProvider messages={messages}>
                        {children}
                    </NextIntlClientProvider>
                </ThemeLayout>
            </body>
        </html>
    );
}
