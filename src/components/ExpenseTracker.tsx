import ExpenseTable from "./ExpenseTable";
import ExpenseForm from "./ExpenseForm";
import "./ExpenseTracker.css";
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
const ExpenseTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 3, category: "Groceries" },
    {
      id: 5,
      description: "Movie Ticket",
      amount: 20,
      category: "Entertainment",
    },
    { id: 3, description: "Pepsi", amount: 7, category: "Groceries" },
    { id: 4, description: "Pencil", amount: 2, category: "Utilities" },
  ]);

  const filteredExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <>
      <div className="expense-tracker">
        <ExpenseForm
          onAdd={(data) =>
            setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
          }
        />
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
        <ExpenseTable
          expenses={filteredExpenses}
          onDelete={(expenseId) =>
            setExpenses(expenses.filter((e) => e.id !== expenseId))
          }
        />
      </div>
    </>
  );
};

export default ExpenseTracker;
