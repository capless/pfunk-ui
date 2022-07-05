import * as React from "react";
import { styled } from "@mui/material/styles";
import { ArrowDropDown, AddCircleOutline } from "@mui/icons-material";
import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  AccordionProps,
  AccordionSummaryProps,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function ContentNavigation() {
  const location = useLocation();

  return (
    <>
      <Typography
        sx={{
          p: 3,
          backgroundColor: "#F6F6F6",
        }}
        variant="h4"
        fontWeight={700}
      >
        Content
      </Typography>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ArrowDropDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <AddCircleOutline />
          <Typography>Default Views</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            sx={{
              p: 0,
              "& .MuiTypography-root": {
                fontSize: "0.875rem",
              },
            }}
          >
            <Link to="/content/vehicle">
              <ListItem
                button
                selected={location.pathname.includes("/content/vehicle")}
              >
                <ListItemText primary="Vehicle" />
              </ListItem>
            </Link>
            <Link to="/content/make">
              <ListItem
                button
                selected={location.pathname.includes("/content/make")}
              >
                <ListItemText primary="Make" />
              </ListItem>
            </Link>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDown />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <AddCircleOutline />
          <Typography>Custom Views</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="title">Custom Views</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: "#F6F6F6",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  padding: theme.spacing(0, 3),
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    display: "flex",
    alignItems: "center",
    "& .MuiTypography-root": {
      letterSpacing: "0.2em",
      textTransform: "uppercase",
    },
    "& .MuiSvgIcon-root": {
      marginLeft: theme.spacing(-0.5),
      marginRight: theme.spacing(1),
      color: "#999999",
    },
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0, 3),
  "& .title": {
    marginBottom: theme.spacing(1),
    fontWeight: 500,
    fontSize: "1rem",
    textTransform: "uppercase",
    color: theme.palette.common.black,
  },
  "& .buttonBox": {
    marginBottom: theme.spacing(2),
    display: "flex",
  },
  "& .fieldBox": {
    marginBottom: theme.spacing(2),
    "& .fieldTitle": {
      textTransform: "uppercase",
      fontWeight: 500,
      color: theme.palette.common.black,
      "& .hint": {
        textTransform: "none",
        fontWeight: "normal",
        fontStyle: "italic",
        color: "#999999",
      },
    },
    "& .fieldDesc": {
      marginBottom: theme.spacing(1),
      fontSize: "0.75rem",
    },
  },
}));
