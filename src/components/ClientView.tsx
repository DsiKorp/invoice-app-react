import type { Client } from "../interfaces/Invoice.interface"

interface Props {
    client: Client;
    title: string;
}

export const ClientView = ({ client, title }: Props) => {

    const { name: nameClient, lastName, address: { street, number, city, country } } = client;

    return (
        <>
            <h3>{title}</h3>
            <ul className="list-group">
                <li className="list-group-item active">Nombre: {nameClient} {lastName}</li>
                <li className="list-group-item">Calle: {street} {number}</li>
                <li className="list-group-item">Ciudad y Pais: {city} / {country}</li>
            </ul>
        </>
    )
}
