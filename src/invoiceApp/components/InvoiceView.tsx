interface Props {
    id: number;
    name: string;
}

export const InvoiceView = ({ id, name }: Props) => {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">Id: {id}</li>
                <li className="list-group-item">Nombre Cliente: {name}</li>
            </ul>
        </>
    )
}
