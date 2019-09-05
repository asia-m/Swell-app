import {CUSTOMER_PHONE_NUMBER} from "./actions";

const initialState: string = '';

export default (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case CUSTOMER_PHONE_NUMBER:
            return action.payload;
        default:
            return state
    }
}

