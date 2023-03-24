const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      const new_transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
      return { ...state, transactions: new_transactions };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    default:
      return state;
  }
};

export default AppReducer;
