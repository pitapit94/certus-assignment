import './App.css';
import React, {useState} from 'react';

import TableDisplay from './Components/TableDisplay/TableDisplay';
import SelectedDataSession from './Components/TableDisplay/SelectedDataSession/SelectedDataSession';
import Session from './Components/Session/Session';
import SearchBox from './Components/SearchBox/SearchBox';

import Accounts from './Data/Accounts';


const initialTransactionState = [
  {
      amount: null,
      date: '',
      otherParty: '',
      particulars: '',
      analysisCode: '',
      reference: '',
      serialNumber: '',
      branch: '',
      notes: ''
  }
]

const initialAccountState = {
  id: 0,
  accountNumber: '',
  transactions : initialTransactionState
}  

function App() {

  const [selectedAccount, setSelectedAccount] = useState({...initialAccountState}); //sets the state to an empty state to make sure the object exists
  const [selctedTransactions, setSelctedTransactions] = useState([]); // sets the state of the total amounts selected
  
  const selectAccount = (accountNumber) =>{ 
    setSelectedAccount(accountNumber ? accountNumber : {...initialAccountState})
    accountNumber && setSelectedAccount(accountNumber) 
    console.log("setSelectedAccNumber", accountNumber)
  } //Selects the account number within the json object
  
  const addToSelectedTransactions = (transaction) => {
    console.log("adding", selctedTransactions)
    if (selctedTransactions.find(el => el.transactionId === transaction.transactionId)) {
      return;
    }
    console.log("do setting")
    setSelctedTransactions(current => [...current, transaction])
  }// Selects the transactions and pushes the transaction id to the array of selected transactions

  const unmatch = ()=>{
    setSelctedTransactions(0)
    console.log(selctedTransactions)
  } //sets the selcted transaction amount sum to 0

    console.log('app.js',selctedTransactions)

  return (
    <div className="App">
      <header className="header">CERTUS.</header>
      <div className="container">
        <main className="main">
          <TableDisplay className="TableDisplay" account ={selectedAccount} addToSelectedTransactions={ addToSelectedTransactions }></TableDisplay>
          <SelectedDataSession className="SelectedDataSession" selctedTransactions={selctedTransactions}></SelectedDataSession>
          <button onClick={ unmatch }>Unmatch</button>
        </main>
        <div className="sidebar">
          <SearchBox className="SearchBox" selectAccount={ selectAccount } accounts={ Accounts }></SearchBox>
          <Session className="Total" account={selectedAccount}></Session>
        </div>
      </div>
    </div>
  );
}

export default App;
