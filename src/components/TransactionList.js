import React, { useContext } from "react";
import { Transaction } from "./Transaction";

import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  let hideVar = true;
  function hideHistory() {
    if (hideVar) {
      document.getElementById("transactionList-id").style.display = "none";
      hideVar = false;
    } else {
      document.getElementById("transactionList-id").style.display = "block";
      hideVar = true;
    }
  }

  return (
    <>
      <h3 id="history-h3-id" onClick={hideHistory}>
        History
      </h3>
      <ul id="transactionList-id" className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
