import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import {connect} from "react-redux";
import {Order} from "../../store/orders/model";
import Moment from 'react-moment';
import 'moment-timezone';

type Props = {
    orders: Order[]
}

type State = {}

export class _OrderList extends Component<Props, State> {

    expandComponent(row: Order) {
        console.log(row);
        const totalPrice = (cell: any, row: any) => {
            return <span>$ {row.price * row.quantity}</span>;
        };

        const currencyFormatter = (cell: any, row: any) => {
            return <span>$ {cell}</span>;
        };

        return (
            <div>
                <h6 className="text-center text-muted">Order Cart Details</h6>
                <BootstrapTable data={row.products}>
                    <TableHeaderColumn isKey={true} dataField='id'>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='price' dataFormat={currencyFormatter}>Unit Price</TableHeaderColumn>
                    <TableHeaderColumn dataField='quantity'>Quantity</TableHeaderColumn>
                    <TableHeaderColumn dataField='price' dataFormat={totalPrice}>Total Price</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }

    isExpandableRow(row: any) {
        return true;
    }

    render() {
        const dateFormatter = (cell: any, row: any) => {
            console.log(cell, row);
            return <Moment format="DD MMM YYYY HH:mm" withTitle>{cell}</Moment>;
        };


        const currencyFormatter = (cell: any, row: any) => {
            return <span>$ {cell}</span>;
        };


        const percentageFormatter = (cell: any, row: any) => {
            return <span>{cell}%</span>;
        };

        return (
            <div>
                <h4 className="ml-4">Orders List</h4>
                <BootstrapTable data={this.props.orders}
                                expandableRow={this.isExpandableRow}
                                expandComponent={this.expandComponent}
                                pagination>
                    <TableHeaderColumn isKey={true} dataField='id'>Order ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='customerName'>Customer Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='phoneNumber'>Phone Number</TableHeaderColumn>
                    <TableHeaderColumn dataField='subTotal' dataFormat={currencyFormatter}>Sub Total</TableHeaderColumn>
                    <TableHeaderColumn dataField='taxPercentage' dataFormat={percentageFormatter}>Tax
                        Percentage</TableHeaderColumn>
                    <TableHeaderColumn dataField='tax' dataFormat={currencyFormatter}>Tax</TableHeaderColumn>
                    <TableHeaderColumn dataField='total' dataFormat={currencyFormatter}>Total</TableHeaderColumn>
                    <TableHeaderColumn dataField='date' dataFormat={dateFormatter}>Date</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        orders: state.orders,
    }
};

const mapDispatchToProps = (dispatch: Function) => {
    return {}
};

export const OrderList = connect(mapStateToProps, mapDispatchToProps)(_OrderList);
