import React from "react";
import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  console.log(props, "In expenses WOW");
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  console.log(props.onExpensesFilter(filteredYear), "o bally");
  const filteredExpense = props.items.filter(
    (expensefilter) =>
      // console.log(expensefilter, "o yes Expense")
      expensefilter.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
};

export default Expenses;
