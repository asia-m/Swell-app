import {UPDATE_TAX} from "./actions";

const initialState: number = 4;

export default (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case UPDATE_TAX:
            return action.payload;
        default:
            return state
    }
}

