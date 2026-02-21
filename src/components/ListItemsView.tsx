import type { Item } from "../interfaces/Invoice.interface";
import { RowItem } from "./RowItem";

interface Props {
    items: Item[];
    title: string;
    handlerDeleteItemList: (id: number) => void;
}

export const ListItemsView = ({ title, items, handlerDeleteItemList }: Props) => {

    return (
        <>
            <h4>{title}</h4>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ id, product, quantity, price }) => (
                        <RowItem
                            key={id}
                            id={id}
                            product={product}
                            quantity={quantity}
                            price={price}
                            handlerDeleteItemChild={handlerDeleteItemList}
                        />
                    ))}
                </tbody>
            </table>
        </>
    )
}
