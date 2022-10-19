import { createContext, useState } from "react";
export const CartContext = createContext();
export const Provider = ({ children }) => {
  const [dropdn, setDropdn] = useState("");
  const [tempVal, setTempVal] = useState([]);
  const [dropValue, setDropValue] = useState("");
  const [unit, setUnit] = useState("");
  const [currDate, setCurrDate] = useState("");
  const [cusData, setCusData] = useState("");
  const [val, setVal] = useState("");
  const [date, setDate] = useState("");
  const handleDrop = (value) => {
    setDropdn(value);
  };
  return (
    <CartContext.Provider
      value={{
        dropdn,
        handleDrop,
        setDropdn,
        tempVal,
        setTempVal,
        setDropValue,
        dropValue,
        currDate,
        setCurrDate,
        unit,
        setUnit,
        cusData,
        setCusData,
        val,
        setVal,
        date,
        setDate,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
