import React, {useEffect, useState} from 'react';

const transfer = (number:number) => {
    return number > 9
        ? number
        : '0' + number
}

export const UseEffectWithInterval = () => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        console.log('clock')
        setInterval(() => {
            setDate(new Date(Date.now()))
        }, 1000)
    }, [])
    let hours = transfer(date.getHours())
    let minutes = transfer(date.getMinutes())
    let seconds = transfer(date.getSeconds())
    return (
        <div>
            <div>{hours}:{minutes}:{seconds}</div>
        </div>
    );
};

