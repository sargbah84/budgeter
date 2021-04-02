import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Spent = () => {
    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return(
        <div className="alert bg-success text-white text-center">
            <span className="d-block mb-0">${totalExpenses}</span>
            <small>Spent</small>
        </div>
    )
}

export default Spent;