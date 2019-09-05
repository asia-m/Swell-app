import React, {Component} from 'react';
import {Product} from "../../../store/products/model";

type Props = {
    productDetails: Product,
    addProduct: (product: Product) => void
    removeProduct: (product: Product) => void
};
type State = {};

export class ProductCartItem extends Component<Props, State> {

    addProduct() {
        this.props.addProduct(this.props.productDetails);
    }

    removeProduct() {
        this.props.removeProduct(this.props.productDetails);
    }

    renderCounter() {
        return (
            <span>
                <button onClick={this.removeProduct.bind(this)}
                        className="btn btn-outline-danger btn-sm font-weight-bold pl-3 pr-3">-</button>
                <label className="font-weight-bold ml-3 mr-3">{this.props.productDetails.quantity}</label>
                <button onClick={this.addProduct.bind(this)}
                        className="btn btn-outline-primary btn-sm font-weight-bold pl-3 pr-3">+</button>
            </span>
        );
    }

    render() {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-6 pt-1">{this.props.productDetails.name}</div>
                    <div className="col-6 text-right">
                        {this.renderCounter()}
                        <label className="ml-3 font-weight-bold">
                            {
                                this.props.productDetails.quantity ?
                                    (this.props.productDetails.price * this.props.productDetails.quantity) :
                                    0
                            }$
                        </label>
                    </div>
                </div>
            </li>
        );
    }
}
