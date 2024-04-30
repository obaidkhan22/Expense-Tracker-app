import ExpenseTable from "./ExpenseTable";
import ExpenseForm from "./ExpenseForm";
import "./ExpenseTracker.css";
import { useState } from "react";
const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 3, category: "Groceries" },
    { id: 2, description: "Milk", amount: 3, category: "Utilities" },
    { id: 3, description: "Milk", amount: 3, category: "Entertainment" },
    { id: 4, description: "Milk", amount: 3, category: "Utilities" },
  ]);
  return (
    <>
      <div className="expense-tracker">
        <ExpenseForm
          onAdd={(data) =>
            setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
          }
        />
        <ExpenseTable
          expenses={expenses}
          onDelete={(expenseId) =>
            setExpenses(expenses.filter((e) => e.id !== expenseId))
          }
        />
      </div>
    </>
  );
};

export default ExpenseTracker;
