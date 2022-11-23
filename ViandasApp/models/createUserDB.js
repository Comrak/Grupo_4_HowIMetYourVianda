const fs = require('fs');

const Users =[
    {
        id: 1,
        userName: 'admin',
        firstname: 'carlos',
        lastname: 'perez',
        email: 'admin@admin.com',
        password: '$2b$10$',
        role: 'admin',
        Country:'Argentina',
        City:'Buenos Aires',
        Address:'Av. Corrientes 1234',
        LandPhone:'123456789',
        MobilePhone:'123456789',
        avatar: '/img/users/avatar.png'
    },

]
const UsersRoles =[

    {id:1,
    Role:'admin',
    Description:'Administrador del sitio',
},
]
const Transactions =[

    {id:1,
    UserId:1,
    ProductId:1,
    TransactionDate:'2021-08-01',
    TransactionType:'Compra',
    TransactionStatus:'Aprobada',
    TransactionAmount:1000,
    TransactionCurrency:'ARS',
    TransactionDescription:'Compra de producto',
    TransactionPaymentMethod:'MercadoPago',
    TransactionPaymentId:'123456789',
    TransactionPaymentStatus:'Aprobada'

    }
]






fs.writeFileSync('Transactions.json', JSON.stringify(Transactions, null, ' '));