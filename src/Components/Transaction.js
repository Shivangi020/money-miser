import React from 'react'

function Transaction({transaction}) {
    const {text,amount} = transaction
    const sign = amount < 0? '-' :'+'
  return (
    <li className={amount <0 ?'minus':'plus'}>
    {text} <span>{sign}${Math.abs(amount)}</span><button className="delete-btn">x</button>
  </li> 
  )
}

export default Transaction