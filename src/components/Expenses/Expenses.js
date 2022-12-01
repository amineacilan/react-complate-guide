import React, { useState } from "react";
import ExpenseItem from "./Expenseltem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses= (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const filterChangeHandler = (x) => {
    setFilteredYear(x);
    /* console.log(setFilteredYear, filteredYear); */
  };

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
      </div>
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
