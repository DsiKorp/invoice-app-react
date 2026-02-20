interface Props {
    product: string;
    quantity: number;
    price: number;
}

export const RowItem = ({ product, quantity, price }: Props) => {
    return (
        <>
            <tr>
                <td>{product}</td>
                <td>{quantity}</td>
                <td>{price}</td>
            </tr>
        </>
    )
}
