import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
// import './App.css';
// import Home from './Container.page/Home'
import Login from './Login/Login';
import Registration from './Registraion/Registration';
import MainPage from './Container.page/container';

const App = () => {
    return (
        <>
            <div className="App container">
                <Switch>
                    {/* <Route path="/" exact component={Home} /> */}
                    <Route path="/registration"  component={Registration} />
                    <Route path="/login"  component={Login} />
                    <Route path="/container/cards" component={MainPage} />
                </Switch>
            </div>
        </>
    );
};

export default App;