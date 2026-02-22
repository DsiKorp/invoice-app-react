import { products } from "../data/mockProducts";
import type { Product, ItemCard } from "../interfaces/products.interface";

export const getProducts = (): Product[] => {
    return products;
}
export const calculateTotal = (items: { total: number }[]) => {
    return items.reduce((acc, item) => acc + item.total, 0);
}

export const calculateTotalV2 = (items: ItemCard[]) => {
    return items.reduce(
        (accumulator, item) => {
            const lineTotal = Number(item.product.price) * Number(item.quantity);
            return accumulator + (Number.isFinite(lineTotal) ? lineTotal : 0);
        }
        , 0);
}

