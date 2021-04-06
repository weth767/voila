export const PATH = "http://localhost:9092";

export const MAX_SIZE_FILE = 16000000;

export const USER_CLIENT = "CLIENT";
export const USER_RESTAURANT = "RESTAURANT";

export const STATUS_ORDERS = [
    {
        "id": "AT_WAITING_FOR",
        "name": "Aguardando aprovação",
        "next": "IN_PROCESS"
    },
    {
        "id": "IN_PROCESS",
        "name": "Em produção",
        "next": "READY_TO_DELIVER"
    },
    {
        "id": "READY_TO_DELIVER",
        "name": "Pronto para entrega",
        "next": "OUT_TO_DELIVER"
    },
    {
        "id": "OUT_TO_DELIVER",
        "name": "Saiu para entrega",
        "next": "DELIVERED"
    },
    {
        "id": "DELIVERED",
        "name": "Entregue",
        "next": null
    },
    {
        "id": "CANCELED",
        "name": "Cancelado",
        "next": null
    },
];

export const PAYMENT_TYPES = [
    {
        "id": "MONEY",
        "name": "Dinheiro"
    },
    {
        "id": "CREDIT_CARD",
        "name": "Cartão de Crédito"
    },
    {
        "id": "DEBIT_CARD",
        "name": "Cartão de Debíto"
    },
]

export const STATES = [
    {
        "id": "ACRE",
        "name": "Acre"
    },
    {
        "id": "ALAGOAS",
        "name": "Alagoas"
    },
    {
        "id": "AMAZONAS",
        "name": "Amazonas"
    },
    {
        "id": "AMAPA",
        "name": "Amapá"
    },    
    {
        "id": "BAHIA",
        "name": "Bahia"
    },
    {
        "id": "CEARA",
        "name": "Ceará"
    },
    {
        "id": "DISTRITO_FEDERAL",
        "name": "Distrito Federal"
    },
    {
        "id": "ESPIRITO_SANTO",
        "name": "Espírito Santo"
    },
    {
        "id": "GOIAS",
        "name": "Goiás"
    },
    {
        "id": "MARANHAO",
        "name": "Maranhão"
    },
    {
        "id": "MINAS_GERAIS",
        "name": "Minas Gerais"
    },
    {
        "id": "MATO_GROSSO_SUL",
        "name": "Mato Grosso do Sul"
    },
    {
        "id": "MATO_GROSSO",
        "name": "Mato Grosso"
    },
    {
        "id": "PARA",
        "name": "Pará"
    },
    {
        "id": "PARAIBA",
        "name": "Paraíba"
    },
    {
        "id": "PERNAMBUCO",
        "name": "Pernambuco"
    },
    {
        "id": "PIAUI",
        "name": "Piaui"
    },
    {
        "id": "PARANA",
        "name": "Paraná"
    },
    {
        "id": "RIO_JANEIRO",
        "name": "Rio de Janeiro"
    },
    {
        "id": "RIO_GRANDE_NORTE",
        "name": "Rio Grande do Norte"
    },
    {
        "id": "RONDONIA",
        "name": "Rondônia"
    },
    {
        "id": "RORAIRA",
        "name": "Roraima"
    },
    {
        "id": "RIO_GRANDE_SUL",
        "name": "Rio Grande do Sul"
    },
    {
        "id": "SANTA_CATARINA",
        "name": "Santa Catarina"
    },
    {
        "id": "SERGIPE",
        "name": "Sergipe"
    },
    {
        "id": "SAO_PAULO",
        "name": "São Paulo"
    },
    {
        "id": "TOCANTINS",
        "name": "Tocantins"
    }
]
