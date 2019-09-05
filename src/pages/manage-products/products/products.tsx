import React, {Component} from 'react';
import {ProductCategory} from "../../../store/product-categories/model";
import {Product} from "../../../store/products/model";

type Props = {
    products: Product[],
    selectedProductCategory: ProductCategory,
    addProduct: (payload: Product) => void,
    updateProduct: (payload: Product) => void,
    removeProduct: (payload: Product) => void,
}

type State = {
    newProductName: string,
    newProductPrice: number
    productToEdit: string,
}

export class Products extends Component<Props, State> {

    editProductName = '';
    editProductPrice = 0;

    constructor(props: Props, state: State) {
        super(props, state);
        this.state = {
            newProductName: '',
            newProductPrice: 0,
            productToEdit: ''
        }
    }

    addNewProductClick() {
        const newProduct: Product = {
            id: new Date().getTime().toString(),
            name: this.state.newProductName,
            category: this.props.selectedProductCategory.id,
            price: this.state.newProductPrice
        };
        this.props.addProduct(newProduct);
    }

    updateProductClick(product: Product) {
        product.name = this.editProductName;
        product.price = this.editProductPrice;
        this.props.updateProduct(product);
        this.editProductName = '';
        this.editProductPrice = 0;
        this.setState({productToEdit: ''})
    }

    renderNewCategoryInput() {
        if (this.props.selectedProductCategory) {
            return (
                <li className="list-group-item p-1">
                    <form className="new-product-form">
                        <div className="row">
                            <div className="col-6">
                                <input type="text"
                                       value={this.state.newProductName}
                                       onChange={(e: any) => {
                                           this.setState({newProductName: e.currentTarget.value})
                                       }}
                                       placeholder="New Product Name"
                                       className="new-product-input form-control"/>
                            </div>
                            <div className="col-6">
                                <input type="number"
                                       value={this.state.newProductPrice}
                                       onChange={(e: any) => {
                                           this.setState({newProductPrice: e.currentTarget.value})
                                       }}
                                       placeholder="New Product Category"
                                       className="new-product-input form-control"/>
                            </div>
                        </div>
                    </form>
                    <button onClick={this.addNewProductClick.bind(this)}
                            className="btn btn-primary add-product-category-button">Add
                    </button>
                </li>
            );
        } else {
            return null;
        }
    }

    onRemoveProductClick(product: Product) {
        const confirm = window.confirm('Are you sure! do you want to delete Product Category?');
        if (confirm) {
            this.props.removeProduct(product)
        }
    }

    renderProductListItemRenderer(value: Product) {
        return (
            <li key={'productCategory_' + value.id}
                className="list-group-item">
                <div className="row">
                    <div className="col-6"><label className="p-0 m-0 button-mode">Name : {value.name}</label>
                    </div>
                    <div className="col-6"><label className="p-0 m-0 button-mode">Price : {value.price}</label>
                    </div>
                </div>
                <div className="delete-product-category-button">
                    <button className="btn btn-danger" onClick={() => {
                        this.onRemoveProductClick(value)
                    }}>Delete
                    </button>
                    <button className="btn btn-warning ml-2" onClick={() => {
                        this.setState({productToEdit: value.id})
                    }}>Edit
                    </button>
                </div>
            </li>
        )
    }

    renderProductListItemEditor(value: Product) {
        this.editProductName = value.name;
        this.editProductPrice = value.price;
        return (
            <li key={'product_' + value.id} className="list-group-item p-1">
                <form className="new-product-form">
                    <div className="row">
                        <div className="col-6">
                            <input type="text"
                                   defaultValue={this.editProductName}
                                   onChange={(e: any) => {
                                       this.editProductName = e.currentTarget.value;
                                   }}
                                   placeholder="New Product Name"
                                   className="new-product-input form-control"/>
                        </div>
                        <div className="col-6">
                            <input type="number"
                                   defaultValue={this.editProductPrice.toString()}
                                   onChange={(e: any) => {
                                       this.editProductPrice = e.currentTarget.value;
                                   }}
                                   placeholder="New Product Category"
                                   className="new-product-input form-control"/>
                        </div>
                    </div>
                </form>
                <div className="delete-product-category-button">
                    <button onClick={() => this.updateProductClick(value)}
                            className="btn btn-primary">Update
                    </button>
                    <button className="btn btn-dark ml-2" onClick={() => {
                        this.setState({productToEdit: ''})
                    }}>Cancel
                    </button>
                </div>
            </li>
        );
    }

    renderProductsList() {
        if (this.props.selectedProductCategory) {
            return this.props.products.filter(value0 => value0.category === this.props.selectedProductCategory.id).map(value => {
                if (this.state.productToEdit === value.id) {
                    return this.renderProductListItemEditor(value);
                } else {
                    return this.renderProductListItemRenderer(value);
                }
            });
        } else {
            return <h6 className="text-danger text-center mt-5">Please select Product Category</h6>
        }
    }

    render() {
        return (
            <div className="border col-8 product-list border-left-0">
                <ul className="list-group mt-3">
                    {this.renderNewCategoryInput()}
                    {this.renderProductsList()}
                </ul>
            </div>
        );
    }
}
