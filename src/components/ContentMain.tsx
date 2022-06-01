import * as React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

export default function ContentMain() {
  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <Outlet />
    </Box>
  );
}
