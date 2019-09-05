import {CUSTOMER_NAME} from "./actions";

const initialState: string = '';

export default (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case CUSTOMER_NAME:
            return action.payload;
        default:
            return state
    }
}

