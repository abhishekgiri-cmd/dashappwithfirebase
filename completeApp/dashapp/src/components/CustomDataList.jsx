import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import Taskmethod from "../method/Taskmethod";
import { CartContext } from "../context/Mydata";

import "./style.css";
import moment from "moment";

const CustomDataList = ({ getTaskId, props, dropValue }) => {
  const { handleDrop, dropdn, tempVal, setTempVal, drop, setDrop } =
    useContext(CartContext);

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
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
                <th>Unit</th>
                <th> Date</th>
              </tr>
            </thead>
            <tbody>
              {task
                .sort((a, b) => (b.cusData > a.cusData ? 1 : -1))
                .filter((doc) => doc.val)
                .map((doc, index) => {
                  // console.log(doc.currDate);
                  return (
                    <tr key={user.id}>
                      <td>{doc.cusData}</td>
                      <td>{doc.val}</td>
                      <td>{doc.unit}</td>
                      <td>
                        {doc.currDate}
                        <br />
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

export default CustomDataList;
