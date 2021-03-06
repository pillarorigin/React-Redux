import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers';



//createStore(rootReducer)
const store = createStore(rootReducer)

//  1. Action & Action Creator

//  2. Reducer

render(
    <Provider store={store}>
        <App /> 
    </Provider>
, document.getElementById('root'));
