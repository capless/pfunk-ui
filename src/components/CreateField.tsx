import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Typography,
  Box,
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
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
      "& .big": {
        fontSize: "1rem",
        textTransform: "none",
      },
    },
    "& .fieldDesc": {
      marginBottom: theme.spacing(1),
      fontSize: "0.75rem",
    },
    "& .MuiFormControlLabel-root": {
      alignItems: "flex-start",
      "& .MuiCheckbox-root": {
        paddingTop: 0,
      },
    },
  },
}));

interface ICreateFieldProps {
  onClose: () => void;
}

export default function CreateField(props: ICreateFieldProps) {
  const { onClose } = props;
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
          <Box className="fieldBox">
            <Typography gutterBottom className="fieldTitle">
              <span className="big">Field Options</span>
            </Typography>
            <FormGroup>
              <FormControlLabel
                disableTypography
                control={<Checkbox />}
                label={
                  <Box>
                    <Typography className="fieldTitle">
                      Use as title field
                    </Typography>
                    <Typography className="fieldDesc">
                      Displays this field's value instead of the ID in relations
                    </Typography>
                  </Box>
                }
              />
            </FormGroup>
          </Box>
        </Box>
      ) : (
        <Box>
          <Box className="fieldBox">
            <FormGroup>
              <FormControlLabel
                disableTypography
                control={<Checkbox />}
                label={
                  <Box>
                    <Typography className="fieldTitle">
                      Make field required
                    </Typography>
                    <Typography className="fieldDesc">
                      Prevents saving an entry if this field is empty
                    </Typography>
                  </Box>
                }
              />
            </FormGroup>
          </Box>
          <Box className="fieldBox">
            <FormGroup>
              <FormControlLabel
                disableTypography
                control={<Checkbox />}
                label={
                  <Box>
                    <Typography className="fieldTitle">
                      Set field as unique
                    </Typography>
                    <Typography className="fieldDesc">
                      Ensures that a multiple entries can't have the same value
                      for this field
                    </Typography>
                  </Box>
                }
              />
            </FormGroup>
          </Box>
          <Box className="fieldBox">
            <FormGroup>
              <FormControlLabel
                disableTypography
                control={<Checkbox />}
                label={
                  <Box>
                    <Typography className="fieldTitle">
                      Limit character count
                    </Typography>
                    <Typography className="fieldDesc">
                      Specifies a minimum and/or maximum allowed number of
                      characters
                    </Typography>
                  </Box>
                }
              />
            </FormGroup>
          </Box>
          <Box className="fieldBox">
            <FormGroup>
              <FormControlLabel
                disableTypography
                control={<Checkbox />}
                label={
                  <Box>
                    <Typography className="fieldTitle">
                      Match a specific pattern
                    </Typography>
                    <Typography className="fieldDesc">
                      Only accepts specified regular expression (e.g. e-mail,
                      URL)
                    </Typography>
                  </Box>
                }
              />
            </FormGroup>
          </Box>
          <Box className="fieldBox">
            <FormGroup>
              <FormControlLabel
                disableTypography
                control={<Checkbox />}
                label={
                  <Box>
                    <Typography className="fieldTitle">
                      Restrict a specific pattern
                    </Typography>
                    <Typography className="fieldDesc">
                      Doesn't accept a specified regular expression
                    </Typography>
                  </Box>
                }
              />
            </FormGroup>
          </Box>
        </Box>
      )}

      <Box className="buttonBox">
        <Button
          variant="contained"
          color="inherit"
          sx={{ mr: 1 }}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button variant="contained">Create</Button>
      </Box>
    </StyledBox>
  );
}
