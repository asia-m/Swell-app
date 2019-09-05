import React, {Component} from 'react';
import {connect} from "react-redux";
import "./employees.css";
import {EmployeeInterface} from "./EmployeeInterface";

type Props = {}

type State = {
    employeesList: EmployeeInterface[]
}

export class _Employees extends Component<Props, State> {

    constructor(props: any, state: State) {
        super(props, state);
        this.state = {
            employeesList: []
        }
    }

    componentDidMount() {
        fetch('employees.json')
            .then(data => data.json())
            .then((data) => {
                console.log(data);
                this.setState({employeesList: data});
            });
    }

    renderEmployeeCard(data: EmployeeInterface) {
        return (
            <div className="col-3">
                <div className="card">
                    <div className="img-container">
                        <img alt={data.name}
                             src={data.image}/>
                    </div>
                    <div className="content">
                        <ul>
                            <li><strong>Name:</strong> {data.name}</li>
                            <li><strong>Occupation:</strong> {data.occupation}</li>
                            <li><strong>Location:</strong> {data.location}</li>
                        </ul>
                    </div>
                    <span className="remove">𝘅</span>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="row">
                {this.state.employeesList.map(value => this.renderEmployeeCard(value))}
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

export const Employees = connect(mapStateToProps, mapDispatchToProps)(_Employees);
