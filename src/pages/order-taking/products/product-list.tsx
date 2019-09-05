import React, {Component} from 'react';
import {ProductListItem} from "./product-list-item";
import {ProductCategory} from "../../../store/product-categories/model";
import {Product} from "../../../store/products/model";

type Props = {
    productList: Product[],
    addProduct: (product: Product) => void
    selectedProductCategory: ProductCategory | null
};
type State = {};

export class ProductList extends Component<Props, State> {
    constructor(props: Props, state: State) {
        super(props, state);
        this.state = {};
    }

    onAddProductClick(product: Product) {
        this.props.addProduct(product);
    }

    renderProductItems() {
        if (this.props.selectedProductCategory) {
            return this.props.productList.map(
                (item, index) => (
                    <ProductListItem
                        key={'ProductListItem_' + index}
                        addProduct={this.onAddProductClick.bind(this)}
                        productDetails={item}></ProductListItem>
                )
            );
        } else {
            return <h6 className="text-muted">Please Select Product Category</h6>
        }

    }

    render() {
        return (
            <div className="col-4 border border-left-0 border-right-0 p-3 order-taking-list">
                <h6>{(this.props.selectedProductCategory) ? this.props.selectedProductCategory.name : ''} - Products</h6>
                <ul className="list-group pt-2">
                    {this.renderProductItems()}
                </ul>
            </div>
        );
    }
}
