import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { CurrencyContext } from '../context/Context';

const ExpenseTotal = () => {
    const {moola} = useContext(CurrencyContext);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {moola}{totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;
