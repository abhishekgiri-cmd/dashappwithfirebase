import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/Mydata";
import { MyDropdown4 } from "./MyDropDown4";
import TempList from "./TempList";
import OxyList from "./OxyList";
import "./style.css";
import { Charts } from "./Charts";
import TotalList from "./TotalList";
const TaskList = ({ getTaskId, currDate, props, drop, setDrop }) => {
  const { handleDrop, dropdn, tempVal, setTempVal } = useContext(CartContext);
  const [dropValue, setDropValue] = useState("temp");
  // const [task, setTask] = useState([]);

  return (
    <div className="listcontain">
      <div className="dropvalue">
        <MyDropdown4 dropValue={dropValue} setDropValue={setDropValue} />
      </div>
      <div className="Listener">
        <div className="list">
          {dropValue === "all" ? (
            <TotalList />
          ) : dropValue === "oxygen" ? (
            <OxyList />
          ) : (
            <TempList />
          )}
        </div>
        <div className="charts">
          <Charts />
          <h5 style={{ paddingLeft: " 170px" }}>{dropValue} Charts</h5>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
