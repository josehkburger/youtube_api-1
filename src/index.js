import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Login from './pages/login';
import Comentarios from './pages/comentarios';

ReactDOM.render(
    (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/sobre" component={Sobre}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/comentarios" component={Comentarios}/>
                </Switch>
            </App>
        </Router>
    ),
    document.getElementById('root')
);

