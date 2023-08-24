import React from 'react';
import './Session.css';

const Session = ({account}) => {

  const slicedTransactions = account.transactions && account.transactions.slice(0, 10);

  const sumAmount = slicedTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  const sumPositiveAmounts = slicedTransactions.reduce((acc, transaction) => {
      if (transaction.amount > 0) {
          return acc + transaction.amount;
      }
      return acc;
  }, 0);

  const sumNegativeAmounts = slicedTransactions.reduce((acc, transaction) => {
      if (transaction.amount < 0) {
          return acc + transaction.amount;
      }
      return acc;
  }, 0);
console.log(account.transactions&& account.transactions.length)
  return (
      sumAmount !== 0 &&
      < div className="container">
          <thead>SESSION</thead>
          <tbody>
              <td>
                  <tr>positive</tr>
                  <tr>negative</tr>
                  <tr>Net amount</tr>
                  <tr>Enteries remaining</tr>
                  <tr>Amount remaining</tr>
              </td>
              <td>
                  <tr>{sumPositiveAmounts.toFixed(2)}</tr>
                  <tr>{sumNegativeAmounts.toFixed(2)}</tr>
                  <tr>{(sumPositiveAmounts + sumNegativeAmounts).toFixed(2)}</tr>
                  <tr>{account.transactions&& account.transactions.length}</tr>
                  <tr>{sumAmount.toFixed(2)}</tr>
              </td>
          </tbody> 
      </div>
  )

} 
export default Session;