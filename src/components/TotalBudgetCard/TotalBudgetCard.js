import React from "react";
import { useBudgets } from "../../contexts/BudgetContext.js";
import BudgetCard from "../BudgetCard/BudgetCard.js";

const TotalBudgetCard = () => {
  const { expenses, budgets } = useBudgets();
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);
  const max = budgets.reduce((total, budget) => total + budget.max, 0);

  if (max === 0) {
    return null;
  }
  return <BudgetCard name="Total" amount={amount} gray max={max} hideButtons />;
};

export default TotalBudgetCard;
