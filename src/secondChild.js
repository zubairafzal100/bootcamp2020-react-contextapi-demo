import React, { useReducer } from 'react';
import counterReducer from './counterReducer';

const SecondChild = () => {

    let [state, dispatch] = useReducer(counterReducer, 0);

    return (
        <div>
            <h2>This is Reducer State Child</h2>
            <h3> Reducer State Value is: {state}</h3>
            <button onClick = {() => {dispatch('INCREMENT')}}>Update Reducer Value</button>
            <button onClick = {() => {dispatch('DECREMENT')}}>Update Reducer Value</button>
        </div>       
    )
}

export default SecondChild;