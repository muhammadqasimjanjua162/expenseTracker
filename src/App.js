import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const initilExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(initilExpenses);
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  const addExpenseinApp = (expensess) => {
    console.log(expensess, "inapp");
    console.log("In App js");
    //pre is the expenses in the initialstate
    setExpenses((pre) => [...pre, expensess]);
  };
  console.log("Expenses in app", expenses);
  const FilteredExpenses = (year) => {
    console.log(year, "Filtered Year in App Js");
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseinApp} />
      <Expenses items={expenses} onExpensesFilter={FilteredExpenses} />
    </div>
  );
};

export default App;
