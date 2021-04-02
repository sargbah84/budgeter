import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const EditBudget = () => {
    const {dispatch} = useContext(AppContext)
    const [total, setBudget] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        
        dispatch({
            type: 'EDIT_BUDGET',
            payload: parseInt(total)
        });

        hideModel();

    }

    const hideModel = () => {
        let element = document.getElementById('editBudget');
        element.classList.add('d-none');
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-2 text-center">
                <input
                    type="text"
                    required="required"
                    className="form-control"
                    placeholder="Eg. 3000"
                    onChange={(event) => setBudget(event.target.value)}
                    value={total}
                    id="budget"
                ></input>
            </div>
            <div className="d-grid">
                <button
                    type="submit"
                    className="btn btn-danger btn-block"
                >Update</button>
            </div>
            <button 
                type="button" 
                className="btn btn-link" 
                onClick={hideModel}
                >Close Popup</button>
        </form>
    )
}

export default EditBudget;