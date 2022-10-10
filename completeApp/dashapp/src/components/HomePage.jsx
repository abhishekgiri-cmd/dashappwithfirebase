import { Button } from "@mui/material";
import React, { createContext, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import TaskList from "./TaskList";
import { MyModal } from "./MyModal";
import "./style.css";
import { Charts } from "./Charts";

export const HomePage = () => {
  const [taskId, setTaskId] = useState("");
  const { user, logOut } = useUserAuth();

  const getTaskIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setTaskId(id);
  };
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <div>
            <Navbar.Brand href="#home">My Health App</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <div className="user ">
                  <p id="p1">user:{user && user.email.split("@")[0]}</p>{" "}
                </div>
                <div style={{ marginRight: "10px" }}>
                  <Button variant="contained" onClick={handleLogOut}>
                    Log Out
                  </Button>
                </div>

                <div>
                  <MyModal />
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>

      <div className="mycharts">
        <div className="div1">
          <Container>
            <Row>
              <Col>
                <Charts />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="div2">
          <Container>
            <Row>
              <Col>
                <TaskList getTaskId={getTaskIdHandler} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};
