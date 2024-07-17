import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (event) => {
    event.preventDefault();

    if (text.trim().length > 0) {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount,
      };

      addTransaction(newTransaction);
      setText("");
      setAmount(0);
    }
  };

  function visibleHistory() {
    document.getElementById("transactionList-id").style.display = "block";
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            className="input-item"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
          </label>
          {/* (negative - expense, positive - income)  */}
          <p className="note">add - before amount for expense</p>
          <input
            type="number"
            className="input-amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Enter amount..."
          />
          <div>
            <button className="btn" onClick={visibleHistory}>
              Add transaction
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
