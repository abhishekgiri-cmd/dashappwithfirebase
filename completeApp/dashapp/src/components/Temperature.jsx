import React, { useContext } from "react";
import { useState } from "react";
import { Alert, Button, Form, InputGroup } from "react-bootstrap";
import { CartContext } from "../context/Mydata";
import Taskmethod from "../method/Taskmethod";
import { MyDropdown } from "./MyDropdown";
import moment from "moment";

export const Temperature = (props) => {
  const [temp, setTemp] = useState("");
  const [unit, setUnit] = useState("");

  const MyTime = moment().format("LT");
  const MyDate = moment().format("do mm yyyy");

  const [currDate, setCurrDate] = useState(MyDate);
  console.log("current Date--", currDate);

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
      currDate,
      MyTime,
      temp,
      dropdn,
      unit,
      // MyDate,
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
    setCurrDate(MyDate);
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
                setTemp={setTemp}
                temp={temp}
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
                type="date"
                // placeholder={MyDate}
                value={currDate}
                onChange={(e) => setCurrDate(e.target.value)}
                currDate={currDate}
                setCurrDate={setCurrDate}
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
