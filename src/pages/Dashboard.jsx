import { useEffect, useState } from "react";

// MUI
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { AppBar, Button, Grid, Stack } from "@mui/material";

// MockData
import { mockCardData } from "../Consts.js";

// Components
import Bargraph from "../components/Dashboard/Bargraph.jsx";
import CustomCard from "../components/ui/Card.jsx";
import EmailSent from "../components/Dashboard/EmailSent.jsx";
import TableComponent from "../components/Dashboard/Table.jsx";
import { DrawerList } from "../components/Dashboard/DrawerList.jsx";

// Assets
import Search from "../assets/Dashboard/Search.svg";
import Notification from "../assets/Dashboard/Notification.svg";
import Country from "../assets/Dashboard/Country.svg";
import Burger from "../assets/Dashboard/Burger.svg";
import Avatar from "../assets/Dashboard/Table/Avatar1.svg";
import Settings from "../assets/Dashboard/Settings.svg";

// Animation
import Aos from "aos";
import "aos/dist/aos.css";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Styling

  const DrawerProps = {
    sx: {
      backgroundColor: "#111827",
      width: "290px",
    },
  };

  const footerProps = {
    border: "1px solid #374151",
    height: { xs: "80px", md: "60px" },
    padding: "0 24px",
    backgroundColor: "#1F2937",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: { xs: "center", md: "space-between" },
    alignItems: "center",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "17px",
    color: "#9CA3AF",
    textAlign: { xs: "center", md: "justify" },
  };

  const buttonProps = {
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
  };

  return (
    <div id="#" data-aos="fade-down">
      <Box sx={{ overflow: "hidden" }}>
        <Drawer
          PaperProps={DrawerProps}
          open={open}
          onClose={toggleDrawer(false)}
        >
          {DrawerList}
        </Drawer>

        <AppBar elevation={0} position="static">
          <Toolbar
            sx={{
              bgcolor: "#1F2937",
              borderBottom: "1px solid #374151",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "64px",
            }}
          >
            <div>
              <IconButton
                edge="start"
                onClick={toggleDrawer(true)}
                sx={{ m: 1 }}
              >
                <img src={Burger} alt="" />
              </IconButton>

              <IconButton sx={{ ml: 1 }} edge="start">
                <img src={Search} alt="" />
              </IconButton>
            </div>

            <Stack direction={"row"} gap="10px">
              <Box src={Country} component={"img"} />
              <Box
                sx={{ display: { xs: "none" } }}
                src={Settings}
                component={"img"}
              />
              <Box src={Notification} component={"img"} />
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

        <Box
          sx={{
            backgroundColor: "#1F2937",
          }}
          open={open}
        >
          <Box>
            <Box
              sx={{
                width: "100%",
                maxWidth: "1548px",
                margin: "0 auto",
              }}
            >
              <div data-aos="fade-down">
                <Grid
                  sx={{ paddingTop: "16px" }}
                  justifyContent={{ xs: "center", xl: "space-between" }}
                  alignItems={"center"}
                  container
                >
                  {mockCardData.map((card, index) => {
                    return (
                      <Box padding={{ xs: "16px", xxl: "0" }} key={index}>
                        <CustomCard
                          mainIcon={card.icon}
                          number={card.number}
                          label={card.label}
                          stats={card.stats}
                          smallIcon={card.smallIcon}
                        />
                      </Box>
                    );
                  })}
                </Grid>
              </div>

              <Stack direction={{ xxl: "row" }} spacing={2}>
                <div data-aos="fade-right">
                  <Bargraph />
                </div>

                <div data-aos="fade-left">
                  <EmailSent />
                </div>
              </Stack>

              <Stack
                direction={{ xs: "column", xl: "row" }}
                justifyContent={"space-between"}
                alignItems={"center"}
                spacing={"16px"}
              >
                {["New", "No show", "Target", "Paid"].map((text, index) => {
                  return (
                    <div>
                      <Button sx={buttonProps}>{text}</Button>
                    </div>
                  );
                })}
              </Stack>
              <Box sx={{ padding: "16px 0" }}>
                <TableComponent />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={footerProps}>
          <Typography>Copyright © 2023 Elstar All rights reserved.</Typography>
          <Stack direction={"row"} alignItems={"center"} gap={2}>
            <Typography>Term & Conditions</Typography>
            <Box component={"span"}> | </Box>
            <Typography>Term & Conditions</Typography>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}
