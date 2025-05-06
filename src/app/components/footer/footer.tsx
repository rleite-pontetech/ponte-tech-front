import { Box, Typography, Link, Divider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F9F5FF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: "40px",
        px: { xs: "16px", md: "120px" },
        gap: "24px",
      }}
    >
      {/* Conteúdo Principal */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "100%",
          gap: { xs: "24px", md: "0" },
          background: "transparent",
        }}
      >
        {/* Logo e Descrição */}
        <Box sx={{ flex: 1, background: "transparent" }}>
          <img
            src="./logo.svg"
            alt="Ponte Tech Logo"
            style={{ width: "150px", background: "transparent" }}
          />
          <Typography
            sx={{
              background: "transparent",
              fontSize: "14px",
              fontWeight: 400,
              fontFamily: "Sora, sans-serif",
              color: "#4F4F4F",
              mt: "16px",
            }}
          >
            Conectando empresas a talentos de tecnologia que fazem a diferença.
          </Typography>
          <Box
            sx={{
              background: "transparent",
              display: "flex",
              gap: "16px",
              mt: "16px",
            }}
          >
            <FacebookIcon
              sx={{
                color: "#7F56D9",
                cursor: "pointer",
                background: "transparent",
              }}
            />
            <InstagramIcon
              sx={{
                color: "#7F56D9",
                cursor: "pointer",
                background: "transparent",
              }}
            />
            <LinkedInIcon
              sx={{
                color: "#7F56D9",
                cursor: "pointer",
                background: "transparent",
              }}
            />
          </Box>
        </Box>

        {/* Navegação */}
        <Box sx={{ flex: 1, background: "transparent" }}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              fontFamily: "Sora, sans-serif",
              background: "transparent",
              color: "#000000",
              mb: "16px",
            }}
          >
            Navegação
          </Typography>
          <Box
            sx={{
              display: "flex",
              background: "transparent",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <Link
              href="#"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                background: "transparent",
                fontFamily: "Sora, sans-serif",
                color: "#4F4F4F",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Home
            </Link>
            <Link
              href="#"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                background: "transparent",
                fontFamily: "Sora, sans-serif",
                color: "#4F4F4F",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Quem somos
            </Link>
            <Link
              href="#"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                background: "transparent",
                fontFamily: "Sora, sans-serif",
                color: "#4F4F4F",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Vagas
            </Link>
            <Link
              href="#"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                background: "transparent",
                fontFamily: "Sora, sans-serif",
                color: "#4F4F4F",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Clientes
            </Link>
          </Box>
        </Box>

        {/* Contato */}
        <Box sx={{ flex: 1, background: "transparent" }}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              background: "transparent",
              fontFamily: "Sora, sans-serif",
              color: "#000000",
              mb: "16px",
            }}
          >
            Contato
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              background: "transparent",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                background: "transparent",
                gap: "8px",
              }}
            >
              <EmailIcon sx={{ color: "#7F56D9", background: "transparent" }} />
              <Typography
                sx={{
                  fontSize: "14px",
                  background: "transparent",
                  fontWeight: 400,
                  fontFamily: "Sora, sans-serif",
                  color: "#4F4F4F",
                }}
              >
                contato@pontetech.com.br
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                background: "transparent",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <PhoneIcon sx={{ color: "#7F56D9", background: "transparent" }} />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  background: "transparent",
                  fontFamily: "Sora, sans-serif",
                  color: "#4F4F4F",
                }}
              >
                (11) 99999-9999
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                background: "transparent",
                gap: "8px",
              }}
            >
              <LocationOnIcon
                sx={{ color: "#7F56D9", background: "transparent" }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  background: "transparent",
                  fontFamily: "Sora, sans-serif",
                  color: "#4F4F4F",
                }}
              >
                São Paulo, SP
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Rodapé */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          background: "transparent",
          pt: "16px",
        }}
      >
        <Divider sx={{mb: 2, width: {md: "auto", xs: "95%"}}}/>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            background: "transparent",
            fontFamily: "Sora, sans-serif",
            color: "#4F4F4F",
          }}
        >
          © 2025 Ponte Tech. Todos os direitos reservados.
        </Typography>
      </Box>
    </Box>
  );
}
