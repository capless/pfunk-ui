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
  padding: theme.spacing(0, 2),
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
        <DrawerHeader sx={{ pt: 4 }}>
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
          <Box sx={{ p: 3 }}>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id
              interdum velit laoreet id donec ultrices. Odio morbi quis commodo
              odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum
              est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum
              leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue eget arcu dictum
              varius duis at consectetur lorem. Velit sed ullamcorper morbi
              tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
              ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
              aliquam sem et tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a.
            </Typography>
          </Box>
          <Box
            sx={{
              p: 2,
              minWidth: 284,
              borderLeft: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                p: 1,
                marginBottom: theme.spacing(1),
                fontWeight: 500,
                fontSize: "1.125rem",
                color: "#333333",
              }}
            >
              Add Fields
            </Typography>

            <List
              sx={{
                p: 0,
                "& .MuiListItem-root": {
                  px: 1,
                  my: 1.5,
                  border: "1px solid #E4E4E4",
                  borderRadius: "5px",
                },
                "& .MuiBox-root": {
                  marginRight: theme.spacing(1),
                  width: 30,
                  height: 30,
                  borderRadius: "5px",
                },
                "& .MuiListItemText-root": {
                  my: 0,
                },
                "& .MuiListItemText-primary": {
                  fontWeight: 400,
                  fontSize: "1rem",
                  color: "#000000",
                },
                "& .MuiListItemText-secondary": {
                  fontWeight: 400,
                  fontSize: "0.75rem",
                  color: "#999999",
                },
              }}
            >
              <ListItem>
                <Box sx={{ bgcolor: "#E2F4D4" }}></Box>
                <ListItemText
                  primary="Single Line Text"
                  secondary="Headings and Titles"
                />
              </ListItem>
              <ListItem>
                <Box sx={{ bgcolor: "#D4E1F4" }}></Box>
                <ListItemText
                  primary="Multi Line Text"
                  secondary="Description"
                />
              </ListItem>
              <ListItem>
                <Box sx={{ bgcolor: "#E2D4F4" }}></Box>
                <ListItemText
                  primary="Slug"
                  secondary="URL friendly identifier"
                />
              </ListItem>
              <ListItem>
                <Box sx={{ bgcolor: "#F4E5D4" }}></Box>
                <ListItemText
                  primary="Enum"
                  secondary="Enum friendly identifier"
                />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Main>
    </Box>
  );
}
