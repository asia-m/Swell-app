import {Product} from "./model";

export const ADD_PRODUCT = "[Product] Add";
export const REMOVE_PRODUCT = "[Product] Remove";
export const UPDATE_PRODUCT = "[Product] Update";

export const addProduct = (payload: Product) => ({type: ADD_PRODUCT, payload: payload});
export const updateProduct = (payload: Product) => ({type: UPDATE_PRODUCT, payload: payload});
export const removeProduct = (id: string) => ({type: REMOVE_PRODUCT, payload: id});
