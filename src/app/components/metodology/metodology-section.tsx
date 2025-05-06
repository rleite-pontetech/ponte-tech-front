import { Box, Typography } from "@mui/material";
import SmallInfoCard from "../cards/small-info";

export default function MethodologySection() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: { xs: "auto", md: "60vh" },
        px: { xs: "16px", md: "120px" },
        pb: { xs: "40px", md: "80px" },
        gap: { xs: "40px", md: "80px" },
        mb: { xs: "40px", md: "0" }, 
      }}
    >
      {/* Título e Subtítulo */}
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
          Metodologia H2T
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 400,
            lineHeight: { xs: "24px", md: "32px" },
            fontFamily: "Sora, sans-serif",
            color: "#4F4F4F",
            mb: {xs: "0px", md: "24px"},
          }}
        >
          Potencialize o crescimento do seu negócio com a nossa experiência
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr 1fr" },
          gap: { xs: "16px", md: "24px" },
          width: "100%",
        }}
      >
        <SmallInfoCard
          invertImageOrder
          image="./smart-proccess.svg"
          title="Processo inteligente de recrutamento e seleção"
          description="Atraímos e selecionamos candidatos altamente capacitados com qualidade e precisão."
        />
        <SmallInfoCard
          invertImageOrder
          image="./trophy.svg"
          title="Experiência consolidada"
          description="Validamos técnica e comportamento com histórico de entregas bem-sucedidas."
        />
        <SmallInfoCard
          invertImageOrder
          image="./tech-fit.svg"
          title="FIT técnico e cultural com o cliente"
          description="Integração produtiva com valores e expectativas alinhadas."
        />
        <SmallInfoCard
          invertImageOrder
          image="./sync.svg"
          title="Envolvimento do início ao fim do projeto"
          description="Desde concepção até manutenção — cobertura completa do ciclo de vida do software."
        />
      </Box>
    </Box>
  );
}
