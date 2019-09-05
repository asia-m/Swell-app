import React, {Component} from 'react';
import {ProductCategory} from "../../../store/product-categories/model";

type Props = {
    productCategoryDetails: ProductCategory,
    selectionChange: (productCategory: ProductCategory) => void
    isActive: boolean
};
type State = {};

export class ProductCategoriesListItem extends Component<Props, State> {
    constructor(props: Props, state: State) {
        super(props, state);
        this.state = {}
    }

    onselectionchange(productCategory: ProductCategory) {
        this.props.selectionChange(productCategory);
    }

    render() {
        return (
            <li className={'list-group-item ' + (this.props.isActive ? 'active' : 'button-mode')}>
                <div className="row"
                     onClick={() => this.onselectionchange(this.props.productCategoryDetails)}>
                    {this.props.productCategoryDetails.name} {}
                </div>
            </li>
        );
    }
}
