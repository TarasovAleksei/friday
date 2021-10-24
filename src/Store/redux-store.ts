import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {appReducer} from "./appReducer";
import {authReducer} from "./authReducer";
import {registrationReducer} from "./registrationReducer";
import {forgotPasswordReducer} from "./forgotPasswordReducer";
import {packsReducer} from "./packsReducer";
import {cardsReducer} from "./cardsReducer";

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    registration: registrationReducer,
    forgotPassword: forgotPasswordReducer,
    packs: packsReducer,
    cards: cardsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
