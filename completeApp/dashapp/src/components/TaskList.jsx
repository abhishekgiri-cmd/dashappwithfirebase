import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import Taskmethod from "../method/Taskmethod";
import { CartContext } from "../context/Mydata";
import { MyDropdown4 } from "./MyDropDown4";
import { Oxygen } from "./Oxygen";
import TempList from "./TempList";
import OxyList from "./OxyList";
const TaskList = ({ getTaskId, currDate, props, drop, setDrop }) => {
  const { handleDrop, dropdn, tempVal, setTempVal } = useContext(CartContext);

  // const MyDate = new Date().toLocaleDateString();
  const [dropValue, setDropValue] = useState("temp");
  const [task, setTask] = useState([]);

  return (
    <div>
      <MyDropdown4 dropValue={dropValue} setDropValue={setDropValue} />
      {dropValue === "" ? null : ""}
      {dropValue === "oxygen" ? <OxyList /> : <TempList />}
    </div>
  );
};

export default TaskList;
