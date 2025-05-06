import "./globals.css";
import Providers from "./providers";
import {ReactNode} from "react";
import FaviconSwitcher from "@/app/utils/FaviconSwitcher";

export const metadata = {
    title: "Ponte Tech",
    description: "Oferecemos outsourcing de profissionais de TI para transformar desafios complexos em soluções eficientes, produtivas e de alta qualidade.",
    icons: {
        icon: "/favicon/1.svg",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body>
                <FaviconSwitcher />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
