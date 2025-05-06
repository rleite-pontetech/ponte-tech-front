import { Box, Typography, TextField, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import PhoneIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOnOutlined";
import ContainedPurpleButton from "../buttons/contened-purple";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

export default function ContactSession() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: { xs: "auto", md: "100vh" },
        px: { xs: "16px", md: "120px" },
        py: { xs: "40px", md: "80px" },
        gap: { xs: "40px", md: "40px" },
        backgroundColor: "#7F56D9",
      }}
    >
      {/* Informações de Contato */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          color: "#FFFFFF",
          background: "transparent",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "28px" },
            fontWeight: 700,
            lineHeight: { xs: "32px", md: "40px" },
            fontFamily: "Sora, sans-serif",
            background: "transparent",
          }}
        >
          Pronto para transformar sua equipe de tecnologia?
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 400,
            lineHeight: { xs: "24px", md: "32px" },
            fontFamily: "Sora, sans-serif",
            background: "transparent",
            width: { xs: "100%", md: "80%" },
          }}
        >
          Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua
          empresa a crescer com as melhores soluções em tecnologia.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            background: "transparent",
            mt: { xs: 0, md: 5 },
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              background: "transparent",
              fontWeight: 600,
              fontFamily: "Sora, sans-serif",
            }}
          >
            Informações de contato
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
            }}
          >
            <Box
              sx={{
                p: 0.2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                bgcolor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <EmailIcon sx={{ background: "transparent", fontSize: '28px' }} />
            </Box>
            <Typography
              sx={{
                fontSize: "14px",
                background: "transparent",
                fontWeight: 400,
                fontFamily: "Sora, sans-serif",
              }}
            >
              Email <br/>
              contato@pontetech.com.br
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
            }}
          >
            <Box
              sx={{
                p: 0.2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                bgcolor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <PhoneIcon sx={{ background: "transparent", fontSize: '28px' }} />
            </Box>
            <Typography
              sx={{
                fontSize: "14px",
                background: "transparent",
                fontWeight: 400,
                fontFamily: "Sora, sans-serif",
              }}
            >
                Telefone <br/>
              (11) 99999-9999
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
            }}
          >
            <Box
              sx={{
                p: 0.2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                bgcolor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <LocationOnIcon sx={{ background: "transparent", fontSize: '28px' }} />
            </Box>

            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                fontFamily: "Sora, sans-serif",
                background: "transparent",
              }}
            >
                Endereço <br/>
              São Paulo, SP
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Formulário de Contato */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          padding: "24px",
          width: {xs: "90%", md: "auto"},
          mr: {xs: 2, md: 0},
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "24px" },
            fontWeight: 700,
            lineHeight: { xs: "28px", md: "32px" },
            fontFamily: "Sora, sans-serif",
            mb: "16px",
          }}
        >
          Envie uma Mensagem
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <TextField
            label="Nome completo"
            variant="outlined"
            fullWidth
            size="small"
          />
          <Box
            sx={{
              display: "flex",
              gap: "16px",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <TextField
              label="E-mail"
              variant="outlined"
              fullWidth
              size="small"
            />
            <TextField
              label="Telefone"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Box>
          <TextField
            label="Empresa"
            variant="outlined"
            fullWidth
            size="small"
          />
          <TextField
            label="Mensagem"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
          />
          <ContainedPurpleButton width="100%">
            Enviar mensagem{" "}
            <SendOutlinedIcon
              sx={{
                color: "white",
                background: "transparent",
                fontSize: "16px",
              }}
            />
          </ContainedPurpleButton>
        </Box>
      </Box>
    </Box>
  );
}
