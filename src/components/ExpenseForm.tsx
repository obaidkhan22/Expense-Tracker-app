import { useForm } from "react-hook-form";
import "./ExpenseTracker.css";

const ExpenseForm = () => {
  const { register, reset, handleSubmit } = useForm();
  return (
    <div className="wrapper">
      <div className="form">
        <h1>Expense Tracker</h1>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            reset();
          })}
        >
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              {...register("description")}
              type="text"
              className="form-control"
              id="description"
              placeholder="Description"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              {...register("amount")}
              type="number"
              min={3}
              max={200}
              placeholder="Amount"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              {...register("category")}
              id="category"
              className="form-select"
            >
              <option value=""></option>
              <option value="groceries">Groceries</option>
              <option value="utilities">Utilities</option>
              <option value="entertainment">Entertainment</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
