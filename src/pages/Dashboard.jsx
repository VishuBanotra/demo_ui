import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";

// MUI
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button, Stack } from "@mui/material";

// MockData
import { linkData_1, linkData_2, mockCardData } from "../Consts.js";

// Components
import Bargraph from "../components/Dashboard/Bargraph.jsx";
import CustomCard from "../components/ui/Card.jsx";
import EmailSent from "../components/Dashboard/EmailSent.jsx";
import TableComponent from "../components/Dashboard/Table.jsx";

// Assets
import Logo from "../assets/Common/Logo.svg";
import Search from "../assets/Dashboard/Search.svg";
import Notification from "../assets/Dashboard/Notification.svg";
import Country from "../assets/Dashboard/Country.svg";
import Burger from "../assets/Dashboard/Burger.svg";
import Avatar from "../assets/Dashboard/Table/Avatar1.svg";
import Settings from "../assets/Dashboard/Settings.svg";

import Aos from "aos";
import "aos/dist/aos.css";

const drawerWidth = 290;
const drawerHeight = 528;

const TypographyStyling = {
  color: "#D1D5DB",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "17px",
  margin: "0 17px",
};

const DrawerProps = {
  sx: {
    backgroundColor: "#111827",
  },
};

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    marginBottom: "50px", // Adjust this value if needed to fit the footer
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Footer = styled(Box)(({ theme, open }) => ({
  height: "60px",
  position: "fixed",
  bottom: 0,
  left: open ? drawerWidth : 0,
  width: `calc(100% - ${open ? drawerWidth : 0}px)`,
  backgroundColor: "#1F2937",
  textAlign: "center",
  padding: "0 24px",
  transition: theme.transitions.create(["left", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export default function PersistentDrawerLeft() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div data-aos="fade-down">
    <Box sx={{ overflowY: "hidden", display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        sx={{
          backgroundColor: "#1F2937",
          borderBottom: "1px solid #374151",
        }}
        position="fixed"
        open={open}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display={"flex"} alignItems={"center"}>
            {open ? (
              <IconButton
                color="white"
                aria-label="open drawer"
                onClick={handleDrawer}
                edge="start"
                sx={{ mr: 2 }}
              >
                <img src={Burger} alt="" />
              </IconButton>
            ) : (
              <IconButton
                color="white"
                aria-label="open drawer"
                onClick={handleDrawer}
                edge="start"
                sx={{ mr: 2 }}
              >
                <img src={Burger} alt="" />
              </IconButton>
            )}
            <img src={Search} alt="" />
          </Box>

          <Stack direction={"row"} gap="10px">
            <img src={Country} alt="" />
            <img src={Notification} alt="" />
            <img src={Settings} alt="" />
            <Stack direction={"row"} gap={1}>
              <img src={Avatar} alt="" />
              <Stack direction={"column"}>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "12px",
                    lineHeight: "16px",
                    fontWeight: 400,
                    color: "#9CA3AF",
                  }}
                >
                  Admin
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    lineHeight: "17px",
                    fontWeight: 600,
                    color: "#9CA3AF",
                  }}
                >
                  Carolyn Perk
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        PaperProps={DrawerProps}
        sx={{
          width: drawerWidth,
          height: drawerHeight,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          sx={{
            margin: "0 auto",
          }}
        >
          <Box>
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
        </DrawerHeader>

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
      </Drawer>

      <Main
        sx={{
          marginTop: "40px",
          backgroundColor: "#1F2937",
        }}
        open={open}
      >
        <Box>
          <Box
            sx={{
              width: "1548px",
              margin: "0 auto",
            }}
          >
            <div data-aos="fade-down">

            <Stack direction="row" spacing="10px" justifyContent={"center"}>
              {mockCardData.map((card, index) => {
                return (
                  <div>
                    <CustomCard
                      mainIcon={card.icon}
                      number={card.number}
                      label={card.label}
                      stats={card.stats}
                      smallIcon={card.smallIcon}
                    />
                  </div>
                );
              })}
            </Stack>
            </div>
            <Stack
              sx={{ margin: "16px 0" }}
              direction={"row"}
              spacing={"16px"}
              justifyContent={"center"}
            >
              <div data-aos="fade-right">
                <Bargraph />
              </div>
              <div data-aos="fade-left">
                <EmailSent />
              </div>


            </Stack>
            <Stack
              sx={{ margin: "36px 0" }}
              direction={"row"}
              justifyContent={"space-between"}
            >
              {["New", "No show", "Target", "Paid"].map((text, index) => {
                return (
                  <div>
                    <Button
                      sx={{
                        width: "288px",
                        height: "44px",
                        padding: "13.5px 32px",
                        borderRadius: "6px",
                        border: "1px solid #374151",
                        backgroundColor: "#374151",
                        fontWeight: "600",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "#F3F4F6",
                      }}
                    >
                      {text}
                    </Button>
                  </div>
                );
              })}
            </Stack>

             

            <TableComponent />
          
          
          </Box>
        </Box>
      </Main>
      <Footer
        open={open}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "17px",
          color: "#9CA3AF",
        }}
        >
        <Typography>Copyright © 2023 Elstar All rights reserved.</Typography>
        <Stack direction={"row"} alignItems={"center"} gap={2}>
          <Typography>Term & Conditions</Typography>
          <Box component={"span"}> | </Box>
          <Typography>Term & Conditions</Typography>
        </Stack>
      </Footer>
    </Box>
  </div>
  );
}
