
const INITIAL_STATE = {
    userLogged: false,
    userEmail: "",
    username: "",
    image: null,
    restaurantId:null
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
            };
        case 'LOGOUT':
            return {
                ...state,
                userLogged: false,
                userEmail: "",
                username: "",
                image: null,
                status: "",
            };
        case 'IMAGE':
            return {
                ...state,
                image :action.payload.image,
            };
        default:{
                return state 
            }
    }
}