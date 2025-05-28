import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, CardContent } from "@mui/material";
import { useRef } from "react";
import { NextArrow, PrevArrow } from "./arrow-button";
interface VideoItem {
  title: string;
  description: string;
  url: string;
  kind: string;
}
interface CarouselProps {
  items: VideoItem[];
}
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  swipeToSlide: true,
  slidesToScroll: 1,

  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 2 } },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "15px",
      },
    },
  ],
};

export const Carousel = ({ items }: CarouselProps) => {
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };
  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          width: "100%",
          mb:2
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
          Conheça mais sobre a Ponte Tech
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 400,
              fontFamily: "Sora, sans-serif",
              color: "#4F4F4F",
              maxWidth: "500px",
            }}
          >
            Assista aos nossos vídeos e conheça de perto nossa cultura, projetos
            e propósito.
          </Typography>
        </Box>
      </Box>

      <Slider
        ref={(slider) => {
          sliderRef.current = slider;
        }}
        {...settings}
        appendDots={(dots) => (
          <Box
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={1}
          >
            <PrevArrow onClick={previous} />
            <ul>{dots}</ul>
            <NextArrow onClick={next} />
          </Box>
        )}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              px: "4px",
              "&hover": {
                transform: "scale(1.05)",
                transition: "transform 0.3s ease-in-out",
                cursor: "pointer",
              },
            }}
          >
            <Card>
              {item.kind === "video" && (
                <video src={item.url} controls style={{ width: "100%" }} />
              )}
              {item.kind === "image" && (
                <img
                  src={item.url}
                  alt={item.title}
                  style={{ width: "100%" }}
                />
              )}
              {item.kind === "youtube-embed" && (
                <iframe
                  width="100%"
                  height="200"
                  src={item.url.replace("watch?v=", "embed/")}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
              <CardContent>
                <Typography
                  variant="h6"
                  color="black"
                  sx={{
                    fontSize: { xs: "16px", md: "20px" },
                    lineHeight: { xs: "20px", md: "28px" },
                    fontWeight: 600,
                    fontFamily: "Sora, sans-serif",
                    color: "#000",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="black"
                  sx={{
                    fontSize: { xs: "12px", md: "14px" },
                    lineHeight: { xs: "16px", md: "24px" },
                    fontWeight: 300,
                    fontFamily: "Sora, sans-serif",
                    color: "#292929",
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
