"use client";

import {
  Box,
  List,
  ListItem,
  useTheme,
  Link,
  IconButton,
  Drawer,
  Collapse,
} from "@mui/material";
import ContainedPurpleButton from "../buttons/contened-purple";
import OutlinedWhiteButton from "../buttons/outlined-white";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import HeaderMobile from "./header-mobile";

export default function Header() {
  const theme = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    setActiveSection(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        top: 0,
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        py: "20px",
        px: "80px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.05)",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          display: {
            xs: "none",
            md: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 200,
          },
        }}
      >
        <img
          src="./logo.svg"
          alt="Logo"
          style={{ width: "120px", height: "auto" }}
        />
        <List
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "32px",
            flexWrap: "nowrap",
            color: theme.palette.secondary.main,
            fontSize: "16px",
            fontWeight: 500,
            fontFamily: "Sora, sans-serif",
            padding: 0,
            whiteSpace: "nowrap",
            margin: 0,
            listStyleType: "none",
            overflow: "hidden",
          }}
        >
          <ListItem
            sx={{
              padding: 0,
              color:
                activeSection === "home"
                  ? theme.palette.primary.main
                  : theme.palette.secondary.main,
              "&:hover": {
                color: theme.palette.primary.main,
                textDecoration: "underline",
                cursor: "pointer",
              },
            }}
            onClick={() => scrollToSection("home")}
          >
            Home
          </ListItem>
          <ListItem sx={{ padding: 0 }}>
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: theme.palette.secondary.main,
                "&:hover": {
                  color: theme.palette.primary.main,
                  textDecoration: "underline",
                },
              }}
            >
              Nossos Serviços
            </Link>
          </ListItem>
          <ListItem
            sx={{
              padding: 0,
              color:
                activeSection === "about"
                  ? theme.palette.primary.main
                  : theme.palette.secondary.main,
              "&:hover": {
                color: theme.palette.primary.main,
                textDecoration: "underline",
                cursor: "pointer",
              },
            }}
            onClick={() => scrollToSection("about")}
          >
            Quem Somos
          </ListItem>
          <ListItem
            sx={{
              padding: 0,
              color:
                activeSection === "vacancies"
                  ? theme.palette.primary.main
                  : theme.palette.secondary.main,
              "&:hover": {
                color: theme.palette.primary.main,
                textDecoration: "underline",
                cursor: "pointer",
              },
            }}
            onClick={() => scrollToSection("vacancies")}
          >
            Vagas
          </ListItem>
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
          <OutlinedWhiteButton>Entre em contato</OutlinedWhiteButton>
          <ContainedPurpleButton>Área do colaborador</ContainedPurpleButton>
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
