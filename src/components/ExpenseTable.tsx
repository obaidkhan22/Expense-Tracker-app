import Expense from "./entities/Expense";

interface Props {
  expenses: Expense[];
}
const ExpenseTable = ({ expenses }: Props) => {
  return (
    <table className="table w-50">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.category}>
            <td>{expense.description}</td>
            <td>${expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button className="btn btn-outline-danger">Delete</button>
            </td>
          </tr>
        ))}
        <tr>
          <th>Total</th>
          <th>
            $
            {expenses
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default ExpenseTable;
