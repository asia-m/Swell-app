import {ADD_PRODUCT_CATEGORY, REMOVE_PRODUCT_CATEGORY, UPDATE_PRODUCT_CATEGORY} from "./actions";
import {ProductCategory} from "./model";

const initialState: ProductCategory[] = [
    {id: '1', name: 'Product Category 1'},
    {id: '2', name: 'Product Category 2'},
    {id: '3', name: 'Product Category 3'},
    {id: '4', name: 'Product Category 4'},
    {id: '5', name: 'Product Category 5'}
];

export default (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case ADD_PRODUCT_CATEGORY:
            return state.concat(action.payload)
        case REMOVE_PRODUCT_CATEGORY:
            return state.filter((item) => item.id !== action.payload)
        case UPDATE_PRODUCT_CATEGORY:
            state.forEach(value => {
                if (value.id === action.payload.id) {
                    value = {...action.payload};
                }
            });
            return [...state];
        default:
            return state
    }
}

