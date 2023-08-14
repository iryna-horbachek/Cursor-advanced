import { combineReducers, createStore } from "redux";
import AuthReducer from "./reducers/auth.reducer";
import UsersReducer from "./reducers/users.reducer";
import CounterReducer from "./reducers/counter.reducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const reducers = {
    auth: AuthReducer,
    users: UsersReducer,
    counter: CounterReducer
};

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer, composeWithDevTools());

export default store;

