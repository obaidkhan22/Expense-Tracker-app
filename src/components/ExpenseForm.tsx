import { useForm } from "react-hook-form";
import "./ExpenseTracker.css";
import { z } from "zod";
import { categories } from "../categories";
import { zodResolver } from "@hookform/resolvers/zod";

const categoriesValues = ["gorceries", "utilities", "entertainment"] as const;

const schema = z.object({
  description: z
    .string({})
    .min(3, { message: "Description should be at least 3 characters." }),
  amount: z.number({ invalid_type_error: "Amount is required." }),
  category: z.enum(categoriesValues, { message: "Category is required." }),
});

type FormData = z.infer<typeof schema>;
const ExpenseForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
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
            {errors.description && (
              <p className="text-danger">{errors.description.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              {...register("amount", { valueAsNumber: true })}
              type="number"
              max={200}
              placeholder="Amount"
              className="form-control"
            />
            {errors.amount && (
              <p className="text-danger">{errors.amount.message}</p>
            )}
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
              {categories.map((category, index) => (
                <option value={category.value} key={index}>
                  {category.label}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-danger">{errors.category.message}</p>
            )}
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
