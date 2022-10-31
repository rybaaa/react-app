import React from 'react';

type CounterPropsType = {
    counter: number
    addCount: (count: number) => void
}

export const Counter = React.memo( (props: CounterPropsType) => {
    console.log('counter rerendered')
    const addCount = () => {
        props.addCount(props.counter + 1)
    }
    return (
        <div>
            {props.counter}
            <button onClick={addCount}>+</button>
        </div>
    );
});

