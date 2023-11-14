import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm.js";


const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
      const expenseData={
        ...enteredExpenseData,
        id: Math.random().toString()
      };
      //console.log(expenseData);
      props.onAddingExpense(expenseData); 
    };
  
    return <div className="new-expense">
      <ExpenseForm onSavingExpenseData={saveExpenseDataHandler}/>
    </div>
};

export default NewExpense