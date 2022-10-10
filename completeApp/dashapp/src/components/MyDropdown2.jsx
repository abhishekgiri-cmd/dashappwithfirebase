import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const MyDropdown2 = ({ setUnit, unit }) => {
  const handleChange = (event) => {
    setUnit(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Unit</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={unit}
          label="select unit"
          onChange={handleChange}
        >
          <MenuItem value={"g/cm3"}>g/cm3</MenuItem>
          <MenuItem value={"kg/m3"}>kg/m3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
