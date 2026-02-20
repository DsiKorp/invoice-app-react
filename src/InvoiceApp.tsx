import { useState } from "react";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import type { Invoice } from "./interfaces/Invoice.interface";
import { getInvoice } from "./services/getInvoice";


const invoiceInitial: Invoice = {
    id: 0,
    name: '',
    client: {
        name: '',
        lastName: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: 0
        }
    },
    company: {
        name: '',
        fiscalNumber: 0,
    },
    items: []
};

export const InvoiceApp = () => {
    console.log('rendering')

    const { id, name, client, company, items: itemsInitial, total } = getInvoice();

    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: ''
    });

    const { product, price, quantity } = formItemsState;
    const [items, setItems] = useState(itemsInitial);
    const [counter, setCounter] = useState(4);

    const onInputChange = ({ target: { name: inputName, value } }: React.ChangeEvent<HTMLInputElement>) => {

        console.log(inputName);
        console.log(value);

        setFormItemsState({
            ...formItemsState,
            [inputName]: value
        });
    }

    const onInvoiceItemSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (product.trim() === '' || price.trim() === '' || quantity.trim() === '') return;

        setItems([
            ...items, {
                //id: new Date().getTime(),
                id: counter,
                product: product.trim(),
                price: Number(price.trim()),
                quantity: Number(quantity.trim())
            }]);

        setFormItemsState({
            product: '',
            price: '',
            quantity: ''
        });
        setCounter(counter + 1);
    }



    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">
                        <h1>Factura</h1>
                    </div>
                    {/* ----------------------------------------------- */}
                    <div className="card-body">
                        <InvoiceView id={id} name={name} />

                        <div className="row my-3">
                            <div className="col">
                                <ClientView client={client} title="Datos del Cliente" />
                            </div>

                            <div className="col">
                                <CompanyView company={company} title="Datos de la Empresa" />
                            </div>
                        </div>
                        <ListItemsView items={items} title="Lista de Items" />

                        <TotalView total={total} />

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

                    </div>
                </div>
            </div>
        </>
    )
}
