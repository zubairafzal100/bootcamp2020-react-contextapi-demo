import React, { useContext } from 'react';
import CounterContext from './counterContext';

const Child = () => {

    let counterValue = useContext(CounterContext);

    return (
        <div>
            <h2> This is Context Api Child </h2>
            <h3> Counert Value is: {counterValue[0]}</h3>
            <button onClick = {() => {counterValue[1](++counterValue[0])}}> Increase Context Value </button>
            <button onClick = {() => {counterValue[1](--counterValue[0])}}> Decrease Context Value </button>
        </div>
    )
}

export default Child;