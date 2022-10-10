import { createContext, useState } from "react";
export const CartContext = createContext();
export const Provider = ({ children }) => {
  const [dropdn, setDropdn] = useState("");
  const [tempVal, setTempVal] = useState([]);
  const handleDrop = (value) => {
    setDropdn(value);
  };
  return (
    <CartContext.Provider
      value={{ dropdn, handleDrop, setDropdn, tempVal, setTempVal }}
    >
      {children}
    </CartContext.Provider>
  );
};
