import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { CurrencyContext } from '../context/Context';

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);
    const {moola} = useContext(CurrencyContext);


    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {moola}{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
