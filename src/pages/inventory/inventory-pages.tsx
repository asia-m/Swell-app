import React, {Component} from 'react';
import {InventoryListHeader} from "./inventory-list-header";
import {InventoryListItem} from "./inventory-list-item";
import {InventoryItemInterface} from "./inventory-item-interface";

type Props = {};
type State = {
    inventoryList: InventoryItemInterface[]
};

export class InventoryPages extends Component<Props, State> {
    constructor(props: any, state: State) {
        super(props, state);
        this.state = {
            inventoryList: []
        }


    }

    componentDidMount() {
        this.getInventoriesFromApi();
    }

    getInventoriesFromApi() {
        fetch('http://localhost:8080/inventories')
            .then(data => data.json())
            .then((data) => {
                console.log(data);
                this.setState({inventoryList: data});
            });
    }

    getInitialInventoryData(): InventoryItemInterface[] {
        const returnValue: InventoryItemInterface[] = [];
        for (let i = 0; i < 5; i++) {
            returnValue.push(
                {
                    item: "item " + (i + 1),
                    make: "make " + (i + 1),
                    description: "description " + (i + 1),
                    serialNo: "serial No " + (i + 1),
                    quantity: "quantity " + (i + 1),
                    value: "value " + (i + 1),
                }
            )
        }
        return returnValue;
    }

    addNewItem(newItem: InventoryItemInterface) {
        fetch('http://localhost:8080/inventories', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: window.JSON.stringify(newItem)
        }).then(value => {
            this.getInventoriesFromApi();
        });
    }

    deleteItem(item: InventoryItemInterface) {
        const confirm = window.confirm('Are you Sure! do you wnat to delete Inventory');
        if (confirm) {
            fetch('http://localhost:8080/inventories/' + item.id, {
                method: 'delete'
            }).then(value => {
                this.getInventoriesFromApi();
            });
        }
    }

    render() {
        return (
            <div>
                <h4 className="text-left">Inventory Page</h4>
                <ul className="list-group">
                    <InventoryListHeader onAdd={this.addNewItem.bind(this)}></InventoryListHeader>
                    {
                        this.state.inventoryList.map((item, index) => (
                            <InventoryListItem deleteClick={(item: InventoryItemInterface) => {
                                this.deleteItem(item)
                            }} key={'inventoryItem_' + index} item={item}></InventoryListItem>)
                        )
                    }

                </ul>
            </div>
        );
    }
}
