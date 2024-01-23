import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { CurrencyContext } from '../context/Context';

const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const {moola} = useContext(CurrencyContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        if (newBudget > totalExpenses) { 
            setNewBudget(event.target.value);
        }else{
            alert("You cannot reduce the budget value lower than the spending");
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {moola}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
