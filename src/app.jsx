import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'

import { routes } from "./constant/navigation";

import { OnBoarding } from "./pages/on-boarding/on-boarding";
import { MainParams } from "./pages/main-params/main-params";
import { SecondaryFlowWrapper } from "./components/secondary-flow-wrapper/secondary-flow-wrapper"
import { Region } from "./pages/region/region";
import { Model } from "./pages/model/model";
import {
    AppStyled,
    ContainerStyled
} from './app.style'

const App = () => (
    <AppStyled>
        <ContainerStyled>
            <BrowserRouter>
                <Routes>
                    <Route 
                        path={routes.main}
                        element={<OnBoarding />}/>
                    <Route 
                        path={routes.mainParams} 
                        element={<MainParams/>} />
                    <Route 
                        path={routes.subflow}
                        element={<SecondaryFlowWrapper nastedRotes={[routes.regionPage, routes.model]}>
                            <Outlet/></SecondaryFlowWrapper>}>
                        <Route 
                            path={routes.regionPage} 
                            element={<Region/>} />
                        <Route
                            path={routes.model} 
                            element={<Model/>}/>
                    </Route>
                    <Route 
                        path="*" 
                        element={ <div>Not found</div>}
                    />
                </Routes>
            </BrowserRouter>
        </ContainerStyled>
    </AppStyled>
)

export default App;
