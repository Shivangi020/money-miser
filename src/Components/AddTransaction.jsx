import React ,{useState} from 'react'

function AddTransaction() {
    const [text ,setText] = useState('');
    const [amount ,setAmount] = useState(0);

  return (
    <>
        <h3>Add new transaction</h3>
      <form >
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
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction