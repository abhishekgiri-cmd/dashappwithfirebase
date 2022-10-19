import React, { useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CartContext } from "../context/Mydata";

export const MyDropdown3 = ({ setDrop, drop }) => {
  const { handleDrop, dropdn, setDropdn } = useContext(CartContext);
  const handleChange = (event) => {
    setDrop(event.target.value);
    handleDrop(event.target.value);
  };
  // console.log("drpdn", dropdn);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choose Data</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={drop}
          label="Chhose Data"
          onChange={handleChange}
        >
          <MenuItem value="oxygen">OxyGen</MenuItem>
          <MenuItem value="temperature">Temperature</MenuItem>
          <MenuItem value="custom">Add Any Data</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
