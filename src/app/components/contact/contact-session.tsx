import {Box, Typography, TextField} from "@mui/material";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import PhoneIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOnOutlined";
import ContainedPurpleButton from "../buttons/contened-purple";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

export default function ContactSession() {
    return (
        <Box sx={{backgroundColor: "#7F56D9"}}>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: {xs: "column", md: "row"},
                    alignItems: "center",
                    justifyContent: "space-between",
                    py: {xs: "40px", md: "80px"},
                    mt: {xs: "40px", md: "80px"},
                    maxWidth: "90vw",
                    mx: "auto",
                    gap: {xs: "40px", md: "60px"},
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
                            fontSize: {xs: "24px", md: "28px"},
                            fontWeight: 700,
                            lineHeight: {xs: "32px", md: "40px"},
                            fontFamily: "Sora, sans-serif",
                            background: "transparent",
                        }}
                    >
                        Pronto para transformar sua equipe de tecnologia?
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: {xs: "16px", md: "18px"},
                            fontWeight: 400,
                            lineHeight: {xs: "24px", md: "32px"},
                            fontFamily: "Sora, sans-serif",
                            background: "transparent",
                            width: {xs: "100%", md: "80%"},
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
                            mt: {xs: 0, md: 2},
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
                                <EmailIcon sx={{background: "transparent", fontSize: '28px'}}/>
                            </Box>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    background: "transparent",
                                    fontWeight: 400,
                                    fontFamily: "Sora, sans-serif",
                                }}
                            >
                                Email <br />
                                <Box
                                    component="a"
                                    href="mailto:contato@ponte-tech.com.br"
                                    sx={{
                                        color: "inherit",
                                        textDecoration: "none",
                                        "&:hover": {
                                            textDecoration: "underline",
                                        },
                                    }}
                                >
                                    contato@ponte-tech.com.br
                                </Box>
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
                                <PhoneIcon sx={{background: "transparent", fontSize: '28px'}}/>
                            </Box>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    background: "transparent",
                                    fontWeight: 400,
                                    fontFamily: "Sora, sans-serif",
                                }}
                            >
                                Telefone <br />
                                <Box
                                    component="a"
                                    href="tel:+5511915788441"
                                    sx={{
                                        color: "inherit",
                                        textDecoration: "none",
                                        "&:hover": {
                                            textDecoration: "underline",
                                        },
                                    }}
                                >
                                    (11) 91578-8441
                                </Box>
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
                                <LocationOnIcon sx={{background: "transparent", fontSize: '28px'}}/>
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
                        width: "100%",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {xs: "20px", md: "24px"},
                            fontWeight: 700,
                            lineHeight: {xs: "28px", md: "32px"},
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
                            gap: "18px",
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
                                gap: "18px",
                                flexDirection: {xs: "column", md: "row"},
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
                                    fontSize: "18px",
                                }}
                            />
                        </ContainedPurpleButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
