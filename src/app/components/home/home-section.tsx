import { Box, Typography } from "@mui/material";
import ContainedPurpleButton from "../buttons/contened-purple";
import OutlinedWhiteButton from "../buttons/outlined-white";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function HomeSection() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(94.63deg, rgba(130, 112, 255, 0.08) 17.19%, rgba(65, 30, 254, 0.08) 58.6%, rgba(227, 99, 235, 0.08) 100%)",
        width: "100%",
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: "24px", md: "120px" },
        py: { xs: "16px", md: "0" },
        position: "relative",
      }}
    >
      {/* Texto e Botões */}
      <Box
        sx={{
          bgcolor: "transparent",
          maxWidth: { xs: "100%", md: "50%" },
          textAlign: { xs: "center", md: "left" },
          mt: { xs: "98px", md: "0" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            bgcolor: "transparent",
            fontSize: { xs: "32px", md: "64px" },
            textAlign: "left",
            fontWeight: 700,
            lineHeight: { xs: "40px", md: "56px" },
            fontFamily: "Sora, sans-serif",
            color: "#000000",
          }}
        >
          Construímos, <br />
          desenvolvemos, <br />
          <Typography
            component="span"
            sx={{
              background:
                "linear-gradient(90deg, #8270FF 0%, #411EFE 50%, #E363EB 100%)",
              WebkitBackgroundClip: "text",
              textAlign: "left",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "32px", md: "64px" },
              fontWeight: 700,
              lineHeight: { xs: "40px", md: "66px" },
              fontFamily: "Sora, sans-serif",
            }}
          >
            gerenciamos e <br />
            impulsionamos
          </Typography>
        </Typography>
        <Typography
          sx={{
            bgcolor: "transparent",
            maxWidth: "100%",
            fontSize: { xs: "14px", md: "18px" },
            textAlign: "left",
            fontWeight: 500,
            lineHeight: { xs: "20px", md: "28px" },
            fontFamily: "Sora, sans-serif",
            color: "#4F4F4F",
            mt: "16px",
          }}
        >
          Oferecemos outsourcing de profissionais de TI para transformar
          desafios complexos em soluções eficientes, produtivas e de alta
          qualidade.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "16px",
            bgcolor: "transparent",
            mt: "24px",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <ContainedPurpleButton>
            Fale conosco <ArrowRightAltIcon sx={{ bgcolor: "transparent" }} />
          </ContainedPurpleButton>
          <OutlinedWhiteButton isTransparent>Ver vagas</OutlinedWhiteButton>
        </Box>
      </Box>

      <Box
        sx={{
          position: { xs: "static", md: "absolute" },
          bottom: { xs: "auto", md: 0 },
          right: { xs: "auto", md: 0 },
          bgcolor: "transparent",
          maxWidth: { xs: "100%", md: "50%" },
          width: { xs: "100%", md: "auto" },
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
          mt: { xs: 4, md: 0 },
          mb: { xs: "-15px", md: 0 },
          ml: { xs: 6, md: 0 },
          zIndex: 1,
        }}
      >
        <img
          src="./robot.png"
          alt="Robô"
          style={{
            width: "100%",
            height: "auto",
            backgroundColor: "transparent",
          }}
        />
      </Box>
    </Box>
  );
}
