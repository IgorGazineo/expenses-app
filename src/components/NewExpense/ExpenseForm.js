import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const inputChangeHandler = (ident, value) => {
    if (ident === "title") {
      setUserInput((prevState) => {
        return {
          ...prevState,
          enteredTitle: value,
        };
      });
    } else if (ident === "amount") {
      setUserInput((prevState) => {
        return {
          ...prevState,
          enteredAmount: value,
        };
      });
    } else {
      setUserInput((prevState) => {
        return {
          ...prevState,
          enteredDate: value,
        };
      });
    }
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(e) => inputChangeHandler("title", e.target.value)}
          />
          <p>Test: {userInput.enteredTitle}</p>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(e) => inputChangeHandler("amount", e.target.value)}
          />
          <p>Test: {userInput.enteredAmount}</p>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={(e) => inputChangeHandler("date", e.target.value)}
          />
          <p>Test: {userInput.enteredDate}</p>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
