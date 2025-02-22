import React, { useState } from "react";
import { 
  Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, 
  IconButton, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Button
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const CustomTable = ({ columns, data, onDelete, onGoToDetail }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleMenuOpen = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteClick = () => {
    setOpenConfirm(true);
    handleMenuClose();
  };

  const handleConfirmDelete = () => {
    if (onDelete && selectedRow) {
      onDelete(selectedRow);
    }
    setOpenConfirm(false);
    setSelectedRow(null);
  };

  return (
    <>
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
              <TableCell align="center" style={{ fontWeight: "bold" }}>{/* Empty Title for Actions */}</TableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <TableCell key={colIndex} align={col.align || "left"}>
                    {col.render ? col.render(row) : row[col.field]}
                  </TableCell>
                ))}

                {/* Action Column */}
                <TableCell align="center">
                  <IconButton onClick={(event) => handleMenuOpen(event, row)}>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Menu for Actions */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={() => { onGoToDetail(selectedRow); handleMenuClose(); }}>Detail</MenuItem>
        <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
      </Menu>

      {/* Confirmation Dialog for Delete */}
      <Dialog open={openConfirm} onClose={() => setOpenConfirm(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete <strong>{selectedRow?.name}</strong>?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConfirm(false)} color="secondary">Cancel</Button>
          <Button onClick={handleConfirmDelete} color="error" variant="contained">Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
