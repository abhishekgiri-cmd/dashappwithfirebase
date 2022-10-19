import moment from "moment";
import React, { useState } from "react";

export const MyDate = () => {
  function selectDate2() {
    let selectDate = [
      moment().subtract(10, "days").calendar(),
      moment().subtract(6, "days").calendar(),
      moment().subtract(3, "days").calendar(),
      moment().subtract(1, "days").calendar(),
      moment().calendar(),
      moment().add(1, "days").calendar(),
      moment().add(3, "days").calendar(),
      moment().add(10, "days").calendar(),
    ];
    let n = selectDate.length;

    var date = "";
    const MyDate2 = new Date().toLocaleDateString();
    for (var i = 0; i <= n; i++) {
      date += date[i];
    }
    console.log(date[i]);
    if (date[i] !== MyDate2) {
      console.log("Item Submited on 10 days ago", date[i]);
    }
    const [Date, setDate] = date;
  }
  selectDate2();
  return (
    <div>
      <h1> selected Date is {Date}</h1>
    </div>
  );
};
