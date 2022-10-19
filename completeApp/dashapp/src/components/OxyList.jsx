import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import Taskmethod from "../method/Taskmethod";
import { CartContext } from "../context/Mydata";
import { MyDropdown4 } from "./MyDropDown4";
import { Oxygen } from "./Oxygen";
import { Charts } from "./Charts";
import moment from "moment";
const OxyList = ({ getTaskId, currDate, props, dropValue, setDropValue }) => {
  const { handleDrop, dropdn, tempVal, setTempVal } = useContext(CartContext);

  const MyDate = new Date().toLocaleDateString();
  const MyTime = new Date().toLocaleTimeString();

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
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Value </th>
              <th>Unit </th>

              <th>Date & Time</th>
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
  );
};

export default OxyList;
