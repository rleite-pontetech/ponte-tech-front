
import { WhatsApp } from "@mui/icons-material";
import { Box} from "@mui/material";


export default function WhatsAppButton() {
    return (
        <Box sx={{
            height: 65,
            width: 65,
            borderRadius: 100,
            position: "fixed",
            zIndex: 1000,
            bottom: 20,
            right: 20,
        }}>
            <WhatsApp sx={{
                borderRadius: 100,
                p: 1,
                bgcolor: "#8270FF",
                width: "100%",
                height: "100%",
                color: "#FFFFFF",
                "&:hover": {
                    background: "#6F60E0",
                    cursor: "pointer",
                },
            }}/>
        </Box>
    )
}