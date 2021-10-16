import React from 'react';
import './App.module.css';
import {SuperComponents} from "./common/SuperComponents/SuperComponents";
import {Login} from "./Components/Login/Login";
import {Profile} from "./Components/Profile/Profile";
import {Error404} from "./Components/Error404/Error404";
import {RecoveryPassword} from "./Components/RecoveryPassword/RecoveryPassword";
import {NewPassword} from "./Components/NewPassword/NewPassword";
import {Redirect, Route, Switch} from 'react-router-dom';
import {Header} from "./Components/Header/Header";
import s from './App.module.css'
import {RegistrationContainer} from "./Components/Registration/RegistrationContainer";

function App() {

    return (
        <div className="App">
            <Header/>
            <div className={s.test}>
                <Switch>
                    <Route exact path={'/'} render={() => <SuperComponents/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <Route path={'/registration'} render={() => <RegistrationContainer/>}/>
                    <Route path={'/profile'} render={() => <Profile/>}/>
                    <Route path={'/recoverypassword'} render={() => <RecoveryPassword/>}/>
                    <Route path={'/newpassword'} render={() => <NewPassword/>}/>
                    <Route path={'/404'} render={() => <Error404/>}/>
                    <Redirect from={'*'} to={'/404'}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;

