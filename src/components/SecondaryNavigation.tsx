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
  Box,
  Button,
  TextField,
} from "@mui/material";
import CreateCollection from "./CreateCollection";

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
  padding: theme.spacing(2, 3),
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

export default function SecondaryNavigation() {
  return (
    <>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ArrowDropDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <AddCircleOutline />
          <Typography>Collections</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CreateCollection />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDown />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <AddCircleOutline />
          <Typography>Indexes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="title">Create collection</Typography>
          <Box className="buttonBox">
            <Button fullWidth variant="contained" size="small" sx={{ mr: 1 }}>
              Settings
            </Button>
            <Button disabled fullWidth variant="contained" size="small">
              Preview URLs
            </Button>
          </Box>
          <Box className="fieldBox">
            <Typography className="fieldTitle">Display Name</Typography>
            <Typography className="fieldDesc">
              Name that will be displayed in pfunk
            </Typography>
            <TextField fullWidth variant="filled" />
          </Box>
          <Box className="fieldBox">
            <Typography className="fieldTitle">
              Description <span className="hint">(optional)</span>
            </Typography>
            <Typography className="fieldDesc">
              Displays a hint for content editors and API users
            </Typography>
            <TextField fullWidth multiline rows={3} variant="filled" />
          </Box>
          <Button fullWidth variant="contained">
            Create Collection
          </Button>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDown />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <AddCircleOutline />
          <Typography>Enumerations</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="title">Create collection</Typography>
          <Box className="buttonBox">
            <Button fullWidth variant="contained" size="small" sx={{ mr: 1 }}>
              Settings
            </Button>
            <Button disabled fullWidth variant="contained" size="small">
              Preview URLs
            </Button>
          </Box>
          <Box className="fieldBox">
            <Typography className="fieldTitle">Display Name</Typography>
            <Typography className="fieldDesc">
              Name that will be displayed in pfunk
            </Typography>
            <TextField fullWidth variant="filled" />
          </Box>
          <Box className="fieldBox">
            <Typography className="fieldTitle">
              Description <span className="hint">(optional)</span>
            </Typography>
            <Typography className="fieldDesc">
              Displays a hint for content editors and API users
            </Typography>
            <TextField fullWidth multiline rows={3} variant="filled" />
          </Box>
          <Button fullWidth variant="contained">
            Create Collection
          </Button>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
