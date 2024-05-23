import React from "react";

import { Box, Card, CardContent, Stack } from "@mui/material";

const CustomCard = ({ mainIcon, smallIcon, label, number, stats }) => {
  return (
    <Card
      elevation={0}
      sx={{
        height: "120px",
        width: "375px",
        marginTop: "16px",
        borderRadius: "6px",
        border: "1px solid #374151",
        backgroundColor: "#1F2937",
        padding: "20px",
      }}
    >
      <CardContent sx={{ width: "240px", height: "65px" }}>
        <Stack direction={"row"} gap={2} >
          <img src={mainIcon} alt="" />

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
              <Box
                sx={{ color: "#9CA3AF", fontSize: "14px", lineHeight: "17px" }}
                component={"span"}
              >
                {label}
              </Box>
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
                  sx={{ fontWeight: 400, fontSize: "14px", lineHeight: "17px" }}
                  component={"span"}
                >
                  this month
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
