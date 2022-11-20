import React, {useEffect, useState} from 'react';

export const UseEffect = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    useEffect(() => {
        console.log('UseEffect every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('UseEffect only first render(componentDidMount)')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('UseEffect first render and every change of counter')
        document.title = counter.toString()
    }, [counter])
    return (
        <div>
            <div>{counter}</div>
            <button onClick={()=>{setCounter(counter+1)}}>counter+</button>
            <div>{fake}</div>
            <button onClick={()=>{setFake(fake+1)}}>fake+</button>
        </div>
    );
};

