import React, { useContext } from "react";
import { useState } from "react";
import { Alert, Button, Form, InputGroup } from "react-bootstrap";
import { CartContext } from "../context/Mydata";
import Taskmethod from "../method/Taskmethod";
import { MyDropdown2 } from "./MyDropdown2";
import moment from "moment";

export const CustomData = (props) => {
  const [cusData, setCusData] = useState("");
  const [unit, setUnit] = useState("");
  // console.log("unit :", unit);
  const MyTime = moment().format("LT");
  const MyDate = new Date().toLocaleDateString();
  const [currDate, setCurrDate] = useState(MyDate);
  const [message, setMessage] = useState({ error: false, msg: "" });
  const { handleDrop, dropdn } = useContext(CartContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (unit === "") {
      setMessage({
        error: true,
        msg: "All fields are mandatory!",
      });
      return;
    }
    const newTask = {
      MyDate,
      currDate,
      MyTime,
      cusData,
      dropdn,
      unit,
    };

    try {
      await Taskmethod.addTasks(newTask);
      setMessage({
        error: false,
        msg: ` Data added successfully!`,
      });
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setCusData("");
    setUnit("");
    setCurrDate("");
    // handleDrop();
  };

  return (
    <div>
      <div>
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formunit">
            <InputGroup>
              <InputGroup.Text id="formTempTitle">Your Data</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Add your deire data"
                value={cusData}
                onChange={(e) => setCusData(e.target.value)}
                cusData={cusData}
                setCusData={setCusData}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formunit">
            <InputGroup>
              <InputGroup.Text id="formTempTitle">Add Input</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Add Unit for your Data"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                unit={unit}
                setUnit={setUnit}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDateunit">
            <InputGroup>
              <InputGroup.Text id="dateUnit">Date</InputGroup.Text>
              <input
                type="date"
                name="begin"
                value={currDate}
                formate="dd/MM/yy"
                min="01-01-1998"
                max="31-12-2030"
                onChange={(e) => setCurrDate(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add Data
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
