// import { type } from 'os';

export interface Product {
    name:string,
    price?:number,
    category:Category,
}

export interface Category{
    name:string,
    type?:string
}
export enum Roles{
    Admin='Admin',
    Customer='Customer',
    Supplier='Supplier',
    Anonymous='Anonymous'
}