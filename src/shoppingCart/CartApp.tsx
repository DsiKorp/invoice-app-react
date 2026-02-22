import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { Navbar } from "./components/Navbar";
import type { Product, ItemCard, } from "./interfaces/products.interface";

const initialCartItems = JSON.parse(sessionStorage.getItem('cartItems') || '[]');

export const CartApp = () => {

    const [cartItems, setCartItems] = useState<ItemCard[]>(initialCartItems);
    console.log({ cartItems })

    const handleAddProductCart = (product: Product) => {
        const itemInCart = cartItems.find(item => item.product.id === product.id);

        if (itemInCart) {
            setCartItems(cartItems.map(item => (
                item.product.id === product.id
                    ? { ...item, quantity: item.quantity + 1, total: item.total + product.price * 1 }
                    : { ...item }
            )));
        } else {
            setCartItems([...cartItems, { product, quantity: 1, total: product.price * 1 }]);
        }
    };

    const handleDelProductCart = (id: number) => {
        setCartItems(cartItems.filter(item => item.product.id !== id));
    }

    return (
        <>
            <hr />
            <Navbar />
            <div className="container my-4">
                <h3>Cart App</h3>
                <CatalogView handlerAddProduct={handleAddProductCart} />

                {
                    cartItems.length > 0 && (
                        <div className="my-4 w-50">
                            <CartView items={cartItems} handleDeleteProduct={handleDelProductCart} />
                        </div>
                    )
                }
            </div>
        </>
    )
}


// const [cartItems, setCartItems] = useState<ItemCard[]>(initialCartItems);
// console.log({ cartItems })

// const handleAddProductCart = (product: Product) => {
//     const itemInCart = cartItems.find(item => item.product.id === product.id);

//     if (itemInCart) {
//         setCartItems(cartItems.map(item => (
//             item.product.id === product.id
//                 ? { ...item, quantity: item.quantity + 1, total: item.total + product.price * 1 }
//                 : { ...item }
//         )));
//     } else {
//         setCartItems([...cartItems, { product, quantity: 1, total: product.price * 1 }]);
//     }
// };

// const handleDelProductCart = (id: number) => {
//     setCartItems(cartItems.filter(item => item.product.id !== id));
// }