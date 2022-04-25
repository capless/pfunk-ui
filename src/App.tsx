import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App example with TypeScript
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
