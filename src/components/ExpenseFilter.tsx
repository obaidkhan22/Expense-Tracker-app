import { useForm } from "react-hook-form";
import { categories } from "../categories";
interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  const { register } = useForm();
  return (
    <div className="mb-3 w-50">
      <select
        {...register("category")}
        id="category"
        className="form-select"
        onChange={(event) => onSelectCategory(event.currentTarget.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option value={category.value} key={index}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
