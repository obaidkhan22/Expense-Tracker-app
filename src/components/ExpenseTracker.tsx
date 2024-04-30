import ExpenseTable from "./ExpenseTable";
import ExpenseForm from "./ExpenseForm";
import "./ExpenseTracker.css";
const ExpenseTracker = () => {
  const expenses = [
    { description: "Milk", amount: 3, category: "Groceries" },
    { description: "Milk", amount: 3, category: "Utilities" },
    { description: "Milk", amount: 3, category: "Entertainment" },
    { description: "Milk", amount: 3, category: "Utilities" },
  ];
  return (
    <>
      <div className="expense-tracker">
        <ExpenseForm />
        <ExpenseTable expenses={expenses} />
      </div>
    </>
  );
};

export default ExpenseTracker;
