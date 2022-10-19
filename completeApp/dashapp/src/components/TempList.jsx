import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import Taskmethod from "../method/Taskmethod";
import { CartContext } from "../context/Mydata";

import "./style.css";
import moment from "moment";

const TempList = ({ getTaskId, currDate, props, dropValue }) => {
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
  }, [currDate]);

  return (
    <div>
      <div>
        <div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Value & Unit</th>
                <th>Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {task
                .sort((a, b) => (b.MyTime > a.MyTime ? 1 : -1))
                .filter((doc) => doc.temp)
                .map((doc, index) => {
                  // console.log(doc.currDate);
                  return (
                    <tr key={user.id}>
                      <td>{doc.dropdn}</td>

                      <td>
                        {doc.temp}&nbsp;
                        {doc.unit}
                      </td>

                      <td>
                        {doc.currDate} <br />
                        {doc.MyTime}
                      </td>
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

export default TempList;
