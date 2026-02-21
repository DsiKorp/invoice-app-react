
export const invoice = {
    id: 10,
    name: 'Tienda Componentes PC',
    client: {
        name: 'Pepe',
        lastName: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 12
        }
    },
    company: {
        name: 'New Egg Inc',
        fiscalNumber: 1234567,
    },
    items: [
        {
            id: 1,
            product: 'Cpu Intel i7',
            price: 1000,
            quantity: 1,
        },
        {
            id: 2,
            product: 'Corsair Keyboard Mecanico',
            price: 150,
            quantity: 2,
        },
        {
            id: 3,
            product: 'Monitor Asus',
            price: 350,
            quantity: 1,
        },
    ]
}