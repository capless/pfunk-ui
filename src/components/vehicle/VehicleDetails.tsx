import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Typography,
  Box,
  Button,
  TextField,
  Grid,
  Divider,
  Stack,
} from "@mui/material";

export default function VehicleDetails() {
  const theme = useTheme();
  const [showSettings, setShowSettings] = React.useState(true);

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Make"
            variant="filled"
            defaultValue="BMW"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Year"
            variant="filled"
            defaultValue="2008"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Model"
            variant="filled"
            defaultValue="535i"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Vin"
            variant="filled"
            defaultValue="WVAC3432DD9922D9"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Slug"
            variant="filled"
            defaultValue="2008-bmw-535i-wvac3432dd9922d9"
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 6 }} />

      <Grid
        container
        spacing={3}
        sx={{
          "& .title": {
            marginBottom: theme.spacing(1),
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          },
          "& .label": {
            width: 1 / 3,
            color: theme.palette.common.black,
          },
          "& .hint": {
            fontStyle: "italic",
          },
        }}
      >
        <Grid item xs={6}>
          <Typography className="title">Document Information</Typography>
          <Stack>
            <Stack direction="row">
              <Typography className="label">ID</Typography>
              <Typography>cl1prx8u7c7510bio8864j818</Typography>
            </Stack>
            <Stack direction="row">
              <Typography className="label">Created</Typography>
              <Typography>08 Apr 2022, 09:53</Typography>
            </Stack>
            <Stack direction="row">
              <Typography className="label">Last updated</Typography>
              <Typography>09 Apr 2022, 07:53</Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={6}>
          <Typography className="title">Stages</Typography>
          <Stack>
            <Stack direction="row">
              <Typography className="label">Published</Typography>
              <Typography>08 Apr 2022, 09:53</Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={6}>
          <Typography className="title">Localizations</Typography>
          <Typography className="hint">
            This model has no localized fields
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography className="title">Versions</Typography>
          <Typography className="hint">
            This feature is not available on your plan, please upgrade
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
