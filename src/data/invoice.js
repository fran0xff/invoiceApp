

export const invoice = {
    id: 10,
    name: 'Componentes Pc',
    client: {
        name: 'Pepe',
        lastnName: 'Pérez',
        address: {
            street: 'Calle de la Paz',
            number: 10,
            city: 'Madrid',
            country: 'España',

        }
    },
    company: {
        name:'New Egg',
        fiscalNumber: '12345678A',
    },
    items: [
        {
            id: 1,
            product: 'Placa base',
            price: 100,
            quantity: 1,
        
        },
        {
            id: 2, 
            product: 'Procesador',
            price: 200,
            quantity: 1,
            
        },
        {
            id: 3, 
            product: 'Memoria RAM',
            price: 50,
            quantity: 2,
            
        },
    ],
}
