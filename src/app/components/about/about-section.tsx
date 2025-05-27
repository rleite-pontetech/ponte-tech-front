import { Box, Typography } from "@mui/material";
import ContainedPurpleButton from "../buttons/contened-purple";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { scrollToElement } from "@/app/utils/scrollToElement";
import { Carousel } from "../carousel/carousel";

export default function AboutSection() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        maxWidth: "90vw",
        mx: "auto",
        gap: { xs: "40px", md: "60px" },
        pt: { xs: "40px", md: "80px" },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          width: "100%",
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
          alignItems: "start",
          justifyContent: "space-between",
          gap: { xs: "24px", md: 8 },
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "50%" },
            display: "flex",
            order: { xs: 2, md: 1 },
          }}
        >
          <img
            src="/img/about-us.png"
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
            }}
          >
            <ContainedPurpleButton
              height={42}
              onClick={() => scrollToElement("contact")}
            >
              Fale conosco <ArrowRightAltIcon sx={{ bgcolor: "transparent" }} />
            </ContainedPurpleButton>
          </Box>
        </Box>
      </Box>
      <Carousel
        items={[
          {
            title: "Nosso Propósito",
            description: "Saiba como criamos impacto com tecnologia.",
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            kind: "youtube-embed",
          },
          {
            title: "Nossa cultura",
            description: "Conheça o ambiente de trabalho",
            url: "https://www.youtube.com/watch?v=BBGEG21CGo0",
            kind: "youtube-embed",
          },
          {
            title: "Nossos Projetos",
            description: "Veja como transformamos ideias em soluções.",
            url: "https://www.youtube.com/watch?v=x7R7H4-_TSc",
            kind: "youtube-embed",
          },
          {
            title: "Conectando Pessoas à Tecnologia",
            description: "Transformando talentos em soluções.",
            url: "https://www.youtube.com/watch?v=TRPBY_lxJfE",
            kind: "youtube-embed",
          },
        ]}
      />
    </Box>
  );
}
