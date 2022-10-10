import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import { UserAuthContextProvider } from "./context/UserAuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { HomePage } from "./components/HomePage";
import Login from "./components/Login";
import PhoneLogin from "./components/PhoneLogin";
import SignUp from "./components/SignUp";
import { Container, Navbar, Row, Col } from "react-bootstrap";

import Nav from "react-bootstrap/Nav";
import AddTask from "./components/AddTask";
import { createContext } from "react";

const myData = createContext();

function App() {
  return (
    <div>
      <div></div>
      <Container>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
                <Route
                  path="/home"
                  element={
                    <ProtectedRoute>
                      <HomePage />
                    </ProtectedRoute>
                  }
                />
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/phonelogin" element={<PhoneLogin />} />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
