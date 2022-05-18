import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardDoubleArrowLeft from "@mui/icons-material/KeyboardDoubleArrowLeft";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar } from "@mui/material";
import {
  DashboardOutlined,
  AppRegistrationOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import SecondaryNavigation from "./SecondaryNavigation";
import AddFields from "./AddFields";

const drawerWidth = 284;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  marginTop: 64,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${284}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: "none",
  borderBottom: `1px solid ${theme.palette.divider}`,
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: `calc(100% - ${130}px)`,
  ...(open && {
    width: `calc(100% - ${drawerWidth + 130}px)`,
    marginLeft: `${drawerWidth + 130}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(4, 3, 0, 3),
  background: "#F6F6F6",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ display: "flex" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon sx={{ color: "#C4C4C4" }} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifySelf: "flex-end",
              marginLeft: "auto",
            }}
          >
            <DriveFileRenameOutlineIcon sx={{ mr: 1, color: "#999999" }} />
            <Typography noWrap component="div">
              Edit Content
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          py: 2,
          minWidth: 130,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          "& .MuiList-root": {
            "& .MuiListItem-root": {
              padding: "1rem",
              justifyContent: "center",
            },
            "& .MuiListItemIcon-root": {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "inherit",
            },
            "& .MuiListItem-root.Mui-selected": {
              color: "#30D0A1",
              backgroundColor: "transparent",
            },
            "& .MuiTypography-root": {
              fontSize: "0.625rem",
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "inherit",
            },
          },
        }}
      >
        <List>
          <ListItem>
            <img alt="pfunk" src="/images/pfunk.png" />
          </ListItem>
          <ListItem sx={{ mb: 3 }}>
            <Avatar
              sx={{
                width: 60,
                height: 60,
                fontSize: 36,
                backgroundColor: "primary.main",
                fontWeight: "bold",
              }}
            >
              N
            </Avatar>
          </ListItem>
          <ListItem button selected>
            <ListItemIcon>
              <DashboardOutlined />
              <ListItemText primary="Schema" />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AppRegistrationOutlined />
              <ListItemText primary="Content" />
            </ListItemIcon>
          </ListItem>
        </List>

        <List>
          <ListItem button>
            <ListItemIcon>
              <SettingsOutlined fontSize="large" />
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>

      <Drawer
        sx={{
          my: 5,
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            left: 130,
            boxSizing: "border-box",
            background: "#FBFBFB",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton
            sx={{
              p: 0,
              zIndex: 9,
              border: "1px solid #C4C4C4",
              borderRadius: "50%",
              position: "fixed",
              left: 400,
              top: 52,
              color: "#C4C4C4",
              background: "#ffffff !important",
            }}
            onClick={handleDrawerClose}
          >
            <KeyboardDoubleArrowLeft />
          </IconButton>
          <Typography variant="h4" fontWeight={700}>
            Schema
          </Typography>
        </DrawerHeader>

        <SecondaryNavigation />
      </Drawer>

      <Main open={open}>
        <Box sx={{ display: "flex", height: "100%" }}>
          <Box id="mainBox" sx={{ p: 3, width: "100%" }}></Box>
          <AddFields />
        </Box>
      </Main>
    </Box>
  );
}
