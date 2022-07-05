import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, Pagination, Typography } from "@mui/material";
import { Delete, Edit, Info, Visibility } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function createData(
  stages: string,
  id: string,
  createdBy: string,
  updatedBy: string,
  make: string,
  year: number,
  model: string
) {
  return {
    stages,
    id,
    createdBy,
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
    "Brian Jinwright",
    "Brian Jinwright",
    "BMW",
    2008,
    "535i"
  ),
  createData(
    "Not Published",
    "1cl1prx8u7c",
    "Jason Doe",
    "Jason Doe",
    "Honda",
    2019,
    "Civic"
  ),
];

export default function VehicleTable() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <TableContainer
      component={Paper}
      sx={{
        "& .MuiTable-root": {
          "& th": {
            textTransform: "uppercase",
            color: "#999999",
            backgroundColor: "#FBFBFB",
          },
          "& th:not(:last-child), td:not(:last-child)": {
            borderRight: `1px solid ${theme.palette.divider}`,
          },
          "& tr:last-child > td": {
            borderBottom: `1px solid ${theme.palette.divider}`,
          },
          "& .MuiIconButton-root": {
            color: "#999999",
          },
        },
      }}
    >
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Stages</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Created by</TableCell>
            <TableCell>Updated by</TableCell>
            <TableCell>Make</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Typography sx={{ color: "primary.main" }}>
                  {row.stages}
                </Typography>
              </TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.createdBy}</TableCell>
              <TableCell>{row.updatedBy}</TableCell>
              <TableCell>{row.make}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
              <TableCell>{row.model}</TableCell>
              <TableCell>
                <IconButton title="Edit" onClick={() => navigate(row.id)}>
                  <Edit />
                </IconButton>
                <IconButton title="Info">
                  <Info />
                </IconButton>
                <IconButton title="Visibility">
                  <Visibility />
                </IconButton>
                <IconButton title="Delete">
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        sx={{
          display: "flex",
          justifyContent: "center",
          my: 3,
          "& .MuiPaginationItem-root": {
            borderColor: "#E7E7E7",
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.main,
          },
        }}
        page={page}
        onChange={handleChange}
      />
    </TableContainer>
  );
}
