import React from "react";
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper } from "@mui/material";

export const CustomTable = ({ columns, data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        {/* Table Head */}
        <TableHead>
          <TableRow>
            {columns.map((col, index) => (
              <TableCell key={index} align={col.align || "left"} style={{ fontWeight: "bold" }}>
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((col, colIndex) => (
                <TableCell key={colIndex} align={col.align || "left"}>
                  {row[col.field]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
