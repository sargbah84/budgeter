import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Balance = () => {
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'danger' : 'primary';

    return (
        <div className={`alert bg-${alertType} text-white text-center`}>
            <span className="d-block mb-0">${budget - totalExpenses}</span>
            <small>Balance</small>
        </div>
    );
}

export default Balance;