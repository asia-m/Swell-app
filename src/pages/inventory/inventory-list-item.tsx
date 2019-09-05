import React, {Component} from 'react';
import {InventoryItemInterface} from "./inventory-item-interface";

type Props = {
    item: InventoryItemInterface,
    deleteClick: (item: InventoryItemInterface) => void
};
type State = {}

export class InventoryListItem extends Component<Props, State> {
    render() {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col">{this.props.item.item}</div>
                    <div className="col">{this.props.item.make}</div>
                    <div className="col">{this.props.item.description}</div>
                    <div className="col">{this.props.item.serialNo}</div>
                    <div className="col">{this.props.item.quantity}</div>
                    <div className="col">{this.props.item.value}</div>
                </div>
                <button className="btn btn-danger inventory-delete-button" onClick={()=>this.props.deleteClick(this.props.item)}>Delete</button>
            </li>
        );
    }
}
