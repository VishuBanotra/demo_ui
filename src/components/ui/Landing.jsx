import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";
import Hero_Img from "../../assets/Home/Hero_Img.jpeg";
import Robot from "../../assets/Home/Robot.svg";
import Meeting_Icon from "../../assets/Home/Meeting_Icon.svg";

const Landing = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 84px)",
        backgroundImage: `url(${Hero_Img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: "1009px",
          width: "1009px",
          borderRadius: "100%",
          backgroundColor: "#3D496087",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            height: "795px",
            width: "795px",
            borderRadius: "100%",
            backgroundColor: "#0F1B31B2",
          }}
        >
          <Box
            sx={{
              height: "161px",
              width: "161px",
              borderRadius: "100%",
              backgroundColor: "#FF5E00",
              position: "absolute",
              top: "273px",
              left: "100%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component={"img"}
              src={Meeting_Icon}
              sx={{
                height: "24px",
                width: "24px",
              }}
            />
            <Box
              sx={{
                width: "127px",
                height: "60px",
                marginTop: "5px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Mulish",
                  fontWeight: "800",
                  fontSize: "15px",
                  lineHeight: "20px",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                Book a 30 minutes meeting <Box component={"span"}> with us</Box>
              </Typography>
            </Box>
          </Box>

          <Box
            component={"img"}
            src={Robot}
            sx={{
              width: "129px",
              height: "192px",
              position: "absolute",
              top: "212px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          <Box
            sx={{
              width: "598px",
              height: "190px",
              position: "absolute",
              left: "50%",
              top: "432px",
              transform: "translateX(-50%)",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                color: "#FFFFFF",
                fontFamily: "Mulish",
                fontWeight: "800",
                lineHeight: "95.12px",
                fontSize: "82px",
              }}
            >
              Automate your pre-sales
            </Typography>
          </Box>

          <Box
            sx={{
              width: "420px",
              height: "27px",
              position: "absolute",
              left: "50%",
              top: "656px",
              transform: "translateX(-50%)",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                color: "#FFFFFF",
                fontFamily: "Mulish",
                fontWeight: "400",
                lineHeight: "26.8px",
                fontSize: "20px",
              }}
            >
              <Box
                sx={{
                  color: "#FF4D00",
                }}
                component="span"
              >
                Recently received{" "}
                <Link
                  href="https://finance.yahoo.com/news/vodex-powers-2-million-seed-142500440.html"
                  target="blank"
                  sx={{
                    color: "#FF4D00",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  $2 million
                </Link>{" "}
              </Box>
              in seed funding.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "270px",
              height: "40px",
              position: "absolute",
              left: "50%",
              top: "743px",
              transform: "translateX(-50%)",
            }}
          >
            <Button
              sx={{
                borderRadius: "32px",
                padding: "8px 32px",
                backgroundColor: "#FF4D00",
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Poppins",
                lineHeight: "24px",
                color: "#FFFFFF",
                ":hover": {
                  backgroundColor: "#FF8744",
                },
              }}
            >
              START A CONVERSATION
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
