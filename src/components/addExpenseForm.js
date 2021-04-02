import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { TiPlus } from 'react-icons/ti'
import {v4 as id } from 'uuid';

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        const expense = {
            id: id(),
            name: name,
            cost: parseInt(cost),
        }

        event.target.reset();

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        })
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="row g-2">
                <div className="col-6">
                    <input 
                        type='text'
                        required='required'
                        className='form-control'
                        placeholder="Eg. Cooking"
                        onChange={(event) => setName(event.target.value)}
                        id='name'
                    ></input>
                </div>
                <div className="col-4">
                    <input 
                        type='text'
                        required='required'
                        className='form-control'
                        placeholder="Eg. 50"
                        onChange={(event) => setCost(event.target.value)}
                        id='cost'
                    ></input>
                </div>
                <div className="col-2 d-grid">
                    <button 
                        type='submit' 
                        className="btn btn-primary btn-block"
                    ><TiPlus /></button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm;