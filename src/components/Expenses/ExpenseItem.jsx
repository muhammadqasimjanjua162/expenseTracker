import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  console.log("props in expense item", props.title);
  // console.log("hi");
  // console.log("Evaluated Top on state", title);

  // console.log("Evaluated below on state", title);
  // let title = props.title;

  return (
    <>
      {
        //console.log("Evaluated below on state in return", title)
      }

      <Card className="expense-item">
        <ExpenseDate date={new Date(props.date)} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </>
  );
};

export default ExpenseItem;
