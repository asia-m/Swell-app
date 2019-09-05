import React, {Component} from 'react';
import {ProductCategory} from "../../../store/product-categories/model";

type Props = {
    productCategories: ProductCategory[],
    selectedProductCategory: ProductCategory,
    updateSelectedProductCategory: (payload: ProductCategory) => void,
    addProductCategory: (payload: ProductCategory) => void,
    updateProductCategory: (payload: ProductCategory) => void,
    removeProductCategory: (payload: ProductCategory) => void,
}

type State = {
    newProductName: string
    editProductCategoryId: string
}

export class ProductCategories extends Component<Props, State> {
    editProductCategoryName: string = '';

    constructor(props: Props, state: State) {
        super(props, state);
        this.state = {
            newProductName: '',
            editProductCategoryId: ''
        }
    }

    addNewProductClick() {
        const newProduct: ProductCategory = {
            id: new Date().getTime().toString(),
            name: this.state.newProductName
        };
        this.props.addProductCategory(newProduct);
    }

    updateProductCategoryClick(productCategory: ProductCategory) {
        productCategory.name = this.editProductCategoryName;
        this.props.updateProductCategory(productCategory);
        this.editProductCategoryName = '';
        this.setState({editProductCategoryId: ''});
    }

    renderNewCategoryInput() {
        return (
            <li className="list-group-item p-1">
                <input type="text"
                       value={this.state.newProductName}
                       onChange={(e: any) => {
                           this.setState({newProductName: e.currentTarget.value})
                       }}
                       placeholder="New Product Category"
                       className="new-category-input form-control"/>
                <button onClick={this.addNewProductClick.bind(this)}
                        className="btn btn-primary add-product-category-button">Add
                </button>
            </li>
        );
    }

    renderItemRenderer(productCategory: ProductCategory) {

        const getClassName = (productCategory: ProductCategory) => {
            if (this.props.selectedProductCategory) {
                if (productCategory.id === this.props.selectedProductCategory.id) {
                    return 'list-group-item active';
                } else {
                    return 'list-group-item';
                }
            } else {
                return 'list-group-item';
            }
        };

        return (
            <li key={'productCategory_' + productCategory.id}
                className={getClassName(productCategory)}>
                <label onClick={() => this.props.updateSelectedProductCategory(productCategory)}
                       className="p-0 m-0 button-mode"
                       title="Click to Select">{productCategory.name}</label>
                <div className="delete-product-category-button">
                    <button className="btn btn-danger"
                            onClick={() => {
                                this.onRemoveProductCategoryClick(productCategory)
                            }}>Delete
                    </button>
                    <button onClick={() => this.setState({editProductCategoryId: productCategory.id})}
                            className="btn btn-warning ml-2">Edit
                    </button>
                </div>
            </li>
        );
    }

    renderItemEditor(productCategory: ProductCategory) {
        this.editProductCategoryName = productCategory.name;
        return (
            <li className="list-group-item p-1" key={'productCategory_ItemEditor_' + productCategory.id}>
                <input type="text"
                       defaultValue={productCategory.name}
                       onChange={(e: any) => {
                           this.editProductCategoryName = e.currentTarget.value;
                       }}
                       placeholder="New Product Category"
                       className="new-category-input form-control"/>
                <div className="add-product-category-button">
                    <button onClick={() => this.updateProductCategoryClick(productCategory)}
                            className="btn btn-primary">Update
                    </button>
                    <button onClick={() => this.setState({editProductCategoryId: ''})}
                            className="btn btn-dark ml-2">Cancel
                    </button>
                </div>
            </li>
        );
    }

    onRemoveProductCategoryClick(productCategory: ProductCategory) {
        const confirm = window.confirm('Are you sure! do you want to delete Product Category?');
        if (confirm) {
            this.props.removeProductCategory(productCategory)
        }
    }

    renderProductsList() {

        return this.props.productCategories.map(value => {
            return (
                this.state.editProductCategoryId === value.id ?
                    this.renderItemEditor(value) :
                    this.renderItemRenderer(value)
            );
        })
    }

    render() {
        return (
            <div className="border col-4 product-list">
                <ul className="list-group mt-3">
                    {this.renderNewCategoryInput()}
                    {this.renderProductsList()}
                </ul>
            </div>
        );
    }
}
