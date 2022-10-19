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
} from "recharts";
import { CartContext } from "../context/Mydata";
import Taskmethod from "../method/Taskmethod";

let datap = [];
export const Charts = ({ Value }) => {
  const {
    dropValue,

    setDropValue,
  } = useContext(CartContext);
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
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          width={630}
          height={650}
          data={datap}
          barGap={0}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="currDate"></XAxis>
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="temp" fill="#8884d8" />
          <Bar dataKey="oxy" fill="#82ca9d" />
          <Bar dataKey="cusData" fill="tomato" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
