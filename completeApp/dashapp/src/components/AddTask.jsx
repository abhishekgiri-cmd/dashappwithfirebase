import React, { useContext, useState } from "react";
import { Alert } from "react-bootstrap";
import { CartContext } from "../context/Mydata";
import { CustomData } from "./CustomData";
import { MyDropdown3 } from "./MyDropDown3";
import { MyDropdown5 } from "./MyDropDown5";

import { Oxygen } from "./Oxygen";
import "./style.css";
import { Temperature } from "./Temperature";
const AddTask = ({ id, setTaskId }) => {
  const [drop, setDrop] = useState("");
  const { handleDrop, dropdn } = useContext(CartContext);
  const [message, setMessage] = useState({ error: false, msg: "" });

  return (
    <div>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}
        <div>
          <h6 style={{ marginBottom: "25px" }}>
            You are adding <u>{drop} </u> as health data
          </h6>
          <div className="dropdown">
            <MyDropdown5 setDrop={setDrop} drop={drop} />
            <br />

            <br />
            <div>
              {dropdn === "temperature" ? (
                <Temperature />
              ) : dropdn === "oxygen" ? (
                <Oxygen />
              ) : (
                <CustomData />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddTask;
