 const AppReducer=(state,action)=>{

    switch(action.type){
        case "add":
            return {...state,transactions:[...state.transactions,action.payload]}
        case "DELETE":
            return {
                ...state,
                transactions:state.transactions
                    .filter(transaction => transaction.id !== action.payload)
            }
        default:
         return {state}


    }
}
export default AppReducer