import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {
  ClickAwayListener,
  Tooltip,
  tooltipClasses,
  TooltipProps,
} from "@mui/material";
import CreateField from "./CreateField";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: "none",
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

export default function AddFields() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <LightTooltip
          arrow
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={<CreateField />}
          placement="left"
        >
          <Box
            sx={{
              p: 2,
              height: "100%",
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
                  cursor: "pointer",
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
                  onClick={handleTooltipOpen}
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
        </LightTooltip>
      </div>
    </ClickAwayListener>
  );
}
