import {ADD_TO_CART, REMOVE_ALL_FROM_CART, REMOVE_FROM_CART} from "./actions";
import {Product} from "../products/model";

const initialState: Product[] = [];

export default (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.some(item => (item.id === action.payload.id))) {
                state.forEach(value => {
                    if (value.id === action.payload.id) {
                        value.quantity = (value.quantity ? (value.quantity + 1) : 1);
                    }
                });
                return [...state];
            } else {
                action.payload.quantity = 1;
                return state.concat(action.payload);
            }
        case REMOVE_FROM_CART:
            if (state.some(item => (item.id === action.payload))) {
                state.forEach(value => {
                    if (value.id === action.payload) {
                        value.quantity = (value.quantity ? (value.quantity - 1) : 0);
                    }
                });
                for (let i = state.length - 1; i >= 0; i--) {
                    if (state[i].quantity === 0) {
                        state.splice(i, 1);
                    }
                }
                return [...state];
            }
            break;
        case REMOVE_ALL_FROM_CART: {
            return [];
        }
        default:
            return state
    }
}

