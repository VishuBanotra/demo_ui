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
        background: `url(${Hero_Img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Outer Circle */}
      <Box
        sx={{
          height: { xs: "100vh", md: "870px", lg: "1009px" },
          width: { xs: "100%", md: "870px", lg: "1009px" },
          borderRadius: { md: "100%" },
          backgroundColor: { xs: "rgba(0, 0, 0, 0.5)", md: "#3D496087" },
          display: { md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Inner Circle */}
        <Box
          sx={{
            padding: "0 10px",
            height: { xs: "100%", md: "650px", lg: "795px" },
            width: { xs: "100%", md: "650px", lg: "795px" },
            borderRadius: { md: "100%" },
            backgroundColor: { md: "#0F1B31B2" },
          }}
        >
          {/* Side Circle */}
          <div data-aos="fade-up">
            <Box
              sx={{
                height: "161px",
                width: "161px",
                borderRadius: "100%",
                backgroundColor: "#FF5E00",
                position: "absolute",
                top: {
                  xs: "19px",
                  sm: "23px",
                  md: "15px",
                  lg: "120px",
                },
                left: {
                  xs: "84%",
                  sm: "91%",
                  md: "85%",
                  lg: "90%",
                  xl: "110%",
                },
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
                  Book a 30 minutes meeting{" "}
                  <Box component={"span"}> with us</Box>
                </Typography>
              </Box>
            </Box>
          </div>

          {/* Robot Icon */}
          <div data-aos="fade-up">
            <Box
              component={"img"}
              src={Robot}
              sx={{
                width: { xs: "100px", lg: "129px" },
                height: { xs: "192px", lg: "192px" },
                position: "absolute",
                top: { xs: "140px", md: "40px", lg: "112px" },
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </div>

          <div data-aos="fade-down">
            <Box
              sx={{
                width: { xs: "100%", md: "598px" },
                height: { md: "190px" },
                position: "absolute",
                left: "50%",
                top: { xs: "320px", md: "245px", lg: "325px" },
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
                  lineHeight: { md: "95.12px" },
                  fontSize: { xs: "51px", sm: "65px", md: "82px" },
                }}
              >
                Automate your pre-sales
              </Typography>
            </Box>
          </div>

          <Box
            sx={{
              width: { xs: "380px", md: "420px" },
              height: "27px",
              position: "absolute",
              left: "50%",
              top: { xs: "460px", sm: "500px", md: "590px", lg: "656px" },
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
              top: { xs: "570px", sm: "600px", md: "660px", lg: "743px" },
              transform: "translateX(-50%)",
            }}
          >
            <Button
              disableElevation
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
