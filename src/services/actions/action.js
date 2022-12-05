import { REMOVE_FROM_CART,ADD_TO_CART } from "../../constant"

export const addToCart = data => {
    console.warn('action', data);
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const removeFromCart = () => {
    return {
        type: REMOVE_FROM_CART
    }
}