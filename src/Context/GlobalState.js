import React ,{createContext,useReducer} from "react";
import AppReducer from './AppReducer.js'

// INITIAL STATE
const initialState = {
    transactions:[
          { id: 1, text: 'Chocolate', amount: -20 ,mode:'Cash'},
          { id: 2, text: 'Stipend', amount: 300 ,mode:'Online' },
          { id: 3, text: 'Book', amount: -10 ,mode:'Cash' },
          { id: 4, text: 'Camera', amount: -150 ,mode:'Online' },
     
        ]
}

// Create Context 
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({children}) =>{

    const [state , dispatch] = useReducer(AppReducer , initialState)
    
// Actions
   const deleteTransaction = (id)=>{
    dispatch({
        type:'DELETE_TRANSACTION',
        payload:id
    })
   }

   const addTransaction = (new_transaction) =>{
    dispatch({
        type:'ADD_TRANSACTION',
        payload:new_transaction
    })
   }

    return <GlobalContext.Provider value={{transactions:state.transactions,deleteTransaction,addTransaction}}>
        {children}
    </GlobalContext.Provider>
}