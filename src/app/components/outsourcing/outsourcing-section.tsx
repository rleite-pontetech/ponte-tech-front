import { Box, Typography } from "@mui/material";
import SmallInfoCard from "../cards/small-info";
import ContainedPurpleButton from "../buttons/contened-purple";

export default function OutsourcingSection() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: { xs: "auto", md: "100vh" },
        px: { xs: "16px", md: "120px" },
        pb: { xs: "40px", md: "80px" },
        gap: { xs: "40px", md: "20px" },
        mb: { xs: "40px", md: "0" }, // Adiciona margem inferior no mobile
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
          Outsourcing
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 400,
            lineHeight: { xs: "18px", md: "32px" },
            fontFamily: "Sora, sans-serif",
            color: "#4F4F4F",
            width: "100%",
          }}
        >
          Integramos o conhecimento e a eficiência dos profissionais
          <br /> para transformar desafios em oportunidades estratégicas
        </Typography>
      </Box>

      {/* Cards e Imagem */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: "24px", md: "40px" },
          mt: 2,
        }}
      >
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          alignItems: "left",
        }}>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: 400,
              lineHeight: { xs: "20px", md: "28px" },
              fontFamily: "Sora, sans-serif",
              color: "#4F4F4F",
              maxWidth: "800px",
              mx: "auto",
              textAlign: "left",
            }}
          >
            Provemos especialistas para o ecossistema de desenvolvimento de
            software. Através do modelo body shop, alocamos profissionais em
            projetos robustos, que demandam soluções ágeis e eficazes para
            nossos clientes.
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: "16px", md: "24px" },
              width: "100%",
              mt: 4,
            }}
          >
            <SmallInfoCard
              image="flexibilizy.svg"
              title="Flexibilização"
              description="Prioridades adaptáveis e resposta ágil a mudanças constantes."
            />
            <SmallInfoCard
              image="visibility.svg"
              title="Visibilidade"
              description="Interação constante com visibilidade clara das entregas."
            />
            <SmallInfoCard
              image="knowledge.svg"
              title="Conhecimento"
              description="Profissionais prontos para resolver desafios reais com eficiência."
              imageBg="rgba(227, 99, 235, 0.1)"
            />
            <SmallInfoCard
              image="strategy.svg"
              title="Estratégia"
              description="Adaptabilidade com foco nas necessidades estratégicas do cliente."
              imageBg="rgba(227, 99, 235, 0.1)"
            />
          </Box>
        </Box>

        <Box
          sx={{
            maxWidth: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
            order: { xs: 2, md: 1 },
          }}
        >
          <img
            src="./outsourcing-robot.svg"
            alt="Outsourcing Robot"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Box>

      {/* Botão */}
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-start" },
          width: "100%",
        }}
      >
        <ContainedPurpleButton>Fale conosco →</ContainedPurpleButton>
      </Box>
    </Box>
  );
}
