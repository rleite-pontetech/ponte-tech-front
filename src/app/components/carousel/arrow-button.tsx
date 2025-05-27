import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { darken } from "@mui/system";
interface ArrowButtonProps {
  direction: "left" | "right";
  onClick?: () => void;
  icon: React.ReactNode;
}

export const ArrowButton = ({ direction, onClick, icon }: ArrowButtonProps) => (
  <IconButton
    onClick={onClick}
    size="small"
    sx={(theme) => ({

    
    borderRadius: "4px",

      zIndex: 1,
      backgroundColor: "primary.main",
        color: "white",
      boxShadow: 2,
 
      "&:hover": {
        backgroundColor: darken(theme.palette.primary.main, 0.15),
      },
    })}
  >
    {icon}
  </IconButton>
);
export const NextArrow = (props: any) => (
  <ArrowButton
    direction="right"
    onClick={props.onClick}
    icon={<ArrowForwardIosIcon />}
  />
);

export const PrevArrow = (props: any) => (
  <ArrowButton
    direction="left"
    onClick={props.onClick}
    icon={<ArrowBackIosNewIcon />}
  />
);
