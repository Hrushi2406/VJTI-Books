import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {getFirebase, reactReduxFirebase} from 'react-redux-firebase'
import {getFirestore, reduxFirestore} from 'redux-firestore'

import rootReducer from './store/reducers/rootReducer'
import fbConfig from './config/fbConfig'

const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig),
    )
);

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
