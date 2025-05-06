"use client";

import { Box } from "@mui/material";
import Header from "./components/header/header";
import HomeSection from "./components/home/home-section";
import WhatsAppButton from "./components/social-icons/whatsapp-button";
import AboutSection from "./components/about/about-section";
import OutsourcingSection from "./components/outsourcing/outsourcing-section";
import MethodologySection from "./components/metodology/metodology-section";
import HuntingSection from "./components/hunting/hunting-section";
import VacanciesSection from "./components/vacancies/vacancies-section";
import ClientOpinionSection from "./components/client-opinion/client-opinion-section";
import ContactSession from "./components/contact/contact-session";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <Box sx={{bgcolor: "#F9F5FF"}}>
      <WhatsAppButton />
      <Header />
      <Box>
        <Box id="home">
          <HomeSection />
        </Box>
        <Box id="about">
          <AboutSection />
        </Box>
        <Box id="metodology">
          <MethodologySection />
        </Box>
        <Box id="outsourcing">
          <OutsourcingSection />
        </Box>
        <Box id="hunting">
          <HuntingSection />
        </Box>
        <Box id="vacancies">
          <VacanciesSection />          
        </Box>
        <Box id="client-opinion">
          <ClientOpinionSection />          
        </Box>
        <Box id="contact">
          <ContactSession />          
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
