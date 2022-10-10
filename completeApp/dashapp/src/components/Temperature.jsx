import React, { useContext } from "react";
import { useState } from "react";
import { Alert, Button, Form, InputGroup } from "react-bootstrap";
import { CartContext } from "../context/Mydata";
import Taskmethod from "../method/Taskmethod";
import { MyDropdown } from "./MyDropdown";
// import { MyDropdown2 } from "./MyDropdown2";

export const Temperature = (props) => {
  const [temp, setTemp] = useState("");
  const [unit, setUnit] = useState("");
  console.log("unit :", unit);
  const MyTime = new Date().toLocaleTimeString();
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
      temp,
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

    setTemp("");
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
              <InputGroup.Text id="formTempTitle">Temperature</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Add Temperature"
                value={temp}
                onChange={(e) => setTemp(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formunit">
            <div className="dopdn">
              <MyDropdown setUnit={setUnit} unit={unit} />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDateunit">
            <InputGroup>
              <InputGroup.Text id="formDateUnit">Date</InputGroup.Text>
              <Form.Control
                type="datetime"
                name={MyDate}
                value={currDate}
                date-format="dd /MM /yyyy"
                onChange={(e) => setCurrDate(e.target.value)}
                currDate={currDate}
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
