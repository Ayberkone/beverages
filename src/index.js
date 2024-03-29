import React from 'react';
import ReactDOM from 'react-dom';
import App from './drink/components/App';
import { Provider } from 'react-redux';
import './drink/assets/sass/app.scss';
import { store } from "./drink/Store";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
