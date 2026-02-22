import { Navigate, Route, Routes } from "react-router-dom"
import { CartView } from "../shoppingCart/components/CartView"
import { CatalogView } from "../shoppingCart/components/CatalogView"
import { InvoiceApp } from "../invoiceApp/InvoiceApp";

interface Props {
    cartItems: any[];
    handleAddProductCart: (product: any) => void;
    handleDelProductCart: (productId: any) => void;
}

export const CartRoutes = ({ cartItems, handleAddProductCart, handleDelProductCart }: Props) => {
    return (
        <Routes>
            <Route
                path="catalog"
                element={<CatalogView handlerAddProduct={handleAddProductCart} />}
            />

            <Route path="cart" element={(
                cartItems.length > 0 ? (
                    <div className="my-4 w-50">
                        <CartView items={cartItems} handleDeleteProduct={handleDelProductCart} />
                    </div>
                ) : (
                    <div className="alert alert-warning">No hay productos en el carrito de compras!</div>
                )
            )} />

            <Route
                path="invoice"
                element={<InvoiceApp />}
            />

            <Route path="/" element={<Navigate to={'/catalog'} />} />

        </Routes>
    )
}
