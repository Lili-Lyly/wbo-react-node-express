import './App.css';

import Login from "./pages/login/login";
import Register from "./pages/register/register"

import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"
import Home from './pages/index/home';
import Accueil from "./pages/accueil/accueil";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/index"/>
                </Route>
                <Route path={'/login'} component={Login}/>
                <Route path={'/register'} component={Register}/>
                <Route path={'/index'} component={Home}/>
                <Route path={'/accueil'} component={Accueil}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
