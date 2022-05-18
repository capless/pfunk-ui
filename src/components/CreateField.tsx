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

const StyledBox = styled(Box)(({ theme }) => ({
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

export default function CreateField() {
  const [showSettings, setShowSettings] = React.useState(true);
  const boxRef = React.useRef();
  const [boxWidth, setBoxWidth] = React.useState(0);

  React.useEffect(() => {
    const mainBox = document.getElementById("mainBox");
    if (mainBox) {
      setBoxWidth(mainBox.offsetWidth);
    }
  }, []);

  return (
    <StyledBox ref={boxRef} sx={{ width: boxWidth - 48 }}>
      <Typography className="title">Create Field</Typography>
      <Box className="buttonBox">
        <Button
          variant={showSettings ? "contained" : "outlined"}
          size="small"
          sx={{ mr: 1 }}
          onClick={() => setShowSettings(true)}
        >
          Settings
        </Button>
        <Button
          variant={showSettings ? "outlined" : "contained"}
          size="small"
          onClick={() => setShowSettings(false)}
        >
          Validations
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

      <Box className="buttonBox">
        <Button variant="contained" color="inherit" sx={{ mr: 1 }}>
          Cancel
        </Button>
        <Button variant="contained">Create</Button>
      </Box>
    </StyledBox>
  );
}
