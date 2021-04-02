import { combineReducers} from 'redux';
import RestaurantReducer from './RestaurantReducer';
import UserReducer from './UserReducer';

export default combineReducers({
    user: UserReducer,
    restaurant: RestaurantReducer
});