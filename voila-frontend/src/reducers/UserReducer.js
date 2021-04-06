
const INITIAL_STATE = {
    userLogged: false,
    userEmail: "",
    username: "",
    image: null,
    restaurantId: null,
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
                orderItems: []
            };
        case 'ORDER':
            return {
                ...state,
                orderItems: action.payload.orderItems
            };
        default:{
                return state 
            }
    }
}
