import React from "react";
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';

import { routes } from "./constant/navigation";

import { OnBoarding } from "./pages/on-boarding/on-boarding";
import { MainParams } from "./pages/main-params/main-params";
import { Region } from "./pages/region/region";
import { Model } from "./pages/model/model";
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
                    <Route path={routes.regionPage} component={Region}/>
                    <Route path={routes.model} component={Model}/>
                    <Route component={() => <div>Not found</div>}/>
                </Switch>
            </Router>
        </ContainerStyled>
    </AppStyled>
)

export default App;
