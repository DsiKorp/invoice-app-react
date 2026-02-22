import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { ADD_PRODUCT_CART, DELETE_PRODUCT_CART, UPDATE_QUANTITY_PRODUCT_CART } from "../reducer/itemsActions";
import type { ItemCard, Product } from "../interfaces/products.interface";

const initialCartItems: ItemCard[] = JSON.parse(sessionStorage.getItem('cartItems') || '[]');

export const useItemsCart = () => {

    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);
    console.log({ cartItems });

    useEffect(() => {
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleAddProductCart = (product: Product) => {
        const itemInCart = cartItems.find(item => item.product.id === product.id);

        if (itemInCart) {
            dispatch({ type: UPDATE_QUANTITY_PRODUCT_CART, payload: product });
        } else {
            dispatch({ type: ADD_PRODUCT_CART, payload: product });
        }
    };

    const handleDelProductCart = (id: number) => {
        dispatch({ type: DELETE_PRODUCT_CART, payload: id });
    }

    return {
        cartItems,
        handleAddProductCart,
        handleDelProductCart,
    }
}