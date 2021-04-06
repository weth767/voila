
const INITIAL_STATE = {
    userLogged: false,
    userEmail: "",
    username: "",
    image: null,
    restaurantId: null,
    clientId: null,
    orderItems: []
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
                clientId: action.payload.restaurantId,
                orderItems: []
            };
        case 'LOGOUT':
            return {
                ...state,
                userLogged: false,
                userEmail: "",
                username: "",
                image: null,
                status: "",
                orderItems: [],
                clientId: null,
                restaurantId:null
            };
        case 'ORDER':
            return {
                ...state,
                orderItems: action.payload.orderItems,
                restaurantId: action.payload.restaurantId
            };
        case 'NEW_ORDER':
            return {
                ...state,
                orderItems: [],
                restaurantId: null
            };
        default:{
                return state 
            }
    }
}
