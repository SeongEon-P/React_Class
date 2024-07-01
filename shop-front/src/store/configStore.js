import {combineReducers, legacy_createStore as createStroe} from 'redux'
import userReducer from './reduces/user'

const allReducers=combineReducers({
    user:userReducer
})

const store=createStroe(allReducers);

export default store;