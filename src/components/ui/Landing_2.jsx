import { Link } from "react-router-dom";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Logo from "../../assets/Common/Logo.svg";
import Left from "../../assets/Home_2/Left.svg";
import Right from "../../assets/Home_2/Right.svg";
import Mobile from "../../assets/Home_2/Mobile.svg";
import Robot_2 from "../../assets/Home_2/Robot_2.svg";
import Frequency from "../../assets/Home_2/Frequency.svg";

import Aos from "aos";
import "aos/dist/aos.css";

const ButtonStyling = {
  padding: "8px 12px",
  backgroundColor: "#FF4D00",
  border: "1px solid #FF8744",
  borderRadius: "7px",
  width: "217px",
  height: "44px",
  font: "Mulish",
  fontWeight: 700,
  fontSize: "14px",
  color: "#FFFFFF",
  lineHeight: "17.56px",
  ":hover": {
    backgroundColor: "#FF8744",
  },
};

const Landing_2 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "120px 10px 60px 10px",
      }}
    >
      {/*Top Logo */}
      <div data-aos="fade-up">
        <Box
          sx={{
            height: "86px",
            width: { xs: "339px", md: "429px" },
            marginBottom: { xs: "40px", sm: "60px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={Logo}
            sx={{ width: { xs: "90%", sm: "100%" } }}
          />
        </Box>
      </div>

      {/* Main Heading */}
      <div data-aos="fade-up">
        <Box
          sx={{
            width: "100%",
            maxWidth: "1225px",
            marginBottom: "60px",
            textAlign: "center",
          }}
        >
          <Typography
            component="h3"
            sx={{
              fontWeight: 800,
              fontFamily: "Mulish",
              lineHeight: { sm: "86px" },
              fontSize: { xs: "50px", sm: "64px" },
            }}
          >
            Get 2x Revenue With{" "}
            <Box
              sx={{
                backgroundImage:
                  "linear-gradient(90deg, #FF4D00 0%, #FFA06B 100%)",
                backgroundClip: "text",
                textFillColor: "transparent",
                display: "inline",
              }}
              component="span"
            >
              Gen A.I. Powered Sales Agent{" "}
            </Box>
            To Your Customers
          </Typography>
        </Box>
      </div>

      {/* Subheading */}
      <div data-aos="fade-up">
        <Box
          sx={{
            width: "95%",
            maxWidth: "1204px",
            margin: "auto",
            marginBottom: "60px",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Mulish",
              fontWeight: 800,
              fontSize: "24px",
              lineHeight: "36px",
              color: "#000000",
            }}
          >
            Connect with 10,000 customers in 1 hour with real-time data
            insights, revolutionizing business outreach with AI-human synergy.
          </Typography>
        </Box>
      </div>

      {/* Buttons */}
      <div data-aos="fade-up">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: "15px",
            marginBottom: "60px",
          }}
        >
          <Button sx={ButtonStyling}>VISIT OUR WEBSITE</Button>
          <Button sx={ButtonStyling}>BOOK A MEETING</Button>
        </Box>
      </div>

      {/* Mobile Form */}
      <div data-aos="fade-down">
        <Stack
          direction={{ xl: "row" }}
          justifyContent={"space-around"}
          alignItems={"center"}
          sx={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div data-aos="fade-left">
            <Typography
              component={"h1"}
              sx={{
                fontFamily: "Mulish",
                fontWeight: 800,
                fontSize: { xs: "127px", sm: "167px" },
                top: "892px",
                color: "#FF4D00",
              }}
            >
              Sales
            </Typography>
          </div>
          <Box>
            <Box
              sx={{
                width: "460px",
                height: "840px",
                margin: "auto",
                backgroundImage: `url(${Mobile})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "345px",
                  height: "730px",
                  position: "absolute",
                  borderRadius: "41px",
                  top: "23px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "block",
                      width: "297px",
                      height: "189px",
                      margin: "0 auto",
                      marginBottom: "33px",
                    }}
                    component={"img"}
                    src={Robot_2}
                  />
                  <Box
                    sx={{
                      display: "block",
                      width: "324.53px",
                      height: "26.94px",
                      margin: "0 auto",
                      marginBottom: "33px",
                    }}
                    component={"img"}
                    src={Frequency}
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Mulish",
                    fontWeight: 800,
                    fontSize: "24px",
                    textAlign: "center",
                    lineHeight: "36px",
                    marginBottom: "20px",
                  }}
                >
                  Talk to our voicebot
                </Typography>

                <form action="">
                  <Stack width={279} spacing={1}>
                    <TextField placeholder="Name" />
                    <TextField placeholder="Email" />
                    <TextField placeholder="Email" />
                  </Stack>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "43px",
                    }}
                  >
                    <Button
                      sx={{
                        width: "217px",
                        height: "44px",
                        padding: "8px 12px",
                        borderRadius: "7px",
                        border: "1px solid #FF8744",
                        backgroundColor: "#FF4D00",
                        fontFamily: "Mulish",
                        fontWeight: 700,
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#FFFFFF",
                        ":hover": {
                          backgroundColor: "#FF8744",
                        },
                      }}
                    >
                      Request a callback
                    </Button>
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
          <div data-aos="fade-right">
            <Typography
              component={"h1"}
              sx={{
                fontFamily: "Mulish",
                fontWeight: 800,
                fontSize: { xs: "127px", sm: "167px" },
                top: "892px",
                right: "200px",
                backgroundImage:
                  "linear-gradient(90deg, #FF4D00 0%, #FFA06B 100%)",
                backgroundClip: "text",
                textFillColor: "transparent",
                display: "inline",
              }}
            >
              Agent
            </Typography>
          </div>
        </Stack>
      </div>

      {/* Decorative Images */}
      <Box
        component="img"
        src={Left}
        sx={{
          display: { xs: "none", lg: "inline" },
          position: "absolute",
          top: "349px",
          left: 0,
          width: "auto",
          height: "auto",
        }}
      />
      <Box
        component="img"
        src={Right}
        sx={{
          display: { xs: "none", lg: "inline" },
          position: "absolute",
          top: "1150px",
          right: 0,
          width: "auto",
          height: "auto",
        }}
      />
      <DashboardLink />
    </Box>
  );
};

export default Landing_2;

const DashboardLink = () => {
  return (
    <div data-aos="fade-up">
      <Box
        sx={{
          margin: "150px 0",
          marginRight: "33px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          className="dashboard_link"
          style={{
            color: "#FFFFFF",
            backgroundColor: "#FF4D00",
            padding: "14px 60px",
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: "800",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            borderRadius: "6px",
            fontFamily: "Mulish",
          }}
          to={"/dashboard"}
        >
          Go to Dashboard {">"}
        </Link>
      </Box>
    </div>
  );
};
