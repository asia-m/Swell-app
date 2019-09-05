import React, {Component} from 'react';
import {ProductCategoriesListItem} from "./product-categories-list-item";
import {ProductCategory} from "../../../store/product-categories/model";

type Props = {
    productCategories: ProductCategory[],
    selectionChange: (productCategory: ProductCategory) => void,
    selectedProductCategory: ProductCategory | null
};
type State = {};

export class ProductCategoriesList extends Component<Props, State> {

    productCategorySelectionChange(productCategory: ProductCategory) {
        this.setState({selectedProductCategory: productCategory});
        this.props.selectionChange(productCategory);
    }

    renderProductCategoryItems() {
        return this.props.productCategories.map(
            item => (
                <ProductCategoriesListItem
                    key={'ProductCategoriesListItem_' + item.id}
                    isActive={(this.props.selectedProductCategory !== null && this.props.selectedProductCategory.id === item.id)}
                    selectionChange={this.productCategorySelectionChange.bind(this)}
                    productCategoryDetails={item}>
                </ProductCategoriesListItem>
            )
        );
    }

    render() {
        return (
            <div className="col-3 border p-3 order-taking-list">
                <h6>Product Categories</h6>
                <ul className="list-group pt-2">
                    {this.renderProductCategoryItems()}
                </ul>
            </div>
        );
    }
}
