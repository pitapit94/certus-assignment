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
  const [accumulatedAmount, setAccumulatedAmount] = useState(0); // sets the state of the total amounts selected
  
  const selectAccount = (accountNumber) =>{
    setSelectedAccount(accountNumber ? accountNumber : {...initialAccountState})
    accountNumber && setSelectedAccount(accountNumber) 
    console.log("setSelectedAccNumber", accountNumber)
  }
  
  const addToAccumulatedAmount = (amount) =>{
    setAccumulatedAmount(accumulatedAmount + amount)
  }

  const unmatch = ()=>{
    setAccumulatedAmount(0)
    console.log(accumulatedAmount)
  }

    console.log('app.js',accumulatedAmount)

  return (
    <div className="App">
      <header className="header">CERTUS.</header>
      <div className="container">
        <main className="main">
          <TableDisplay className="TableDisplay" account ={selectedAccount} addToAccumulatedAmount ={ addToAccumulatedAmount }></TableDisplay>
          <SelectedDataSession className="SelectedDataSession" accumulatedAmount={accumulatedAmount}></SelectedDataSession>
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
