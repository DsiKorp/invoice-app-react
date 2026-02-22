export interface DispatchAction {
    type: string;
    payload: ItemCard | number;
}

export interface ItemCard {
    product: Product;
    quantity: number;
    total: number;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}


