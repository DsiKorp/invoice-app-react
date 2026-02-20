import type { Item } from "../interfaces/Invoice.interface";
import { RowItem } from "./RowItem";

interface Props {
    items: Item[];
    title: string;
}

export const ListItemsView = ({ title, items }: Props) => {

    return (
        <>
            <h4>{title}</h4>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ id, product, quantity, price }) => (
                        <RowItem key={id} product={product} quantity={quantity} price={price} />
                    ))}
                </tbody>
            </table>
        </>
    )
}
