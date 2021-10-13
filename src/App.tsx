import React from 'react';
import './App.css';
import {SuperComponents} from "./common/SuperComponents/SuperComponents";
import {Login} from "./Components/Login";
import {Registration} from "./Components/Registration";
import {Profile} from "./Components/Profile";
import Error404 from "./Components/Error404";
import {RecoveryPassword} from "./Components/RecoveryPassword";
import {NewPassword} from "./Components/NewPassword";
import {Redirect, Route} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Route exact path={'/'} render={() => <SuperComponents/>}/>
            <Route path={'/login'} render={() => <Login/>}/>
            <Route path={'/registration'} render={() => <Registration/>}/>
            <Route path={'/profile'} render={() =>  <Profile/>}/>
            <Route path={'/recoverypassword'} render={() =>  <RecoveryPassword/>}/>
            <Route path={'/newpassword'} render={() =>  <NewPassword/>}/>
            <Route path={'/404'} render={() => <Error404/>}/>
            {/*<Redirect from={'/*'} to={'/404'}/>*/}
        </div>
    );
}

export default App;
