import React, {Component} from 'react';
import {Product} from "../../../store/products/model";

type Props = {
    productDetails: Product,
    addProduct: (product: Product) => void
};
type State = {
    quantity: number
};

export class ProductListItem extends Component<Props, State> {
    constructor(props: Props, state: State) {
        super(props, state);
        this.state = {
            quantity: 0
        }
    }

    onAddProductClick() {
        this.props.addProduct(this.props.productDetails);
    }
    renderAddButton() {
        return (
            <button onClick={this.onAddProductClick.bind(this)} className="button-mode btn btn-info btn-sm">
                Add
            </button>
        );
    }

    render() {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-7">{this.props.productDetails.name} &nbsp;&nbsp;&nbsp; ${this.props.productDetails.price}</div>
                    <div className="col-5 text-right">
                        {this.renderAddButton()}
                    </div>
                </div>
            </li>
        );
    }
}
