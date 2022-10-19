import {
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import "react-datepicker/dist/react-datepicker.css";

import { CartContext } from "../context/Mydata";
import { useUserAuth } from "../context/UserAuthContext";
import Taskmethod from "../method/Taskmethod";

import "./style.css";

export const AddNewData = () => {
  const [validated, setValidated] = useState(false);

  const MyTime = moment().format("LT");

  const MyDate = new Date().toLocaleDateString();
  // const MyDate = moment().format("dd MM YY");

  const [currDate, setCurrDate] = useState(MyDate);
  const [val, setVal] = useState("");

  const [message, setMessage] = useState({ error: false, msg: "" });
  const { cusData, setCusData, setTempVal, unit, setUnit } =
    useContext(CartContext);
  const [open, setOpen] = React.useState(false);
  const [disable, setDisable] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      unit,
      val,
      currDate,
      MyDate,
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
    setVal("");
    setOpen(false);
    setMessage("");

    window.location.reload();
  };
  const handleChange = (e) => {
    setCusData(e.target.value);
  };
  return (
    <div>
      <div open={open} onClose={handleClose}>
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
        </div>
        <div style={{ marginTop: "20px" }}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Parameter</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cusData}
                multiple={true}
                label="parameter"
                onChange={handleChange}
                cusData={cusData}
                setCusData={setCusData}
              >
                {task.map((doc, index) => {
                  return <MenuItem value={cusData.id}>{doc.cusData}</MenuItem>;
                })}
              </Select>
            </FormControl>

            <div
              className="maindiv"
              style={{
                display: "flex",
                marginTop: "10px",
              }}
            >
              <div style={{ width: "70%", marginRight: "40px" }}>
                {" "}
                <Form.Group className="mb-3 inputval" controlId="formunit">
                  <InputGroup>
                    <InputGroup.Text id="formTempTitle">Value</InputGroup.Text>
                    <Form.Control
                      type="text"
                      multiple={true}
                      placeholder="Add value"
                      value={val}
                      onChange={(e) => setVal(e.target.value)}
                      val={val}
                      setVal={val}
                    />
                  </InputGroup>
                </Form.Group>
              </div>
              <div style={{ width: "30%", marginRight: "0px" }}>
                <Form.Group className="mb-3" controlId="formunit">
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                    <Select>
                      {task.map((doc, index) => {
                        // console.log(doc.currDate);
                        return <MenuItem value={cusData}>{doc.unit}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                </Form.Group>
              </div>
            </div>
            <div className="pick">
              <Form.Group className="mb-3" controlId="formDateunit">
                <InputGroup>
                  <InputGroup.Text id="dateUnit">Date</InputGroup.Text>
                  <input
                    type="date"
                    name="begin"
                    value={currDate}
                    formate="dd/MM/yy"
                    onChange={(e) => setCurrDate(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Button
                  type="submit"
                  variant="primary"
                  style={{ width: "300px" }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
