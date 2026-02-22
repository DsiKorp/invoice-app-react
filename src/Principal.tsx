
import { useState } from "react";
import { InvoiceApp } from "./invoiceApp/InvoiceApp";
import { CartApp } from "./shoppingCart/CartApp";
import { BrowserRouter } from "react-router-dom";

type AppModule = "invoice" | "cart";

export const Principal = () => {
    const [activeModule, setActiveModule] = useState<AppModule>("cart");

    return (
        <div className="bg-light min-vh-100 py-4">
            <div className="container">
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                    <div className="card-header bg-white border-0 pt-4 pb-3 px-4">
                        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                            <div>
                                <h1 className="h3 mb-1 fw-bold">Panel Principal</h1>
                                <p className="text-secondary mb-0">Selecciona el módulo que deseas usar</p>
                            </div>
                            <div className="btn-group" role="group" aria-label="Seleccion de modulo">
                                <button
                                    type="button"
                                    className={`btn ${activeModule === "invoice" ? "btn-primary" : "btn-outline-primary"} px-4`}
                                    onClick={() => setActiveModule("invoice")}
                                >
                                    Invoice App
                                </button>
                                <button
                                    type="button"
                                    className={`btn ${activeModule === "cart" ? "btn-primary" : "btn-outline-primary"} px-4`}
                                    onClick={() => setActiveModule("cart")}
                                >
                                    Cart App
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card-body p-4">
                        {activeModule === "invoice" ? <InvoiceApp /> : <BrowserRouter><CartApp /></BrowserRouter>}
                    </div>
                </div>
            </div>
        </div>
    );
};
