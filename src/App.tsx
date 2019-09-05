import React from 'react';
import {InventoryPages} from "./pages/inventory/inventory-pages";
import {ManageProducts} from "./pages/manage-products/manageProducts";
import {OrderList} from "./pages/order-list/order-list";
import {Login} from "./pages/login";
import {BrowserRouter, Route, Link} from "react-router-dom";
import './App.css';
import {OrderTakingPage} from "./pages/order-taking/order-taking-page";
import {Employees} from "./pages/employees/employess";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <Link className="navbar-brand" to="/">SWELL</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarsExampleDefault"
                        aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/inventory">Inventory</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/employees">Employees</Link>
                        </li>
                        {/*<li className="nav-item active">
                            <Link className="nav-link" to="/order-list">Order List</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/orderTaking">Order Taking</Link>
                        </li>*/}

                    </ul>
                </div>
            </nav>

            <main role="main" className="container-fluid rootContainer">
                <Route path="/inventory" component={InventoryPages}></Route>
                <Route path="/products" component={ManageProducts}></Route>
                <Route path="/orderTaking" component={OrderTakingPage}></Route>
                <Route path="/order-list" component={OrderList}></Route>
                <Route path="/employees" component={Employees}></Route>
                <Route exact path="/" component={Login}></Route>
            </main>


        </BrowserRouter>
    );
}

export default App;
