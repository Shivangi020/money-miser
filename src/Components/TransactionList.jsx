import React ,{useContext}from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction'

function TransactionList() {
  const {transactions} = useContext(GlobalContext)
  console.log(transactions)
  return (
  <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction)=>{
           return <Transaction transaction={transaction} key={transaction.id}/>
        })}

      </ul>
  </div>
  )
}

export default TransactionList