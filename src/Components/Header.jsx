import React from 'react'
import { GiTakeMyMoney } from 'react-icons/gi';

function Header() {
  return (
    <div className='header'>
      <GiTakeMyMoney className='money-icon'/>
      <h2>
     Money Miser
    </h2>
    </div>
    
  )
}

export default Header