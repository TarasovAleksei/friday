import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {appReducer} from "./appReducer";
import {authReducer} from "./authReducer";
import {registrationReducer} from "./registrationReducer";

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    registration: registrationReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
