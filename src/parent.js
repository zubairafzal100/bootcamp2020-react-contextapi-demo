import React from 'react';
import Child from './child';
import SecondChild from './secondChild';

const Parent = () => {
    return (
        <div>
            <Child />
            <SecondChild />
        </div>
    )
}

export default Parent;