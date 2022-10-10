import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import Taskmethod from "../method/Taskmethod";
import { CartContext } from "../context/Mydata";
import { MyDropdown4 } from "./MyDropDown4";
import { Oxygen } from "./Oxygen";
import { Charts } from "./Charts";
const OxyList = ({ getTaskId, currDate, props, dropValue, setDropValue }) => {
  const { handleDrop, dropdn, tempVal, setTempVal } = useContext(CartContext);

  const MyDate = new Date().toLocaleDateString();

  const [task, setTask] = useState([]);
  const { user } = useUserAuth();
  const getAllTasks = async () => {
    const data = await Taskmethod.getAllTask();
    setTask(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setTempVal(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setDropValue(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  console.log(task);
  useEffect(() => {
    getAllTasks();
  }, []);
  console.log("Drop", dropdn);
  // console.log(data.doc.oxy);
  return (
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
              .sort((a, b) => (a.unit > b.unit ? 1 : -1))
              .filter((doc) => doc.oxy)
              .map((doc, index, user) => {
                return (
                  <tr key={user.id}>
                    <td>{doc.dropdn}</td>

                    <td>
                      {doc.oxy}&nbsp;
                      {doc.unit}
                    </td>

                    <td>
                      {doc.currDate} <br /> {doc.MyTime}{" "}
                    </td>
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
