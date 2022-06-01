import * as React from "react";
import Box from "@mui/material/Box";
import AddFields from "./AddFields";

export default function SchemaMain() {
  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <Box id="mainBox" sx={{ p: 3, width: "100%" }}></Box>
      <AddFields />
    </Box>
  );
}
