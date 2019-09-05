import {ProductCategory} from "./model";

export const ADD_PRODUCT_CATEGORY = "[ProductCategory] Add";
export const UPDATE_PRODUCT_CATEGORY = "[ProductCategory] Update";
export const REMOVE_PRODUCT_CATEGORY = "[ProductCategory] Remove";

export const addProductCategory = (payload: ProductCategory) => ({type: ADD_PRODUCT_CATEGORY, payload: payload});
export const updateProductCategory = (payload: ProductCategory) => ({type: UPDATE_PRODUCT_CATEGORY, payload: payload});
export const removeProductCategory = (id: string) => ({type: REMOVE_PRODUCT_CATEGORY, payload: id});
