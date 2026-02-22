import type { ItemCard } from "../interfaces/products.interface";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "./itemsActions";

export const itemsReducer = (state: ItemCard[] = [], action: any) => {

    switch (action.type) {
        case AddProductCart:
            return [...state, { product: action.payload, quantity: 1, total: action.payload.price * 1 }];

        case UpdateQuantityProductCart:
            return state.map((item: ItemCard) => (
                item.product.id === action.payload.id
                    ? { ...item, quantity: item.quantity + 1, total: item.total + item.product.price * 1 }
                    : { ...item }
            ))

        case DeleteProductCart:
            return state.filter((item: ItemCard) => item.product.id !== action.payload);

        default:
            return [...state];
    }
}