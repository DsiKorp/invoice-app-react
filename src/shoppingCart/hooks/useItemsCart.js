import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { ADD_PRODUCT_CART, DeleteProductCart, UPDATE_QUANTITY_PRODUCT_CART } from "../reducer/itemsActions";

const inititalCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemsCart = () => {

    const [cartItems, dispatch] = useReducer(itemsReducer, inititalCartItems);

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const handlerAddProductCart = (product) => {

        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {
            dispatch(
                {
                    type: UPDATE_QUANTITY_PRODUCT_CART,
                    payload: product,
                }
            );
        } else {
            dispatch({
                type: ADD_PRODUCT_CART,
                payload: product,
            });
        }
    }

    const handlerDeleteProductCart = (id) => {
        dispatch(
            {
                type: DeleteProductCart,
                payload: id,
            }
        )
    }

    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart,
    }
}