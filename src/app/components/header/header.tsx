"use client";

import { Box, List, ListItem, useMediaQuery, useTheme } from "@mui/material";
import ContainedPurpleButton from "../buttons/contened-purple";
import OutlinedWhiteButton from "../buttons/outlined-white";
import { useEffect, useState } from "react";
import HeaderMobile from "./header-mobile";

export default function Header() {
    const theme = useTheme();
    const [activeSection, setActiveSection] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobile = useMediaQuery("(min-width:1050px)");

    // Adicionando verificação de renderização no cliente
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);  // Marca que o componente foi montado no cliente

        const handleScroll = () => {
            const sections = ["home", "metodology", "about", "outsourcing", "hunting", "vacancies", "client-opinion"];
            let currentSection = "home";

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        if (isClient) {
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [isClient]);  // A dependência de `isClient` garante que o código só roda no cliente

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        setActiveSection(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (!isClient) return null;  // Não renderiza nada no servidor até ser montado no cliente

    return (
        <Box
            sx={{
                top: 0,
                position: "fixed",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                py: "20px",
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.05)",
                zIndex: 1000,
            }}
        >
            <Box
                sx={{
                    maxWidth: "90vw",
                    width: "100%",
                    mx: "auto",
                    display: isMobile ? "flex" : "none",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <img
                    src="/svg/logo.svg"
                    alt="Logo"
                    style={{ width: "100px" }}
                />
                <List
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "16px",
                        [theme.breakpoints.up(1080)]: {
                            gap: "32px",
                        },
                        flexWrap: "nowrap",
                        color: theme.palette.secondary.main,
                        fontSize: "16px",
                        fontWeight: 500,
                        fontFamily: "Sora, sans-serif",
                        padding: 0,
                        whiteSpace: "nowrap",
                        px: 2,
                        margin: 0,
                        listStyleType: "none",
                        overflow: "hidden",
                    }}
                >
                    {[
                        { label: "Home", id: "home" },
                        { label: "Nossos Serviços", id: "services" },
                        { label: "Quem Somos", id: "about" },
                        { label: "Vagas", id: "vacancies" },
                    ].map((item) => (
                        <ListItem
                            key={item.id}
                            sx={{
                                padding: 0,
                                mb: "4px",
                                fontWeight: 400,
                                position: "relative",
                                "&:hover .nav-link": {
                                    color: theme.palette.primary.main,
                                },
                            }}
                            onClick={() => scrollToSection(item.id)}
                        >
                            <Box
                                className="nav-link"
                                sx={{
                                    display: "inline-block",
                                    position: "relative",
                                    color:
                                        activeSection === item.id
                                            ? theme.palette.primary.main
                                            : theme.palette.secondary.main,
                                    cursor: "pointer",
                                    transition: "color 0.3s ease",
                                    "&::after": {
                                        content: activeSection === item.id ? '""' : 'none',
                                        position: 'absolute',
                                        bottom: -4,
                                        left: 0,
                                        width: '100%',
                                        height: '1.6px',
                                        backgroundColor: '#6F60E0',
                                        borderRadius: '2px',
                                    },
                                }}
                            >
                                {item.label}
                            </Box>
                        </ListItem>
                    ))}
                </List>

                {/* Botões */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "16px",
                    }}
                >
                    <OutlinedWhiteButton height={40}>Entre em contato</OutlinedWhiteButton>
                    <ContainedPurpleButton height={40}>Área do colaborador</ContainedPurpleButton>
                </Box>
            </Box>

            <HeaderMobile
                activeSection={activeSection}
                isMobileMenuOpen={isMobileMenuOpen}
                scrollToSection={scrollToSection}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
        </Box>
    );
}
