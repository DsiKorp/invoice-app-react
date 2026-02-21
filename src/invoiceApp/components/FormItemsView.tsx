import { useEffect, useState } from "react";

interface Props {
    handler: ({ product, price, quantity }: { product: string; price: string; quantity: string }) => void;
}

export const FormItemsView = ({ handler }: Props) => {

    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: ''
    });

    const { product, price, quantity } = formItemsState;

    useEffect(() => {
        console.log('useEffect price')
        console.log(price);
    }, [price]);

    useEffect(() => {
        console.log('useEffect formItemsState')
        console.log({ formItemsState });
    }, [formItemsState]);

    const onInputChange = ({ target: { name: inputName, value } }: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(inputName);
        // console.log(value);
        setFormItemsState({
            ...formItemsState,
            [inputName]: value
        });
    }

    const onInvoiceItemSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (product.trim() === '' || price.trim() === '' || quantity.trim() === '') return;

        // emito el evento hacia el padre con los datos del nuevo item a añadir
        handler(formItemsState);

        setFormItemsState({
            product: '',
            price: '',
            quantity: ''
        });
    }

    return (
        <>
            <form className="w-50" onSubmit={onInvoiceItemSubmit}>
                <input
                    type="text"
                    name="product"
                    className="form-control m-3"
                    placeholder="Nombre del producto"
                    onChange={onInputChange}
                    value={product}
                />
                <input
                    type="number"
                    name="price"
                    className="form-control m-3"
                    placeholder="Precio del producto"
                    onChange={onInputChange}
                    value={price}
                />
                <input
                    type="number"
                    name="quantity"
                    className="form-control m-3"
                    placeholder="Cantidad del producto"
                    onChange={onInputChange}
                    value={quantity}
                />
                <button type="submit" className="btn btn-primary m-3">Nuevo Item</button>
            </form>
        </>
    )
}
