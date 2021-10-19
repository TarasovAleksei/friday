import React, {useEffect} from 'react';
import './App.module.css';
import {Error404} from "./Components/Error404/Error404";
import {NewPassword} from "./Components/NewPassword/NewPassword";
import {Redirect, Route, Switch} from 'react-router-dom';
import s from './App.module.css'
import {RegistrationContainer} from "./Components/Registration/RegistrationContainer";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import {RecoveryPasswordContainer} from "./Components/RecoveryPassword/RecoveryPasswordContainer";
import {AuthContainer} from "./Components/Auth/AuthContainer";
import {initializeAppTC} from "./Store/appReducer";
import {useDispatch} from "react-redux";
import {ProfileContainer} from './Components/Profile/ProfileContainer';


function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeAppTC())
    }, [dispatch])

    return (
        <div className="App">
            <HeaderContainer/>
            <div className={s.test}>
                <Switch>
                    <Route exact path={'/'} render={() => <ProfileContainer/>}/>
                    <Route path={'/auth'} render={() => <AuthContainer/>}/>
                    <Route path={'/registration'} render={() => <RegistrationContainer/>}/>
                    <Route path={'/profile'} render={() => <ProfileContainer/>}/>
                    <Route path={'/recoverypassword'} render={() => <RecoveryPasswordContainer/>}/>
                    <Route path={'/newpassword'} render={() => <NewPassword/>}/>
                    <Route path={'/404'} render={() => <Error404/>}/>
                    <Redirect from={'*'} to={'/404'}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;

