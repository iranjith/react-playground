import React from 'react'
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
    description: z.string().min(10,{message:'Description must be at least 5 characters'}),
    amount: z.number({invalid_type_error:'Amount field is required.'}).min(10,{message:'Amount must be greater than 10'}),
    
  });

const ExpenseForm = () => {
  return (
    <div>ExpenseForm</div>
  )
}

export default ExpenseForm