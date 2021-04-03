
const INITIAL_STATE = {
    userLogged: false,
    userEmail: "",
    username: "",
}

export default function RestaurantReducer(state = INITIAL_STATE, action){
    switch (action.type){
        case 'LOGIN':
            return {
                ...state,
                userLogged: true,
                userEmail: action.payload.userEmail,
                username: action.payload.username,
            };
        case 'LOGOUT':
            return {
                ...state,
                userLogged: false,
                userEmail: "",
                username: "",
            };
        
        default:{
                return state 
            }
    }
}