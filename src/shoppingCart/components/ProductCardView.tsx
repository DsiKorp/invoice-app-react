import type { Product } from "../interfaces/products.interface"

interface Props {
    product: Product;
    handlerAddProductView: (product: Product) => void;
}

export const ProductCardView = ({ product: { id, name, description, price }, handlerAddProductView }: Props) => {
    const onAddProduct = (product: Product) => {
        console.log({ product });
        handlerAddProductView(product);
    }

    return (
        <>
            <div className="card h-100 shadow-sm border-0 rounded-4">
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">
                        {name}
                    </h5>
                    <p className="card-text text-secondary flex-grow-1">
                        {description}
                    </p>
                    <div className="card-text h5 text-primary fw-semibold mb-3">
                        $ {price}
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={() => onAddProduct({ id, name, description, price })}
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </>
    )
}
