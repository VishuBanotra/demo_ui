import React from "react";

import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

const CustomCard = ({ mainIcon, smallIcon, label, number, stats }) => {
  return (
    <Box
      elevation={0}
      sx={{
        height: { xs: "100px", md: "120px" },
        width: { xs: "160px", md: "375px" },
        borderRadius: "6px",
        border: "1px solid #374151",
        backgroundColor: "#1F2937",
        padding: { xs: "0px", md: "20px" },
      }}
    >
      <CardContent
        sx={{
          width: { xs: "100%", md: "240px" },
          height: { xs: "50px", md: "65px" },
          margin: { xs: "auto", md: "0" },
        }}
      >
        <Stack direction={"row"} gap={{ xs: 1, sm: 2 }}>
          <Box src={mainIcon} component={"img"} alt="" />

          <Box>
            <Box
              sx={{
                fontSize: "24px",
                color: "#F3F4F6",
                fontWeight: 600,
                lineHeight: "32px",
              }}
              component={"span"}
            >
              {number}{" "}
              <Typography
                sx={{
                  display: { xs: "none", md: "inline" },
                  color: "#9CA3AF",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "17px",
                }}
                component={"span"}
              >
                {label}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img src={smallIcon} alt="" />
              <Box
                sx={
                  stats > 0
                    ? { fontWeight: 600, color: "#10B981" }
                    : { color: "#EF4444" }
                }
                component="span"
              >
                {stats}{" "}
                <Box
                  sx={{
                    display: { xs: "none", md: "inline" },
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "17px",
                  }}
                  component={"span"}
                >
                  this month
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Box>
  );
};

export default CustomCard;
