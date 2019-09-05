import {ProductCategory} from "../product-categories/model";

export const UpdateProductCategory = "[UpdateProductCategory] Update";

export const updateSelectedProductCategory = (payload: ProductCategory) => ({type: UpdateProductCategory, payload: payload});
