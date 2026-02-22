import { useEffect, useState } from "react";
import type { ItemCard } from "../interfaces/products.interface";
import { calculateTotalV2 } from "../services/productService";
import { useNavigate } from "react-router-dom";

interface Props {
    items: ItemCard[];
    handleDeleteProduct: (id: number) => void;
}

export const CartView = ({ items, handleDeleteProduct: handleDelProduct }: Props) => {

    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setTotal(calculateTotalV2(items));
    }, [items]);

    const onCatalog = () => {
        navigate("/catalog");
    }


    return (
        <>
            <h3>Carro de compras</h3>
            <table className="table table-hover table-striped border">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        const lineTotal = item.quantity * item.product.price;

                        return (
                            <tr key={item.product.id}>
                                <td>{item.product.name}</td>
                                <td>{item.product.price}</td>
                                <td>{item.quantity}</td>
                                <td>{Number.isFinite(lineTotal) ? lineTotal : 0}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelProduct(item.product.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3} className="text-end fw-bold">Total</td>
                        <td colSpan={2} className="text-start fw-bold">
                            {total}
                        </td>
                    </tr>
                </tfoot>
            </table>
            <button
                className="btn btn-success"
                onClick={onCatalog}
            >
                Seguir comprando
            </button>
        </>
    )
}
