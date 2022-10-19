import { Button } from "@mui/material";
import React, { createContext, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import TaskList from "./TaskList";
import { MyModal } from "./MyModal";
import "./style.css";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";

import { AddParameterModal } from "./AddParameterModal";
import { AddDataModal } from "./AddDataModal";

export const HomePage = () => {
  const [taskId, setTaskId] = useState("");
  const { user, logOut } = useUserAuth();

  const getTaskIdHandler = (id) => {
    // console.log("The ID of document to be edited: ", id);
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
                  <div>
                    <AccountCircleSharpIcon />
                  </div>
                  <div>
                    <h5 id="p1">{user && user.email.split("@")[0]}</h5>{" "}
                  </div>
                </div>

                <div>
                  <AddParameterModal />
                </div>
                <div>
                  <AddDataModal />
                </div>
                <div style={{ marginRight: "10px" }}>
                  <Button variant="outlined" onClick={handleLogOut}>
                    Log Out
                  </Button>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>

      <div className="mycharts">
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
