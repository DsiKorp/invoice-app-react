export interface Invoice {
    id: number;
    name: string;
    client: Client;
    company: Company;
    items: Item[];
    total?: number;
}

export interface Client {
    name: string;
    lastName: string;
    address: Address;
}

export interface Address {
    country: string;
    city: string;
    street: string;
    number: number;
}

export interface Company {
    name: string;
    fiscalNumber: number;
}

export interface Item {
    id: number;
    product: string;
    price: number;
    quantity: number;
}
