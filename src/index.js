import React from 'react'
import { render } from 'react-dom'

import { createStore } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'

import App from './component/App'

//createStore(rootReducer)
const store = createStore(rootReducer)

//  1. Action & Action Creator

//  2. Reducer

render(
    <Provider store={store}>
        <App /> 
    </Provider>
, document.getElementById('root'));
