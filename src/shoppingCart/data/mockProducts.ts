import type { Product } from "../interfaces/products.interface";

export const products: Product[] = [
    {
        id: 1,
        name: "Teclado Mecánico RGB",
        description: "Switches red, formato TKL y retroiluminación personalizable.",
        price: 1000,
    },
    {
        id: 2,
        name: "Mouse Gamer Pro",
        description: "Sensor de alta precisión, 6 botones programables y diseño ergonómico.",
        price: 650,
    },
    {
        id: 3,
        name: "Auriculares Inalámbricos",
        description: "Sonido envolvente, micrófono con cancelación de ruido y batería extendida.",
        price: 1200,
    },
    {
        id: 4,
        name: "Monitor 27\" Full HD",
        description: "Panel IPS de 144Hz, ideal para gaming y trabajo multitarea.",
        price: 3200,
    },
    {
        id: 5,
        name: "Webcam HD 1080p",
        description: "Enfoque automático y excelente rendimiento en videollamadas.",
        price: 480,
    },
    {
        id: 6,
        name: "Base Refrigerante Laptop",
        description: "Doble ventilador silencioso y ajuste de altura para mayor comodidad.",
        price: 350,
    },
];