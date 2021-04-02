import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);

    return(
        <div className="alert bg-secondary text-white text-center">
            <span className="d-block mb-0">${budget}</span>
            <small>Budget</small>
        </div>
    );
}

export default Budget;