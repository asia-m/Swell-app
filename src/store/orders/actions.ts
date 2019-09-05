import {Order} from "./model";

export const AddOrder = "[Order] Add";
export const RemoveOrder = "[Order] Remove";

export const addOrder = (payload: Order) => ({type: AddOrder, payload: payload});
export const removeOrder = (index: number) => ({type: RemoveOrder, payload: index});
