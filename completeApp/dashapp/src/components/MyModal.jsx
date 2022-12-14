import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddTask from "./AddTask";

export const MyModal = () => {
  const [show, setShow] = useState(false);
  const [taskId, setTaskId] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getTaskIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setTaskId(id);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Data
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddTask id={taskId} setTaskId={setTaskId} />
        </Modal.Body>
      </Modal>
    </>
  );
};
