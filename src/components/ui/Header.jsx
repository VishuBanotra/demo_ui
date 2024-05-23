import React from "react";

// Mui Components
import { AppBar, Box, Link, List, ListItem } from "@mui/material";

import { Toolbar } from "@mui/material";

// Svg
import Logo from "../../assets/Common/Logo.svg";

const Header = () => {
  const linkStyle = {
    fontFamily: "Poppins",
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "22px",
    letterSpacing: "-0.2px",
    textAlign: "left",
    textDecoration: "none",
    textWrap: "nowrap",
    color: "#000000",
    cursor: "pointer",
    padding: "8px",
    gap: "11px",
    ":hover": {
      transition: "all 0.2s ease-in-out",
      color: "#FF4D00",
    },
  };

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          bgcolor: "#FFFFFF",
          display: "flex",
          justifyContent: "space-between",
          height: "84px",
        }}
      >
        <Box
          component={"img"}
          src={Logo}
          sx={{ ml: "44px", my: "17px", width: "246px", height: "49px" }}
        />

        <Box>
          <List
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ListItem>
              <Link sx={linkStyle}>About</Link>
            </ListItem>
            <ListItem>
              <Link sx={linkStyle}>How It Works</Link>
            </ListItem>
            <ListItem>
              <Link sx={linkStyle}>Pricing</Link>
            </ListItem>
          </List>
        </Box>

        <Box>
          <Link
            sx={{
              marginRight: "77px",
              padding: "8px 32px",
              borderRadius: "32px",
              backgroundColor: "#FF4D00",
              fontWeight: 600,
              lineHeight: "24px",
              fontSize: "16px",
              textDecoration: "none",
              textTransform: "uppercase",
              fontFamily: "Poppins",
              color: "#FFFFFF",

              ":hover": {
                backgroundColor: "#FF8744",
                transition: "all 0.2s ease-in-out",
              },
            }}
            component={"button"}
          >
            Login / Signup
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
