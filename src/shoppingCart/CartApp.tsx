import { CartRoutes } from "../routes/CartRoutes";

import { Navbar } from "./components/Navbar";
import { useItemsCart } from "./hooks/useItemsCart";

//const initialCartItems: ItemCard[] = JSON.parse(sessionStorage.getItem('cartItems') || '[]');

export const CartApp = () => {
    // Hook useReducer
    const { cartItems, handleAddProductCart, handleDelProductCart } = useItemsCart();

    return (
        <>
            <hr />
            <Navbar />
            <div className="container my-4">
                <h3>Cart App</h3>
                {/* <Routes></Routes> */}
                <CartRoutes
                    cartItems={cartItems}
                    handleAddProductCart={handleAddProductCart}
                    handleDelProductCart={handleDelProductCart}
                />
            </div>
        </>
    )
}
