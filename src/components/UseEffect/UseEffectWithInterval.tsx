import React, {useEffect, useState} from 'react';

export const UseEffectWithInterval = () => {
    const [timer, setTimer] = useState<undefined | number>(undefined)
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        let id:number = +setInterval(() => {
            setDate(new Date(Date.now()))
        }, 1000)
        setTimer(id)
    }, [])
    let hours = date.getHours() > 9? date.getHours(): '0' + date.getHours()
    let minutes = date.getMinutes() > 9? date.getMinutes(): '0' + date.getMinutes()
    let seconds = date.getSeconds() > 9? date.getSeconds(): '0' + date.getSeconds()
    return (
        <div>
            <div>{hours}:{minutes}:{seconds}</div>
        </div>
    );
};

