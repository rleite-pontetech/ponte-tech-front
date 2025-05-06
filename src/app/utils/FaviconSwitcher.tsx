"use client";

import { useEffect } from "react";

const ACTIVE_ICON = "/favicon/1.svg";
const INACTIVE_ICON = "/favicon/2.svg";

export default function FaviconSwitcher() {
    useEffect(() => {
        const updateFavicon = () => {
            const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;

            if (favicon) {
                favicon.href = document.visibilityState === "visible" ? ACTIVE_ICON : INACTIVE_ICON;
            }
        };

        document.addEventListener("visibilitychange", updateFavicon);

        updateFavicon();

        return () => {
            document.removeEventListener("visibilitychange", updateFavicon);
        };
    }, []);

    return null;
}
