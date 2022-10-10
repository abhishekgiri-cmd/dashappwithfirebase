import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const MyDropdown4 = ({ setDropValue, dropValue }) => {
  const handleChange = (event) => {
    setDropValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Item</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dropValue}
          label="select Item"
          onChange={handleChange}
        >
          <MenuItem value="all">All Item</MenuItem>
          <MenuItem value="oxygen">oxygen</MenuItem>
          <MenuItem value="temperature">temperature</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
