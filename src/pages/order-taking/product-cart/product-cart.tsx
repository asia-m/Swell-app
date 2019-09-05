import React, {Component} from 'react';
import './product-cart.css';
import {ProductCartItem} from "./product-cart-item";
import {Product} from "../../../store/products/model";
import validator from "validator";
import {Order} from "../../../store/orders/model";

type Props = {
    productList: Product[],
    addProduct: (product: Product) => void
    removeProduct: (product: Product) => void
    addOrder: (order: Order) => void,
    updateCustomerName: (payload: string) => void,
    updateCustomerNumber: (payload: string) => void,
    customerName: string,
    phoneNumber: string
};
type State = {}

export class ProductCart extends Component<Props, State> {

    constructor(props: Props, state: State) {
        super(props, state);
        this.state = {
            customerName: '',
            phoneNumber: ''
        };
    }

    renderProductCartItems() {
        return this.props.productList.filter(item => (item.quantity && item.quantity > 0)).map(
            (item, index) => (
                <ProductCartItem
                    addProduct={this.props.addProduct}
                    removeProduct={this.props.removeProduct}
                    key={'ProductCartItem_' + index}
                    productDetails={item}/>
            )
        );
    }

    getSubTotal() {
        return this.props.productList.reduce(function (item1, item2) {
            return item1 + (item2.quantity ? (item2.quantity * item2.price) : 0);
        }, 0)
    }

    getTax() {
        return this.props.productList.reduce(function (item1, item2) {
            return item1 + (item2.quantity ? (item2.quantity * item2.price) : 0);
        }, 0) * (4 / 100);
    }

    getTotal() {
        return this.getSubTotal() + this.getTax();
    }

    isCartNotEmpty() {
        return this.props.productList.length > 0;
    }

    isPhoneNumberValid() {
        return validator.isMobilePhone(this.props.phoneNumber);
    }

    isCustomerNameValid() {
        return validator.isAlphanumeric(this.props.customerName);
    }

    renderPhoneNumber() {
        return (
            <div className="col-6">
                <div className="form-group">
                    <label>Contact Number <span className="text-danger">*</span></label>
                    <input type="text"
                           onChange={(e: any) => this.props.updateCustomerNumber(e.currentTarget.value)}
                           className="form-control"
                           placeholder="Contact Number"/>
                    {(!this.isPhoneNumberValid()) ? (
                        <span className="form-text text-danger">Provide valid Contact Number</span>) : null}
                </div>
            </div>
        );
    }

    onConfirmOrderClick() {
        const order: Order = {
            products: this.props.productList,
            phoneNumber: this.props.phoneNumber,
            customerName: this.props.customerName,
            date: new Date(),
            subTotal: this.getSubTotal(),
            tax: this.getTax(),
            taxPercentage: 4,
            total: this.getTotal()
        }
        this.props.addOrder(order);
    }

    renderCustomerName() {
        return (
            <div className="col-6">
                <div className="form-group">
                    <label>Customer Name <span className="text-danger">*</span></label>
                    <input type="text"
                           onChange={(e: any) => this.props.updateCustomerName(e.currentTarget.value)}
                           className="form-control" placeholder="Customer Name"/>
                    {
                        (!this.isCustomerNameValid()) ?
                            (<span
                                className="form-text text-danger">Provide valid Customer Name.</span>)
                            :
                            null
                    }
                </div>
            </div>
        );
    }

    renderConfirmButton() {
        const className = this.isPhoneNumberValid() && this.isCustomerNameValid() && this.isCartNotEmpty() ? 'btn btn-primary float-right' : 'btn btn-primary float-right disabled';
        return (
            <div className="col-12">
                <button type="button"
                        onClick={this.onConfirmOrderClick.bind(this)}
                        className={className}>
                    Confirm Order
                </button>
            </div>
        );
    }

    renderCart() {
        return (
            <div className="col-12">
                <h6 className="p-0 m-0 ml-3 mb-2">Cart <span className="text-danger">*</span></h6>
                <ul className="list-group cart-list">
                    {this.isCartNotEmpty() ? this.renderProductCartItems() :
                        <span className="text-danger text-center mt-5">Not Products to show. Add Products into cart to place an Order</span>}
                </ul>
            </div>
        )
    }

    renderTotals() {
        return (
            <div className="col-12 pt-3 mb-3">
                <div className="row">
                    <div className="col-4 font-weight-bold text-center">Subtotal : ${this.getSubTotal()}</div>
                    <div className="col-4 font-weight-bold text-center">Tax :${this.getTax()}</div>
                    <div className="col-4 font-weight-bold text-center">Total : ${this.getTotal()}</div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="col-5 border order-taking-list">
                <div className="row">
                    <h6 className="mt-3 ml-3">Order Details</h6>
                    {this.renderCart()}
                    {this.isCartNotEmpty() ? this.renderTotals() : null}
                    {this.isCartNotEmpty() ? this.renderCustomerName() : null}
                    {this.isCartNotEmpty() ? this.renderPhoneNumber() : null}
                    {this.isCartNotEmpty() ? this.renderConfirmButton() : null}
                </div>
            </div>
        );
    }
}
