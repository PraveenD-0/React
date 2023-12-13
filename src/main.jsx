import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createStore } from 'redux';


const counterReducer = (state = 0, action) => {
    console.log(action);
    switch (action.type) {
        case 'INCR':
            return state + 1;
        case 'DECR':
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(counterReducer);


console.log(store.getState());

store.dispatch({
    type: 'INCR'
})

console.log(store.getState());

store.dispatch({
    type: 'INCR'
})

console.log(store.getState());

store.dispatch({
    type: 'DECR'
})

console.log(store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(<App />);