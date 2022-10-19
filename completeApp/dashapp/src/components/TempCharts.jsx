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
export const TempCharts = ({ Value }) => {
  const { handleDrop, dropValue, tempVal, setTempVal, setDropValue, currDate } =
    useContext(CartContext);
  const [Data, setData] = useState([]);
  const [task, setTask] = useState([]);
  useEffect(() => {
    getAllTasks();
    setData([]);
  }, []);
  datap = task;
  const getAllTasks = async () => {
    const data = await Taskmethod.getAllTask();

    setTask(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setDropValue(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
          <XAxis dataKey="MyTime" key={"temp"} />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="temp" fill="#82ca9d" />
          <Bar dataKey="unit" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
