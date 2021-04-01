export const initialState = {
    basket: [], 
    loggedInUser: null
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket, action.item]
            }
        case 'SET_LOGIN':
            return {
                ...state,
                loggedInUser: action.user
            }
        case 'REMOVE_FROM_CART':
            let newcart = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if(index >= 0){
                newcart.splice(index,1)
            }else{
                console.log("Errors while removing product from cart")
            }
            return {...state, basket: newcart}
    }
}

export default reducer