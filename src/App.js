
import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpense } from './Components/IncomeExpense';
import { TransectionList } from './Components/TransectionList';
import { AddTransection } from './Components/AddTransection';
function App() {
  return (
   <div>
    <Header/>
<div className="container">
  <Balance/>
  <IncomeExpense/>
  <TransectionList/>
  <AddTransection/>
  </div>
</div>
    
  );
}

export default App;
