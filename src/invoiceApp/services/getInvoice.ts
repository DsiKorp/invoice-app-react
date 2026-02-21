import { invoice } from "../data/invoiceMock"
import type { Invoice, Item } from "../interfaces/Invoice.interface";

export const getInvoice = (): Invoice => {

    //console.log(invoice);

    // let total = 0;
    // invoice.items.forEach(item => {
    //     total = total + (item.price * item.quantity);
    // });

    const total = calculateTotal(invoice?.items);

    return {
        ...invoice,
        total
    };

}

// Aseguramos que operamos con números por si acaso los datos vienen como strings
export const calculateTotal = (items: Item[] = []): number => {
    return items.reduce((accumulator, item) => accumulator + (Number(item.price) * Number(item.quantity)), 0);
}

// versión simple sin validaciones ni manejo de posibles datos mal formados
export const calculateTotalV1 = (items: Item[] = []): number => {
    return items
        .map(item => item.price * item.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Versión más detallada con comentarios explicativos
export const calculateTotalV2 = (items: Item[] = []): number => {
    return items.reduce((accumulator, item) => {
        // Aseguramos que operamos con números por si acaso
        return accumulator + (Number(item.price) * Number(item.quantity));
    }, 0);
}

// Versión más concisa utilizando el operador de coalescencia nula para manejar posibles valores undefined
export const calculateTotalV3 = (items: Item[] = []): number => {
    return items.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0);
};