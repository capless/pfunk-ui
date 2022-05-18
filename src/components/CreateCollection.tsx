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

export default function CreateCollection() {
  const [showSettings, setShowSettings] = React.useState(true);

  return (
    <>
      <Typography className="title">Create collection</Typography>
      <Box className="buttonBox">
        <Button
          fullWidth
          variant={showSettings ? "contained" : "outlined"}
          size="small"
          sx={{ mr: 1 }}
          onClick={() => setShowSettings(true)}
        >
          Settings
        </Button>
        <Button
          fullWidth
          variant={showSettings ? "outlined" : "contained"}
          size="small"
          onClick={() => setShowSettings(false)}
        >
          Preview URLs
        </Button>
      </Box>

      {showSettings ? (
        <Box>
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
        </Box>
      ) : (
        <Box sx={{ py: 3 }}>
          <Box className="fieldBox">
            <Typography className="fieldDesc">
              <i>
                Preview URLs can be added after creating the model in sidebar
                configuration
              </i>
            </Typography>
          </Box>
        </Box>
      )}

      <Button fullWidth variant="contained">
        Create Collection
      </Button>
    </>
  );
}
