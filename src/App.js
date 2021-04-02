import React from 'react';

import Budget from './components/budget';
import Balance from '././components/balance';
import ExpenseList from './components/expenseList';
import AddExpenseForm from './components/addExpenseForm';
import EditBudget from './components/editBudget';
import Spent from './components/spent';

import { AppProvider } from './context/AppContext';
import { TiPlus } from 'react-icons/ti'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {

  const addExpense = function(){
    let element = document.getElementById("addExpenseWrapper");
    element.classList.toggle("d-none");
  }

  const editBudget = () => {
    let element = document.getElementById('editBudget');
    element.classList.toggle('d-none');
  }

  return(
    <AppProvider>
      <div className="main">
        <div className="container">
          <h1 className="mt-3 text-center">React Budget Planner App</h1>
          <div className="row g-1 mt-3">
            <div className="col">
              <Budget />
            </div>
            <div className="col">
              <Balance />
            </div>
            <div className="col">
              <Spent />
            </div>
          </div>
          <h3 className="mt-3">Expenses</h3>
          <div className="py-3 d-none" id="addExpenseWrapper">
            <div className="row">
              <div className="col-sm">
                <AddExpenseForm />
              </div>
            </div>
          </div>
          <div className="clearfix">
            <div className="row">
              <div className="col-sm">
                <ExpenseList />
              </div>
            </div>
            <button 
              type="button" 
                className="btn btn-link mt-3"
                onClick={editBudget}
                >Edit Budget</button>
          </div>
          <div className="position-fixed top-0 bottom-0 start-0 end-0 bg-modal d-none" id="editBudget">
            <div className="w-50 bg-white mx-auto p-4 shadow mt-5">
              <h3 className="mt-3">Edit Budget</h3>
              <div className="clearfix">
                <EditBudget />
              </div>
            </div>
          </div>
        </div>
        <div className="fixed-bottom p-2">
          <div className="container">
            <button 
              type="button" 
                className="btn btn-primary rounded-circle shadow fs-3 mb-4 float-end" 
                  onClick={addExpense}
                  ><TiPlus /></button>
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;