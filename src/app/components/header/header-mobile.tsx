import { Box, List, ListItem, Collapse } from "@mui/material";
import ContainedPurpleButton from "../buttons/contened-purple";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderMobileProps {
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  isMobileMenuOpen: boolean;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function HeaderMobile({
  setIsMobileMenuOpen,
  isMobileMenuOpen,
  activeSection,
  scrollToSection,
}: HeaderMobileProps) {
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          pl: 0,
          gap: 2,
          alignItems: "center",
        }}
      >
        <img width={80} src="./logo.svg" alt="Logo" />
        <ContainedPurpleButton>Login</ContainedPurpleButton>

        <Box
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          sx={{ borderRadius: 2, display: "flex", alignItems: "center" }}
        >
          {isMobileMenuOpen ? (
            <CloseIcon sx={{ color: "#8270FF", fontSize: 46, p: 1 }} />
          ) : (
            <MenuIcon
              sx={{
                bgcolor: "#8270FF",
                color: "white",
                fontSize: 46,
                p: 1,
                borderRadius: 2,
              }}
            />
          )}
        </Box>
      </Box>
      {/* Expandable Menu */}
      <Collapse in={isMobileMenuOpen} sx={{ width: "100%" }}>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            color: "#8270FF",
            fontSize: "20px",
            fontWeight: 500,
            fontFamily: "Sora, sans-serif",
            mt: 2,
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
                color: activeSection === item.id ? "#6F60E0" : "#4B4B4B",
                "&:hover": {
                  color: "#6F60E0",
                  textDecoration: "underline",
                  cursor: "pointer",
                },
              }}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Box>
  );
}
