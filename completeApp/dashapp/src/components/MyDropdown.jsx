import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const MyDropdown = ({ setUnit, unit }) => {
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
          label="select Unit"
          onChange={handleChange}
        >
          <MenuItem value={"°C"}>Celcius</MenuItem>
          <MenuItem value={"℉"}>Farenhite</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
