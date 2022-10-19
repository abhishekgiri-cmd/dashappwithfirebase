import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/Mydata";
import { MyDropdown4 } from "./MyDropDown4";
import "./style.css";

import CustomDataList from "./CustomDataList";
import { doc } from "firebase/firestore";
import { CustomDataCharts } from "./CustomDataCharts";
import { OxyCharts } from "./OxyCharts";

const TaskList = ({
  getTaskId,
  currDate,
  props,
  drop,
  setDrop,
  cusData,
  setCusData,
  value,
}) => {
  const { handleDrop, dropdn, tempVal, setTempVal } = useContext(CartContext);
  const [dropValue, setDropValue] = useState(doc.cusData);
  // const [task, setTask] = useState([]);

  return (
    <div className="listcontain">
      <div className="dropvalue">
        <MyDropdown4 dropValue={dropValue} setDropValue={setDropValue} />
      </div>
      <div className="Listener">
        <div className="list">
          <CustomDataList />
        </div>
        <div className="charts">
          <CustomDataCharts />
        </div>
      </div>
    </div>
  );
};

export default TaskList;
