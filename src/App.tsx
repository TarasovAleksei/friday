import React, {useEffect} from 'react';
import './App.module.css';
import {Error404} from "./Components/Error404/Error404";
import {Redirect, Route, Switch} from 'react-router-dom';
import s from './App.module.css'
import {RegistrationContainer} from "./Components/Registration/RegistrationContainer";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import {RecoveryPasswordContainer} from "./Components/RecoveryPassword/RecoveryPasswordContainer";
import {AuthContainer} from "./Components/Auth/AuthContainer";
import {initializeAppTC} from "./Store/appReducer";
import {useDispatch, useSelector} from "react-redux";
import {ProfileContainer} from './Components/Profile/ProfileContainer';
import {NewPasswordContainer} from "./Components/NewPassword/NewPasswordContainer";
import {AppRootStateType} from "./Store/redux-store";
import {CheckEmail} from "./Components/CheckEmail/CheckEmail";


function App() {

    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    if (!isInitialized) {
        return <h1
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%', color: 'green'}}>
            Loading...
        </h1>
    }

    return (
        <div className="App">
            {/*<HeaderContainer/>*/}
            <div className={s.test}>
                <Switch>
                    <Route exact path={'/'} render={() => <AuthContainer/>}/>
                    <Route path={'/registration'} render={() => <RegistrationContainer/>}/>
                    <Route path={'/profile'} render={() => <ProfileContainer/>}/>
                    <Route path={'/recoverypassword'} render={() => <RecoveryPasswordContainer/>}/>
                    <Route path={'/newpassword/:tokenForPass?'} render={() => <NewPasswordContainer/>}/>
                    <Route path={'/CheckEmail'} render={() => <CheckEmail/>}/>
                    <Route path={'/404'} render={() => <Error404/>}/>
                    <Redirect from={'*'} to={'/404'}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;

