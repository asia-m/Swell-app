import React, {Component} from 'react';
import './order-taking-page.css';
import {ProductList} from "./products/product-list";
import {ProductCategoriesList} from "./product-categories/product-categories-list";
import {ProductCart} from "./product-cart/product-cart";
import {ProductCategory} from "../../store/product-categories/model";
import {connect} from "react-redux";
import {Product} from "../../store/products/model";
import {addToCart, removeAllFromCart, removeFromCart} from "../../store/cart/actions";
import {updateSelectedProductCategory} from "../../store/selected-Product-Category/actions";
import {Order} from "../../store/orders/model";
import {addOrder} from "../../store/orders/actions";
import {updateCustomerName} from "../../store/customer-name/actions";
import {updateTax} from "../../store/tax/actions";
import {updateCustomerNumber} from "../../store/customer-phone-number/actions";

type Props = {
    productCategories: ProductCategory[],
    products: Product[],
    cart: Product[],
    selectedProductCategory: ProductCategory | null,
    addToCart: (product: Product) => void,
    removeFromCart: (product: Product) => void,
    updateSelectedProductCategory: (payload: ProductCategory) => void,
    addOrder: (payload: Order) => void,
    updateTax: (payload: number) => void,
    updateCustomerName: (payload: string) => void,
    updateCustomerNumber: (payload: string) => void,
    removeAllFromCart: () => void,
    customerName: string,
    customerPhoneNumber: string,
};
type State = {};

class _OrderTakingPage extends Component<Props, State> {

    constructor(props: Props, state: State) {
        super(props, state);
        this.state = {
            selectedProductCategory: null
        };
    }

    componentDidMount() {
        if (this.props.productCategories) {
            this.props.updateSelectedProductCategory(this.props.productCategories[0]);
        }
    }

    productCategorySelectionChange(productCategory: ProductCategory) {
        this.props.updateSelectedProductCategory(productCategory);
    }

    onAddProductClick(product: Product) {
        this.props.addToCart(product);
    }

    onRemoveProductClick(product: Product) {
        this.props.removeFromCart(product);
    }

    addOrder(order: Order) {
        order.id = new Date().getTime().toString();
        this.props.addOrder(order);
        alert('Order Placed Successfully');
        this.resetCart();
    }

    resetCart() {
        this.props.updateCustomerNumber('');
        this.props.updateCustomerName('');
        this.props.removeAllFromCart();
    }

    getFilteredProducts(): Product[] {
        return this.props.products.filter(product => {
            if (this.state && this.props.selectedProductCategory) {
                return (product.category === this.props.selectedProductCategory.id);
            } else {
                return false;
            }
        });
    }

    render() {
        return (
            <div>
                <h4 className="ml-4">Order Taking</h4>

                <div className="row ml-2 mr-2">

                    <ProductCategoriesList
                        selectedProductCategory={this.props.selectedProductCategory}
                        productCategories={this.props.productCategories}
                        selectionChange={this.productCategorySelectionChange.bind(this)}/>

                    <ProductList
                        addProduct={this.onAddProductClick.bind(this)}
                        productList={this.getFilteredProducts()}
                        selectedProductCategory={this.props.selectedProductCategory}/>

                    <ProductCart productList={this.props.cart}
                                 updateCustomerName={this.props.updateCustomerName}
                                 updateCustomerNumber={this.props.updateCustomerNumber}
                                 customerName={this.props.customerName}
                                 phoneNumber={this.props.customerPhoneNumber}
                                 addOrder={this.addOrder.bind(this)}
                                 removeProduct={this.onRemoveProductClick.bind(this)}
                                 addProduct={this.onAddProductClick.bind(this)}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        products: state.products,
        productCategories: state.productCategories,
        cart: state.cart,
        selectedProductCategory: state.selectedProductCategory,
        orders: state.orders,
        taxPercentage: state.taxPercentage,
        customerName: state.customerName,
        customerPhoneNumber: state.customerPhoneNumber,
    }
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        addToCart: (product: Product) => dispatch(addToCart(product)),
        removeFromCart: (product: Product) => dispatch(removeFromCart(product.id)),
        updateSelectedProductCategory: (payload: ProductCategory) => dispatch(updateSelectedProductCategory(payload)),
        addOrder: (payload: Order) => dispatch(addOrder(payload)),
        updateTax: (payload: number) => dispatch(updateTax(payload)),
        updateCustomerName: (payload: string) => dispatch(updateCustomerName(payload)),
        updateCustomerNumber: (payload: string) => dispatch(updateCustomerNumber(payload)),
        removeAllFromCart: () => dispatch(removeAllFromCart()),
    }
};

export const OrderTakingPage = connect(mapStateToProps, mapDispatchToProps)(_OrderTakingPage);
