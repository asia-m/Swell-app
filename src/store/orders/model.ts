import {Product} from "../products/model";

export interface Order {
    id?: string;
    products: Product[],
    customerName: string,
    phoneNumber: string,
    subTotal: number,
    taxPercentage: number,
    tax: number,
    total: number,
    date: Date
}
