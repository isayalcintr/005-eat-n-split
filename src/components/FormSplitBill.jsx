import { useState } from "react";
import Button from "./Button";
function FormSplitBill({ friend, updateBalance }) {
  const [billValue, setBillValue] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [friendExpense, setFriendExpense] = useState(0);
  const [payer, setPayer] = useState("you");

  const handleExpenseChange = (e) => {
    let value = Math.abs(Number(e.target.value));
    if (value > billValue) {
      value = billValue;
    }
    if (payer === "you") {
      setFriendExpense(Math.abs(billValue - value));
      setYourExpense(Math.abs(value));
    } else if (payer === "friend") {
      setYourExpense(Math.abs(billValue - value));
      setFriendExpense(Math.abs(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      friend.balance,
      yourExpense,
      friendExpense,
      payer === "you"
        ? friend.balance + Number(friendExpense)
        : friend.balance - Number(yourExpense)
    );
    updateBalance(
      friend.id,
      payer === "you"
        ? friend.balance + Number(friendExpense)
        : friend.balance - Number(yourExpense)
    );
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with X</h2>

      <label>💰 Bill Value</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={billValue}
        onChange={(e) => setBillValue(e.target.value)}
      />

      <label>🤵 Your expense</label>
      <input
        type="text"
        placeholder="Your expense"
        value={yourExpense}
        onChange={handleExpenseChange}
        {...(payer === "friend" && { disabled: true })}
      />

      <label>🤵 {friend.name}'s expense</label>
      <input
        type="text"
        placeholder={friend.name + "'s expense"}
        value={friendExpense}
        onChange={handleExpenseChange}
        {...(payer === "you" && { disabled: true })}
      />

      <label>💰 Who is paying the bill</label>
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="you">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
