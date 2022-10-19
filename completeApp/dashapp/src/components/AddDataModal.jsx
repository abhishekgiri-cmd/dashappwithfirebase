import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import AddTask from "./AddTask";
import { AddNewData } from "./AddNewData";
import { Oxygen } from "./Oxygen";
import { DateTime } from "luxon";
import {
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { setDoc } from "firebase/firestore";
import moment from "moment";

// import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { CartContext } from "../context/Mydata";
import { useUserAuth } from "../context/UserAuthContext";
import Taskmethod from "../method/Taskmethod";

import "./style.css";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export const AddDataModal = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [validated, setValidated] = useState(false);

  const MyDate = DateTime.now()
    .setLocale("fr")
    .toLocaleString(DateTime.DATE_FULL);
  // const MyDate = new Date().toLocaleDateString();
  const MyTime = moment().format("LT");
  const [currDate, setCurrDate] = useState(
    DateTime.now().toFormat("dd-MM-yyyy")
  );
  const [val, setVal] = useState("");
  const [date, setDate] = useState(new Date());
  const [message, setMessage] = useState({ error: false, msg: "" });
  const { cusData, setCusData, setTempVal, unit, setUnit } =
    useContext(CartContext);

  const [disable, setDisable] = useState(true);

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

      MyDate,
      currDate,
      MyTime,
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
    setUnit(e.target.value);
  };
  console.log("unit", unit);
  console.log("val", val);
  console.log("cusData", cusData);
  function myFunction(e) {
    // document.getElementById("demo").innerHTML = "You selected some text!";
    setCusData(e.target.value)
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} sx={{ mr: 2 }}>
        Add Data
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Add Data
        </DialogTitle>
        <DialogContent>
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
            <div style={{ marginTop: "20px", textTransform: "capitalize" }}>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    Parameter
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={cusData}
                    label="parameter"
                    onChange={handleChange}
                    cusData={cusData}
                    setCusData={setCusData}
                    onSelect={myFunction}
                  >
                    {task.map((doc, index) => {
                      return (
                        <MenuItem
                          value={doc.cusData}
                          cusData={cusData}
                          setCusData={setCusData}
                          id="s1"
                        >
                          {doc.cusData}
                        </MenuItem>
                      );
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
                    <Form.Group className="mb-3" controlId="formunit">
                      <InputGroup>
                        <InputGroup.Text id="formTempTitle">
                          Value
                        </InputGroup.Text>
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
                        <InputLabel id="demo-simple-select-label">
                          Unit
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={cusData}
                          label="parameter"
                          onChange={handleChange}
                          unit={unit}
                          setUnit={setUnit}
                          onSelect={myFunction}
                        >
                          {task.map((doc, index) => {
                            return (
                              <MenuItem value={doc.cusData} id="s1">
                                {doc.unit}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Form.Group>
                  </div>
                </div>
                <div className="pick">
                  <Form.Group className="mb-3" controlId="formunit">
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          border: "1px solid grey",
                          borderRadius: "5px",
                          width: "50px",
                          textAlign: "center",
                          backgroundColor: "#e9ecef",
                          borderRight: "0px",
                          borderTopRightRadius: "0px",
                          borderBottomRightRadius: "0px",
                          height: "29px",
                        }}
                      >
                        <label id="formTempTitle">Date</label>
                      </div>
                      <div>
                        <DatePicker
                          // selected={date}
                          value={currDate}
                          onChange={(e) => setCurrDate(e.target.value)}
                        />
                      </div>
                    </div>
                  </Form.Group>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <Button
                      autoFocus
                      onClick={handleClose}
                      variant="outlined"
                      color="error"
                    >
                      Cancel
                    </Button>
                  </div>
                  <div>
                    {cusData === "" ? (
                      <Button disabled variant="outline-secondary">
                        Submit
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        type="Submit"
                        style={{ width: "180px" }}
                        onClick={handleSubmit}
                      >
                        Submit
                      </Button>
                    )}
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
