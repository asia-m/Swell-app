import {Product} from "../products/model";

export const ADD_TO_CART = "[Cart] Add";
export const REMOVE_FROM_CART = "[Cart] Remove";
export const REMOVE_ALL_FROM_CART = "[Cart] Remove All";

export const addToCart = (payload: Product) => ({type: ADD_TO_CART, payload: payload});
export const removeFromCart = (index: string) => ({type: REMOVE_FROM_CART, payload: index});
export const removeAllFromCart = () => ({type: REMOVE_ALL_FROM_CART, payload: []});
