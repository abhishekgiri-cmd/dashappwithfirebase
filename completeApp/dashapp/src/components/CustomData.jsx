import React, { useContext } from "react";
import { useState } from "react";
import { Alert, Button, Form, InputGroup } from "react-bootstrap";
import { CartContext } from "../context/Mydata";
import Taskmethod from "../method/Taskmethod";

export const CustomData = (props) => {
  const [cusData, setCusData] = useState("");
  const [unit, setUnit] = useState("");
  // console.log("unit :", unit);

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

        <Form.Group className="mb-3" controlId="formunit">
          <InputGroup>
            <InputGroup.Text id="formTempTitle">Name</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Add  data"
              value={cusData}
              onChange={(e) => setCusData(e.target.value)}
              cusData={cusData}
              setCusData={setCusData}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formunit">
          <InputGroup>
            <InputGroup.Text id="formTempTitle">Unit</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Add unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              unit={unit}
              setUnit={setUnit}
            />
          </InputGroup>
        </Form.Group>

        <div className="d-grid gap-2">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Button variant="secondary" type="Submit">
                cancel
              </Button>
            </div>
            <div>
              <Button
                variant="primary"
                type="Submit"
                style={{ width: "200px" }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
