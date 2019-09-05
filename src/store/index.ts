import {createStore} from 'redux'
import {combineReducers} from "redux"
import {composeWithDevTools} from 'redux-devtools-extension';

import products from './products/reducer';
import productCategories from './product-categories/reducer';
import cart from './cart/reducer';
import selectedProductCategory from './selected-Product-Category/reducer';
import orders from './orders/reducer';
import taxPercentage from './tax/reducer';
import customerName from './customer-name/reducer';
import customerPhoneNumber from './customer-phone-number/reducer';

const reducer = combineReducers(
    {
        products,
        productCategories,
        cart,
        selectedProductCategory,
        orders,
        taxPercentage,
        customerName,
        customerPhoneNumber,
    }
);
export default createStore(reducer, composeWithDevTools())
