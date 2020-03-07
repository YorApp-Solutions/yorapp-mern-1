import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import RootReducer from './rootReducer';
import App from './containers/App/App.jsx';

const store = createStore(RootReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
