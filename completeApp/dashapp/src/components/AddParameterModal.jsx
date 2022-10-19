import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import { useContext } from "react";
import { Alert, Form, InputGroup } from "react-bootstrap";
import { CartContext } from "../context/Mydata";
import Taskmethod from "../method/Taskmethod";

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

export const AddParameterModal = () => {
  const [cusData, setCusData] = useState("");
  const [unit, setUnit] = useState("");
  // console.log("unit :", unit);

  const [message, setMessage] = useState({ error: false, msg: "" });
  const { handleDrop, dropdn, date, val, setDate, setVal } =
    useContext(CartContext);
  const [open, setOpen] = React.useState(false);
  const [disable, setDisable] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
    window.location.reload();
    setCusData();
    setDate("");
    setVal("");
    setUnit("");
    setOpen(false);
    setMessage("");
  };

  return (
    <div>
      <Button onClick={handleClickOpen} variant="contained" sx={{ mr: 2 }}>
        Add Parameter
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Add Parameter
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div style={{ marginTop: "10px" }}>
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
                </div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};
