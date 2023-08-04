import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // console.log(props.onSaveExpenseData, "form waly compo me");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  //using only one state
  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     date: "",
  //     amount: "",
  //   });
  //   const titleChangeHandler = (event) => {
  //     setUserInput({
  //       ...userInput,
  //       title: event.target.value,
  //     });
  //   };
  const titleChange = (event) => {
    setTitle(event.target.value);
    // console.log(event.target.value);
  };
  const dateChange = (event) => {
    setDate(event.target.value);
    //   console.log(event.target.value);
  };
  const amountChange = (event) => {
    setAmount(event.target.value);
    // console.log(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const object = {
      title: title,
      date: new Date(date),
      amount: +amount,
    };
    props.onSaveExpenseData(object);
    // console.log(object, "totalData");
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChange} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChange}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChange}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
