import React, { useContext, useEffect, useState } from "react";
import "./style.css";

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { productCollection } from "../firebase-config";
import { CartContext } from "../context/Mydata";
export const Charts = () => {
  const { handleDrop, dropdn, tempVal, setTempVal } = useContext(CartContext);

  const [data, SetData] = useState([]);

  useEffect(() => {
    SetData([]);
    tempVal.map((e) => {
      SetData([...data, e.temp]);
    });
  }, [tempVal]);

  return (
    <div>
      <BarChart width={500} height={300} data={tempVal}>
        <XAxis dataKey={tempVal} stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey={tempVal.unit} fill="#8884d8" barSize={30} />
      </BarChart>
    </div>
  );
};
