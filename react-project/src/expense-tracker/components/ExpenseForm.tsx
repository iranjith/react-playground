import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { categories } from "../../App";

const schema = z.object({
  description: z
    .string()
    .min(10, { message: "Description must be at least 5 characters" }),
  amount: z
    .number({ invalid_type_error: "Amount field is required." })
    .min(10, { message: "Amount must be greater than 10" }),
});

const ExpenseForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input id="amount" type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select name="" id="category" className="form-select">
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div className="btn btn-primary mt-3">Submit</div>
      </div>
    </form>
  );
};

export default ExpenseForm;
