const AppReducer = (state,action) =>{
          switch(action.type){
            case 'DELETE_TRANSACTION':
              const new_transactions = state.transactions.filter((transaction)=>transaction.id !== action.payload)
              return {...state,transactions:new_transactions }
            default:
                return state
          }
}


export default AppReducer