import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import Taskmethod from "../method/Taskmethod";
import { CartContext } from "../context/Mydata";
import { MyDropdown4 } from "./MyDropDown4";
import { Oxygen } from "./Oxygen";
import { Charts } from "./Charts";

import "./style.css";
import { doc } from "firebase/firestore";

const TotalList = ({ getTaskId, currDate, props, dropValue }) => {
  const { handleDrop, dropdn, tempVal, setTempVal } = useContext(CartContext);

  const [task, setTask] = useState([]);
  const { user } = useUserAuth();
  const getAllTasks = async () => {
    const data = await Taskmethod.getAllTask();
    setTask(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setTempVal(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div>
      <div>
        <div>
          <Table
            striped
            bordered
            hover
            size="sm"
            unit={doc.unit}
            temp={doc.temp}
            oxy={doc.oxy}
          >
            <thead>
              <tr>
                <th>Name</th>
                <th> value</th>
                <th> unit</th>
                <th> Date</th>
              </tr>
            </thead>
            <tbody>
              {task
                .sort((a, b) => (b.MyTime > a.MyTime ? 1 : -1))
                .filter((doc) => doc.cusData)
                .map((doc, index) => {
                  // console.log(doc.currDate);
                  return (
                    <tr key={user.id}>
                      <td>{doc.cusData}</td>

                      <td>
                        &nbsp;
                        {doc.val}
                      </td>
                      <td>{doc.unit}</td>
                      <td> {doc.currDate}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default TotalList;
