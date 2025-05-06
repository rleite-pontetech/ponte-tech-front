import { Box, Typography } from "@mui/material";
import ContainedPurpleButton from "../buttons/contened-purple";

export default function AboutSection() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: { xs: "auto", md: "100vh" },
        px: { xs: "16px", md: "0" },
        pb: { xs: "40px", md: "80px" },
        gap: { xs: "40px", md: "80px" },
        mb: { xs: "40px", md: "0" },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          width: "100%",
          pt: { xs: "40px", md: "100px" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "24px", md: "28px" },
            fontWeight: 700,
            lineHeight: { xs: "32px", md: "40px" },
            fontFamily: "Sora, sans-serif",
            color: "#000000",
            mb: "8px",
          }}
        >
          Quem Somos
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 400,
            lineHeight: { xs: "24px", md: "32px" },
            fontFamily: "Sora, sans-serif",
            color: "#4F4F4F",
            mb: {md: "0px", xs: "24px"},
          }}
        >
          Tecnologia na essência, evolução com propósito
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: "16px", md: "120px" },
          pb: { xs: "24px", md: "80px" },
          gap: { xs: "24px", md: 8 },
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            order: { xs: 2, md: 1 },
          }}
        >
          <img
            src="./about-us.svg"
            alt="Sobre nós"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "16px",
            }}
          />
        </Box>

        <Box
          sx={{
            maxWidth: { xs: "100%", md: "50%" },
            textAlign: { xs: "center", md: "left" },
            order: { xs: 1, md: 2 },
          }}
        >
          <Typography
            sx={{
              background:
                "linear-gradient(90deg, #8270FF 0%, #411EFE 50%, #E363EB 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "16px", md: "22px" },
              fontWeight: 400,
              lineHeight: { xs: "24px", md: "28px" },
              fontFamily: "Sora, sans-serif",
              textAlign: { xs: "left", md: "inherit" },
              mb: { xs: "16px", md: "24px" },
            }}
          >
            Somos tecnologia na essência. Nascemos conectados e seguimos
            evoluindo com propósito.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "18px" },
              fontWeight: 400,
              lineHeight: { xs: "20px", md: "28px" },
              fontFamily: "Sora, sans-serif",
              color: "#4F4F4F",
              textAlign: { xs: "left", md: "inherit" },
              mb: { xs: "16px", md: "24px" },
            }}
          >
            A Ponte Tech surgiu em 2020, com uma missão clara: conectar empresas
            a talentos de tecnologia que fazem a diferença.
            <br />
            <br />
            Começamos com foco em desenvolvimento de software e, com o tempo,
            entendemos que o mercado precisava de algo maior — uma ponte entre
            os desafios das empresas e profissionais especializados prontos para
            resolvê-los.
            <br />
            <br />
            Hoje, entregamos squads e talentos por meio de outsourcing e
            hunting, com agilidade, experiência e foco em resultado.
            <br />
            <br />
            Somos parceiros do ciclo completo de desenvolvimento. Do
            planejamento à entrega, nosso time está pronto para acelerar metas,
            transformar ideias em soluções e gerar impacto real através da
            tecnologia.
          </Typography>
          <Box
            sx={{
              mx: { xs: "auto", md: "0" },
              display: { xs: "flex", md: "block" },
              justifyContent: { xs: "center", md: "inherit" },
            }}
          >
            <ContainedPurpleButton>Fale conosco →</ContainedPurpleButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
