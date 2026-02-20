import { useEffect, useState } from "react";

import type { Invoice, Item } from "./interfaces/Invoice.interface";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { getInvoice, calculateTotal } from "./services/getInvoice";
import { FormItemsView } from "./components/FormItemsView";

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
    console.log('rendering');
    const [activeForm, setActiveForm] = useState(false);
    const [total, setTotal] = useState(0);
    const [counter, setCounter] = useState(4);
    const [invoice, setInvoice] = useState(invoiceInitial);
    const [items, setItems] = useState<Item[]>([]);

    const { id, name, client, company } = invoice;

    useEffect(() => {
        const data = getInvoice();
        console.log(data);
        setInvoice(data);
        setItems(data.items);
    }, []);


    useEffect(() => {
        console.log('useEffect items')
        console.log({ items });
        setTotal(calculateTotal(items));
    }, [items]);

    const handlerAddItems = ({ product, price, quantity }: { product: string; price: string; quantity: string }) => {

        setItems([
            ...items, {
                //id: new Date().getTime(),
                id: counter,
                product: product.trim(),
                price: Number(price.trim()),
                quantity: Number(quantity.trim())
            }]);

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
                        <button onClick={() => setActiveForm(!activeForm)} className="btn btn-primary mt-2 px-4 py-2 fw-semibold rounded-pill shadow-sm" >
                            {activeForm ? 'Cerrar Formulario' : 'Agregar Item'}
                        </button>
                        {
                            activeForm && <FormItemsView handler={handlerAddItems} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
