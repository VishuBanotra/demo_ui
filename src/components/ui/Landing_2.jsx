import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/Common/Logo.svg";
import Left from "../../assets/Home_2/Left.svg";
import Right from "../../assets/Home_2/Right.svg";
import Mobile from "../../assets/Home_2/Mobile.svg";
import Robot_2 from "../../assets/Home_2/Robot_2.svg";
import Frequency from "../../assets/Home_2/Frequency.svg";

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
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "120px",
        paddingBottom: "60px",
      }}
    >
      {/* Logo */}
      <Box sx={{ height: "86px", width: "429px", marginBottom: "60px" }}>
        <Box component="img" src={Logo} sx={{ width: "100%" }} />
      </Box>

      {/* Main Heading */}
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
            lineHeight: "86px",
            fontSize: "64px",
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

      {/* Subheading */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1204px",
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
          Connect with 10,000 customers in 1 hour with real-time data insights,
          revolutionizing business outreach with AI-human synergy.
        </Typography>
      </Box>

      {/* Buttons */}
      <Box sx={{ display: "flex", gap: "15px", marginBottom: "60px" }}>
        <Button sx={ButtonStyling}>VISIT OUR WEBSITE</Button>
        <Button sx={ButtonStyling}>BOOK A MEETING</Button>
      </Box>

      {/* Mobile Form */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1400px",
        }}
      >
        <Typography
          component={"h1"}
          sx={{
            position: "absolute",
            fontFamily: "Mulish",
            fontWeight: 800,
            fontSize: "167px",
            top: "892px",
            color: "#FF4D00",
          }}
        >
          Sales
        </Typography>
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
        <Typography
          component={"h1"}
          sx={{
            position: "absolute",
            fontFamily: "Mulish",
            fontWeight: 800,
            fontSize: "167px",
            top: "892px",
            right: "200px",
            backgroundImage: "linear-gradient(90deg, #FF4D00 0%, #FFA06B 100%)",
            backgroundClip: "text",
            textFillColor: "transparent",
            display: "inline",
          }}
        >
          Agent
        </Typography>
      </Box>

      {/* Decorative Images */}
      <Box
        component="img"
        src={Left}
        sx={{
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
          position: "absolute",
          top: "996px",
          right: 0,
          width: "auto",
          height: "auto",
        }}
      />
    </Box>
  );
};

export default Landing_2;
