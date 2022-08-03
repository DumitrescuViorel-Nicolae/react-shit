import "../css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [titleHandle, setTitleHandle] = useState(props.title);

  const titleHandler = (event) => {
    setTitleHandle(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setTitle(titleHandle);
  }


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <input type = 'text ' onChange={titleHandler} />
      <button type="submit" onClick = {titleChangeHandler}>Change</button> */}
    </Card>
  );
};
export default ExpenseItem;
