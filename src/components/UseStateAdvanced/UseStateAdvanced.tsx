import React, {useState} from 'react';

export const UseStateAdvanced = () => {
    const generateData = () => {
        console.log('generatedata')
        return 12
    }
    // const initValue = generateData()    если initValue в useState как начальное значение, то при увеличении счетчика, generateData каждый раз отрабатывает
    const [counter, setCounter] = useState(generateData)
    const changer = (state:number) => state+1
    return (
        <div>
            <div>
                <div>{counter}</div>
                <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
            <div>
                <div>{counter}</div>
                <button onClick={()=>setCounter(changer)}>+</button>
            </div>
        </div>

)
    ;
};
