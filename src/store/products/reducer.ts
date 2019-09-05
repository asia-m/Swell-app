import {ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT} from "./actions";
import {Product} from "./model";

const initialState: Product[] = [
    {id: '1', category: '1', name: 'Product 1-1', price: 100},
    {id: '2', category: '1', name: 'Product 1-2', price: 100},
    {id: '3', category: '2', name: 'Product 2-1', price: 100},
    {id: '4', category: '2', name: 'Product 2-2', price: 100},
    {id: '5', category: '3', name: 'Product 3-1', price: 100},
    {id: '6', category: '3', name: 'Product 3-2', price: 100},
    {id: '7', category: '4', name: 'Product 4-1', price: 100},
    {id: '8', category: '4', name: 'Product 4-2', price: 100},
    {id: '9', category: '5', name: 'Product 5-1', price: 100},
    {id: '10', category: '5', name: 'Product 5-2', price: 100}
];

export default (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return state.concat(action.payload)
        case REMOVE_PRODUCT:
            return state.filter((item) => item.id !== action.payload)
        case UPDATE_PRODUCT: {
            state.forEach(value => {
                if (value.id === action.payload.id) {
                    value = {...action.payload};
                }
            });
            return [...state];
        }
        default:
            return state
    }
}

