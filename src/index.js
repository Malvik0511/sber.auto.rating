import React from 'react';
import ReactDOM from 'react-dom';
import { DeviceThemeProvider, SSRProvider } from '@sberdevices/plasma-ui';
import { createGlobalStyle } from 'styled-components';
import { darkJoy, darkEva, darkSber } from '@sberdevices/plasma-tokens/themes';

import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './styles/global-style';

const ThemeBackgroundEva = createGlobalStyle(darkEva);
const ThemeBackgroundSber = createGlobalStyle(darkSber);
const ThemeBackgroundJoy = createGlobalStyle(darkJoy);


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <DeviceThemeProvider>
    <ThemeBackgroundSber/>
        <SSRProvider>
            <App />
            <GlobalStyle />
        </SSRProvider>
    </DeviceThemeProvider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
