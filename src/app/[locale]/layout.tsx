import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeLayout } from "@/layouts/theme-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "MartVilla",
    description: "MartVilla",
};

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
            <body>
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
