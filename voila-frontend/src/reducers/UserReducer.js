
const INITIAL_STATE = {
    userLogged: false,
    userEmail: "",
    username: "",
    image: null,
    restaurantId:null,
    order:{
        dateTime:null,
        totalValue:0.0,
        needExchange:false,
        exchange:0.0,
        paymentType:null,
        needDelivery:false,
        restaurantId:null,
        deliverypersonId:null,
        clientId:null,
        items:[]
    }
}

export default function UserReducer(state = INITIAL_STATE, action){
    switch (action.type){
        case 'LOGIN':
            return {
                ...state,
                userLogged: true,
                userEmail: action.payload.userEmail,
                username: action.payload.username,
                restaurantId: action.payload.restaurantId,
                order:{
                    dateTime:null,
                    totalValue:0.0,
                    needExchange:false,
                    exchange:0.0,
                    paymentType:null,
                    needDelivery:false,
                    restaurantId:null,
                    deliverypersonId:null,
                    clientId:null,
                    items:[]
                }
            };
        case 'LOGOUT':
            return {
                ...state,
                userLogged: false,
                userEmail: "",
                username: "",
                image: null,
                status: "",
                order:{
                    dateTime:null,
                    totalValue:0.0,
                    needExchange:false,
                    exchange:0.0,
                    paymentType:null,
                    needDelivery:false,
                    restaurantId:null,
                    deliverypersonId:null,
                    clientId:null,
                    items:[]
                }
            };
        case 'ORDER':
            return {
                ...state,
                order:{
                    dateTime: new Date(),
                    totalValue:action.payload.totalValue,
                    needExchange:action.payload.needExchange,
                    exchange:action.payload.exchange,
                    paymentType:action.payload.paymentType,
                    needDelivery:action.payload.needDelivery,
                    restaurantId:action.payload.restaurantId,
                    deliverypersonId:action.payload.deliverypersonId,
                    clientId:action.payload.clientId,
                    items:action.payload.items,
                }
            };
        
        default:{
                return state 
            }
    }
}