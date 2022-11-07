import React, {ChangeEvent, useMemo, useState} from 'react';

export const UseMemo = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)
    let resultB = 1

    const onChangeA = (e: ChangeEvent<HTMLInputElement>) => {
        setA(+e.currentTarget.value)
    }
    const onChangeB = (e: ChangeEvent<HTMLInputElement>) => {
        setB(+e.currentTarget.value)
    }

    let resultA = useMemo(() => {
        let temp = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                Math.random()
                fake++
            }
            temp *= i
        }
        return temp
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }
    return (
        <div>
            <input value={a} onChange={onChangeA}/>
            <input value={b} onChange={onChangeB}/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </div>
    );
};


