import type { Company } from "../interfaces/Invoice.interface";

interface Props {
    company: Company;
    title: string;
}

export const CompanyView = ({ title, company }: Props) => {
    const { name, fiscalNumber } = company;

    return (
        <>
            <h3>Datos de la Empresa</h3>
            <ul className="list-group">
                <li className="list-group-item active">Nombre: {name}</li>
                <li className="list-group-item">Número Fiscal: {fiscalNumber}</li>
            </ul>
        </>
    )
}
