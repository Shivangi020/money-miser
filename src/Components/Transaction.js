import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const { id, text, amount ,mode} = transaction;
  const sign = amount < 0 ? "-" : "+";

  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      {text}
      <div className="transaction-detail">
      <span className="payment-mode">{mode}</span>
      <span>
        {sign}${Math.abs(amount)}
      </span>
      </div>
      <button className="delete-btn" onClick={() => deleteTransaction(id)}>
        x
      </button>
    </li>
  );
}

export default Transaction;
