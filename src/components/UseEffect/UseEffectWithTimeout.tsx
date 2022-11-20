import React, {useEffect, useState} from 'react';

export const UseEffectWithTimeout = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    useEffect(() => {
        setTimeout(()=> {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000)
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

