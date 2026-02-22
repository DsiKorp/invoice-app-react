import { useState, useEffect } from "react";
import type { Product } from "../interfaces/products.interface";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";

interface Props {
    handlerAddProduct: (product: Product) => void;
}

export const CatalogView = ({ handlerAddProduct }: Props) => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setProducts(getProducts());
    }, []);

    return (
        <>
            <div className="row">
                {products.map((product) => (
                    <div className="col-12 col-md-6 col-lg-4 my-2" key={product.id}>
                        <ProductCardView
                            product={product} handlerAddProductView={handlerAddProduct} />
                    </div>
                ))}
            </div>
        </>
    )
}
