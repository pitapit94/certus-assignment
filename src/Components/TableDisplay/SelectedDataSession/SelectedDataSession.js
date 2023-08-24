import React from 'react';
import './SelectedDataSession.css';

const SelectedDataSession =({accumulatedAmount})=>{

  return (
      <div className='bottom-container'>
        <ul>
          <tr style={{color: 'blue' }}> SelectedDataSession </tr>
          {accumulatedAmount !== 0 && <tr> {accumulatedAmount.toFixed(2)} </tr>}
        </ul>
      </div>
  )
}
export default SelectedDataSession;