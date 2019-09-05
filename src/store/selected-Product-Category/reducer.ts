import {UpdateProductCategory} from "./actions";
import {ProductCategory} from "../product-categories/model";

const initialState: ProductCategory | null = null;

export default (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case UpdateProductCategory:
            return action.payload;
        default:
            return state
    }
}

