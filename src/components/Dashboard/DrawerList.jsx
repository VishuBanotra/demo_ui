import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box, Typography } from "@mui/material";

// Assets
import Logo from "../../assets/Common/Logo.svg";

// Mock Data
import { linkData_1, linkData_2 } from "../../Consts.js";

const TypographyStyling = {
  color: "#D1D5DB",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "17px",
  margin: "0 17px",
};

export const DrawerList = (
  <div>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "64px",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "182px",
          height: "36px",
        }}
        component={"img"}
        src={Logo}
        alt="Logo"
      />
    </Box>

    <Box sx={{ margin: "0 20px" }} component={"div"}>
      <Typography sx={{ ...TypographyStyling, marginTop: "10px" }}>
        APPS
      </Typography>
      <List>
        {linkData_1.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={item.icon} alt="icon" />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: "#9CA3AF",
                  fontWeight: 600,
                  fontSize: "14px",
                  fontFamily: "Inter",
                }}
                primary={item.label}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Typography sx={{ ...TypographyStyling, marginTop: "20px" }}>
        PAGES
      </Typography>

      <List>
        {linkData_2.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={item.icon} alt="icon" />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: "#9CA3AF",
                  fontWeight: 600,
                  fontSize: "14px",
                  fontFamily: "Inter",
                }}
                primary={item.label}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  </div>
);
