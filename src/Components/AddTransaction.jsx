import React ,{useContext, useState} from 'react'
import { GlobalContext } from '../Context/GlobalState';

function AddTransaction() {
  const {addTransaction} = useContext(GlobalContext)

    const [text ,setText] = useState('');
    const [amount ,setAmount] = useState(0);
    const [mode,setMode] = useState('Cash')

   const formSubmit = (e)=>{
    e.preventDefault();
    const new_transaction = {
      id: Math.floor(Math.random() * 10000000),
      text,mode,
      amount :parseInt(amount)
    }
    addTransaction(new_transaction)
   }

  return (
    <>
        <h3>Add new transaction</h3>
      <form onSubmit={formSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." onChange={(e)=>setText(e.target.value)} value={text}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        </div>

        <div className='form-control'>
          <label htmlFor='mode' className='mode'>Payment Mode</label><br/>
          <input type='radio' name='mode' htmlFor='cash' value='Cash' onChange={(e)=>setMode(e.target.value)}></input>
          <label id='cash'>Cash</label>
          <input type='radio' name='mode' htmlFor='online'  value="Online" onChange={(e)=>setMode(e.target.value)}></input>
          <label htmlFor="online">Online</label>
        </div>

        <button className="btn" >Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction