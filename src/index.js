import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styles from './assets/css/base.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    </Provider>, 
    document.getElementById("root")
);

