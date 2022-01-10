import React from 'react';

const Expense = (props) => {
    const {title, amount, date} = props.expenses

    const year = date.getFullYear()
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    return (
        <div className="border mb-4">
            <table className="table table-hover">
            <thead>
                <tr>
                <th scope="col">Date</th>
                <th scope="col">Title</th>
                <th scope="col">Amount</th>
                <th scope="col">Button</th>
                </tr>
            </thead>
            <tbody>
                <tr className="table-active">
                <th scope="row">
                    <p>{month}</p>
                    <p>{year}</p>
                    <p>{day}</p>
                </th>
                <td>{title}</td>
                <td>{amount}</td>
                <td>
                    <button className="btn btn-success">change</button>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    );
};

export default Expense;