import React, {Component} from 'react';
import {InventoryItemInterface} from "./inventory-item-interface";

type Props = {
    onAdd: any
};
type State = {
    newItem: InventoryItemInterface
}

export class InventoryListHeader extends Component<Props, State> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
            newItem: this.getNewItem()
        }
    }

    addNewItem(event: any) {
        this.props.onAdd(this.state.newItem);
        this.setState({newItem: this.getNewItem()});
    }

    getNewItem(): InventoryItemInterface {
        return {
            item: '',
            make: '',
            value: '',
            quantity: '',
            serialNo: '',
            description: ''
        }
    }

    handleInputChange(event: any) {
        const data: any = this.state.newItem;
        data[event.target.id] = event.target.value;
        this.setState({newItem: data});
    }

    render() {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label>Item</label>
                            <input id="item" onChange={this.handleInputChange.bind(this)}
                                   value={this.state.newItem.item} type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="col">

                        <div className="form-group">
                            <label>Make</label>
                            <input id="make" onChange={this.handleInputChange.bind(this)}
                                   value={this.state.newItem.make} type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="col">

                        <div className="form-group">
                            <label>Description</label>
                            <input id="value" onChange={this.handleInputChange.bind(this)}
                                   value={this.state.newItem.value} type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="col">

                        <div className="form-group">
                            <label>Serial No.</label>
                            <input id="quantity" onChange={this.handleInputChange.bind(this)}
                                   value={this.state.newItem.quantity} type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="col">

                        <div className="form-group">
                            <label>Quantity</label>
                            <input id="serialNo" onChange={this.handleInputChange.bind(this)}
                                   value={this.state.newItem.serialNo} type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="col">

                        <div className="form-group">
                            <label>Value</label>
                            <input id="description" onChange={this.handleInputChange.bind(this)}
                                   value={this.state.newItem.description} type="text" className="form-control"/>
                        </div>
                    </div>
                </div>
                <button onClick={this.addNewItem.bind(this)} className="btn btn-success btn-sm float-right">Add</button>
            </li>
        );
    }
}