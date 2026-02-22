import type { ItemCard } from "../interfaces/products.interface";
import { ADD_PRODUCT_CART, DELETE_PRODUCT_CART, UPDATE_QUANTITY_PRODUCT_CART, } from "./itemsActions";

export const itemsReducer = (state: ItemCard[] = [], action: any) => {

    switch (action.type) {
        case ADD_PRODUCT_CART:
            return [...state, { product: action.payload, quantity: 1, total: action.payload.price * 1 }];

        case UPDATE_QUANTITY_PRODUCT_CART:
            return [...state.map((item: ItemCard) => (
                item.product.id === action.payload.id
                    ? { ...item, quantity: item.quantity + 1, total: item.total + item.product.price * 1 }
                    : { ...item }
            ))]

        case DELETE_PRODUCT_CART:
            return [...state.filter((item: ItemCard) => item.product.id !== action.payload)];

        default:
            return [...state];
    }
}