import moment from "moment";
import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Datepicker() {
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(moment().format("DD/MM/YYYY"));

  return <DatePicker selected={date} onChange={(date) => setDate(date)} />;
}
