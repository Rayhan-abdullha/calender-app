import React, { useState } from 'react';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    // title change handler
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    // amoumt change handler
    const onChangeAmount = (e) => {
        setAmount(e.target.value);
    }
    // date change handler
    const onChangeDate = (e) => {
        setDate(e.target.value);
    }
    // submit form
    const handleSubmit = (event) => {
        event.preventDefault()
        const expenseData = {
            title,
            amount,
            date: new Date(date)
        }
        props.onSaveExpenseData(expenseData);
        setTitle('')
        setAmount('')
        setDate('')
    }
    return (
        <form className="expense-form w-50 m-auto bg-light p-4 rounded" onSubmit={handleSubmit}>
            <h4 className="border-bottom pb-2">Add Expense</h4>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Title</label>
                <input type="text" className="form-control" id="titleText" aria-describedby="emailHelp" onChange={onChangeTitle} value={title}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Amount</label>
                <input type="number" min="0.01" step="0.01" className="form-control" id="exampleInputPassword1" onChange={onChangeAmount} value={amount}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputDate" className="form-label">Date</label>
                <input type="date" min="2017-04-01" max="2021-12-09" className="form-control" id="exampleInputDate" onChange={onChangeDate} value={date}/>
            </div>
            <button type="submit" className="btn btn-primary">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;