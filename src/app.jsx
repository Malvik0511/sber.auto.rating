import React from "react";
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';

import { routes } from "./constant/navigation";

import { OnBoarding } from "./pages/on-boarding/on-boarding";
import { MainParams } from "./pages/main-params/main-params";
import {
    AppStyled,
    ContainerStyled
} from './app.style'

const history = createBrowserHistory();

const App = () => (
    <AppStyled>
        <ContainerStyled>
            <Router history={history}>
                <Switch>
                    <Route path={routes.main} component={OnBoarding} exact/>
                    <Route path={routes.firstPage} component={MainParams} />
                    <Route component={() => <div>Not found</div>}/>
                </Switch>
            </Router>
        </ContainerStyled>
    </AppStyled>
)

export default App;
