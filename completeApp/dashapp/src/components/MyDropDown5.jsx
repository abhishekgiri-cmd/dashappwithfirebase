import React, { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
import { CartContext } from "../context/Mydata";

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

export const MyDropdown5 = ({ setDrop, drop }) => {
  const { handleDrop, dropdn, setDropdn } = useContext(CartContext);
  const [customData, setCustomData] = useState("");
  const handleChange = (event) => {
    setDrop(event.target.value);
    handleDrop(event.target.value);
    setCustomData(event.target.value);
  };
  console.log("my custom Data is ", customData);
  return (
    <div>
      <FormControl variant="standard" fullWidth>
        <InputLabel id="demo-simple-select-label">Parameters</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={drop}
          onChange={handleChange}
          input={<BootstrapInput />}
          placeholder="Add your custom Data"
        >
          <MenuItem value="oxygen">OxyGen</MenuItem>
          <MenuItem value="temperature">Temperature</MenuItem>
          <MenuItem value="customdata">Add any kind of Data</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
