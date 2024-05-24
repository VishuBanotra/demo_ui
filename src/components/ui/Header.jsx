import React, { useState } from "react";

// Mui Components
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Toolbar,
} from "@mui/material";

// Svg
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/Common/Logo.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const buttonStyle = {
    marginRight: { lg: "77px" },
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
  };

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

  const DrawerList = (
    <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
      <List>
        {["About", "How it works", "Pricing"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText sx={linkStyle} primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          <Button sx={buttonStyle} disableElevation disableRipple>
            Signup / Login
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

      <AppBar position="static">
        <Toolbar
          sx={{
            bgcolor: "#FFFFFF",
            display: "flex",
            justifyContent: { md: "space-between" },
            alignItems: "center",
            height: "84px",
          }}
        >
          <IconButton
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ display: { lg: "none" }, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            component={"img"}
            src={Logo}
            sx={{
              margin: { lg: "0 44px" },
              width: "246px",
              height: "49px",
            }}
          />

          <Box sx={{ display: { xs: "none", lg: "block" } }}>
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

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Link sx={buttonStyle} component={"button"}>
              Login / Signup
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
