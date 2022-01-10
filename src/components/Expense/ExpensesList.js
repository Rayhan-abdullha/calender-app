import React, { useState } from 'react';
import Expense from './Expense';
import SelectYear from './SelectYear';

const ExpensesList = (props) => {
    const [selectYear, setSelectYear] = useState('2020')
    const handleOnChange = (e) => {
        setSelectYear(e.target.value);
    }

    const filterExpense = props.dataDummy.filter(data => {
        const filter = data.date.getFullYear().toString() === selectYear;
        return filter
    })
    return (
        <div className="expensesList bg-light w-50 m-auto p-4 mt-4 rounded">
            <SelectYear selected={selectYear} selectedYearChanges={handleOnChange}/>
            {
                filterExpense.length === 0 && <p className="no-item">Find No Item</p>
            }
            {
                filterExpense.length > 0 && filterExpense.map(data => <Expense expenses={data}/>)
            }
        </div>
    ); 
};

export default ExpensesList;