import { ADD_TO_CART, REMOVE_FROM_CART } from "../../constant"

// const intialState = {
//     cartData: []
// }

const initialState = [] ;

export default function cartItems(state = initialState, action){
    switch(action.type){
        case ADD_TO_CART:
            return [
                ...state, 
                {cartData:action.data}
            ]
            break;
        case REMOVE_FROM_CART :
            return state.slice(0, state.length -1)
            break;
        default : return state
    }
}