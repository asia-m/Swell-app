import React, {Component} from 'react';
import './mangeProducts.css';
import {ProductCategories} from "./product-categories/product-categories";
import {ProductCategory} from "../../store/product-categories/model";
import {updateSelectedProductCategory} from "../../store/selected-Product-Category/actions";
import {connect} from "react-redux";
import {addProductCategory, removeProductCategory, updateProductCategory} from "../../store/product-categories/actions";
import {Product} from "../../store/products/model";
import {Products} from "./products/products";
import {addProduct, removeProduct, updateProduct} from "../../store/products/actions";

type Props = {
    products: Product[],
    productCategories: ProductCategory[],
    updateSelectedProductCategory: (payload: ProductCategory) => void,
    selectedProductCategory: ProductCategory,
    addProductCategory: (payload: ProductCategory) => void,
    updateProductCategory: (payload: ProductCategory) => void,
    removeProductCategory: (payload: ProductCategory) => void,
    addProduct: (payload: Product) => void,
    updateProduct: (payload: Product) => void,
    removeProduct: (payload: Product) => void,
}
type State = {}

class _Products extends Component<Props, State> {
    removeProductCategoryClick(productCategory: ProductCategory) {
        this.props.products.filter(product => (product.category === productCategory.id)).forEach(product => {
            this.props.removeProduct(product)
        });
        this.props.removeProductCategory(productCategory);
    }

    render() {
        return (
            <div>
                <h4 className="ml-4">Manage Products</h4>
                <div className="row ml-2 mr-2">
                    <ProductCategories selectedProductCategory={this.props.selectedProductCategory}
                                       updateSelectedProductCategory={this.props.updateSelectedProductCategory}
                                       productCategories={this.props.productCategories}
                                       addProductCategory={this.props.addProductCategory}
                                       updateProductCategory={this.props.updateProductCategory}
                                       removeProductCategory={this.removeProductCategoryClick.bind(this)}/>
                    <Products
                        products={this.props.products}
                        selectedProductCategory={this.props.selectedProductCategory}
                        addProduct={this.props.addProduct}
                        updateProduct={this.props.updateProduct}
                        removeProduct={this.props.removeProduct}/>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        products: state.products,
        productCategories: state.productCategories,
        selectedProductCategory: state.selectedProductCategory,
    }
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        updateSelectedProductCategory: (payload: ProductCategory) => dispatch(updateSelectedProductCategory(payload)),
        addProductCategory: (payload: ProductCategory) => dispatch(addProductCategory(payload)),
        updateProductCategory: (payload: ProductCategory) => dispatch(updateProductCategory(payload)),
        removeProductCategory: (payload: ProductCategory) => dispatch(removeProductCategory(payload.id)),
        addProduct: (payload: Product) => dispatch(addProduct(payload)),
        updateProduct: (payload: Product) => dispatch(updateProduct(payload)),
        removeProduct: (payload: Product) => dispatch(removeProduct(payload.id)),
    }
};

export const ManageProducts = connect(mapStateToProps, mapDispatchToProps)(_Products);
