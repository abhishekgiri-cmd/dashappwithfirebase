import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Label,
} from "recharts";
import { CartContext } from "../context/Mydata";
import Taskmethod from "../method/Taskmethod";

let datap = [];
export const AllCharts = ({ Value }) => {
  const { handleDrop, dropValue, tempVal, setTempVal, setDropValue } =
    useContext(CartContext);
  const [Data, setData] = useState([]);
  const [task, setTask] = useState([]);
  useEffect(() => {
    getAllTasks();
    setData([]);
  }, [Value]);
  datap = task;
  const getAllTasks = async () => {
    const data = await Taskmethod.getAllTask();

    console.log("Data is ");
    setTask(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setDropValue(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log("drop value is---- ", dropValue);
  };

  return (
    <div>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart width={730} height={650} data={datap}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="datap">
            <Label
              value="<-------------------data of every Day ------------------------>"
              offset={6}
              position="insideBottom"
            />
          </XAxis>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="temp" fill="#8884d8" />
          <Bar dataKey="oxy" fill="#82ca9d" />
          <Bar dataKey="unit" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
