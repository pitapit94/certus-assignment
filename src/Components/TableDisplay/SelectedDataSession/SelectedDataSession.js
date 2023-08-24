import React, {useState, useEffect} from 'react';
import './SelectedDataSession.css';

const SelectedDataSession =({selectedTransactions})=>{

  const [accumulatedAmount, setAccumulatedAmount] = useState(0);

  console.log("PreUseEffect", selectedTransactions)
  useEffect(() => {
    console.log("reRendering selectedTransaction", selectedTransactions)
    if (!selectedTransactions) {
      console.log("not running")
      return
    }
    let amount = selectedTransactions.reduce((accumulator, currentValue) => accumulator.amount + currentValue.ammount)
    console.log(amount)
    setAccumulatedAmount(amount)
  }, [selectedTransactions])
  

  return (
      <div className='bottom-container'>
        <ul>
          <tr style={{color: 'blue' }}> SelectedDataSession </tr>
          {accumulatedAmount !== 0 && <tr> {accumulatedAmount.toFixed(2)} </tr>}
          {console.log("inreturn, ", selectedTransactions)}
        </ul>
      </div>
  )
}
export default SelectedDataSession;