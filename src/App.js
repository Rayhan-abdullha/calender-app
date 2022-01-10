import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm/ExpenseForm'
import ExpensesList from './components/Expense/ExpensesList';

// dummyData
const DummyData = [
    {id: 'c0', title: 'A Car', amount: 294.66, date: new Date(2020, 2, 23)},
  ]

function App() {
  const [dummyData, setDummyData] = useState(DummyData)

  const saveExpensesData = (expenseData) => {
    const expenses = {
      ...expenseData,
      id: `c${dummyData.length}`
    }
    setDummyData(prevData => {
      return [...prevData, expenses]
    });
  } 
  
  return (
    <div className="App mt-5">
      <ExpenseForm onSaveExpenseData={saveExpensesData}/>
      <ExpensesList dataDummy={dummyData}/>
    </div>
  );
}

export default App;
