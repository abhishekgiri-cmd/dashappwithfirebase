import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CartContext } from "../context/Mydata";
import Taskmethod from "../method/Taskmethod";

export const MyDropdown4 = ({
  setDropValue,
  dropValue,
  cusData,
  setCusData,
  setDrop,
  drop,
}) => {
  const { handleDrop, dropdn, setDropdn } = useContext(CartContext);

  const handleChange = (event) => {
    handleDrop(event.target.value);
    setDropValue(event.target.value);
    setDrop(event.target.value);
  };
  const [task, setTask] = useState([]);

  const getAllTasks = async () => {
    const data = await Taskmethod.getAllTask();
    setTask(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // setTempVal(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Parameters</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={drop}
          label="parameter"
          onChange={handleChange}
          cusData={cusData}
          setCusData={setCusData}
        >
          {task.map((doc, index) => {
            return <MenuItem value={doc.cusData}>{doc.cusData}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
