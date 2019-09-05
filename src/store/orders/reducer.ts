import {AddOrder, RemoveOrder} from "./actions";
import {Order} from "./model";

const initialState: Order[] = [
    {
        products: [
            {
                id: '1',
                category: '1',
                name: 'Product 1-1',
                price: 100,
                quantity: 3
            },
            {
                id: '2',
                category: '1',
                name: 'Product 1-2',
                price: 100,
                quantity: 5
            }
        ],
        phoneNumber: '111111',
        customerName: 'Asia M',
        date: new Date('2019-09-03T13:14:51.296Z'),
        subTotal: 800,
        tax: 32,
        taxPercentage: 4,
        total: 832,
        id: '1567516491296'
    }
];

export default (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case AddOrder:
            return state.concat(action.payload)
        case RemoveOrder:
            return state.filter((_, i) => i !== action.payload)
        default:
            return state
    }
}

