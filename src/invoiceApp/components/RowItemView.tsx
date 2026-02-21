interface Props {
    product: string;
    quantity: number;
    price: number;
    id: number;
    handlerDeleteItemChild: (id: number) => void;
}

export const RowItemView = ({ id, product, quantity, price, handlerDeleteItemChild }: Props) => {
    return (
        <>
            <tr>
                <td>{product}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>
                    <button onClick={() => handlerDeleteItemChild(id)} className="btn btn-danger">Eliminar</button>
                </td>
            </tr>
        </>
    )
}
