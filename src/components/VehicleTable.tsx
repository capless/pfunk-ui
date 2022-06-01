import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  stages: string,
  id: string,
  createdAt: string,
  createdBy: string,
  updatedAt: string,
  updatedBy: string,
  make: string,
  year: number,
  model: string
) {
  return {
    stages,
    id,
    createdAt,
    createdBy,
    updatedAt,
    updatedBy,
    make,
    year,
    model,
  };
}

const rows = [
  createData(
    "Published",
    "cl1prx8u7c7",
    "04/08/22 9:59",
    "Brian Jinwright",
    "04/08/22 9:59",
    "Brian Jinwright",
    "BMW",
    2008,
    "535i"
  ),
  createData(
    "Not Published",
    "1cl1prx8u7c",
    "04/08/22 9:59",
    "Jason Doe",
    "04/08/22 9:59",
    "Jason Doe",
    "Honda",
    2019,
    "Civic"
  ),
];

export default function VehicleTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Stages</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Created at</TableCell>
            <TableCell>Created by</TableCell>
            <TableCell>Updated at</TableCell>
            <TableCell>Updated by</TableCell>
            <TableCell>Make</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell>Model</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.stages}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.createdAt}</TableCell>
              <TableCell>{row.createdBy}</TableCell>
              <TableCell>{row.updatedAt}</TableCell>
              <TableCell>{row.updatedBy}</TableCell>
              <TableCell>{row.make}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
              <TableCell>{row.model}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
