import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import CircularBar from "./CircularBar.jsx";

const EmailSent = () => {
  return (
    <Box
      sx={{
        width: { xs: "90%", md: "90%", lg: "503px" },
        height: "400px",
        margin: { xs: "16px auto" },
        borderRadius: "8px",
        border: "1px solid #374151",
        padding: "20px",
      }}
    >
      <Stack direction={"column"} gap="10px">
        <Box>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "28px",
              color: "#F3F4F6",
              marginBottom: "5px",
            }}
          >
            Email Sent
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", lg: "463px" },
            height: "247px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularBar />
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "Inter",
              color: "#9CA3AF",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "17px",
              textAlign: "center",
            }}
          >
            Performance
          </Typography>
          <Typography
            variant="h4"
            sx={{
              marginTop: "3px",
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "28px",
              color: "#F3F4F6",
              textAlign: "center",
            }}
          >
            Average
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default EmailSent;
