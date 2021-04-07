import { ADD_TO_CART } from "../constant";

const initialState = {
    cartItemCount: null
}
const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
        return{
            ...state,
            cartItemCount: action.payload
        }
        default:
            return state;
    }
}

export default CartReducer;