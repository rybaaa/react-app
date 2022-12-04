import React, {useEffect, useState} from 'react';
import {DigitClockView} from "./DigitClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode?: 'analog' | 'digit'
}

export const Clock = (props: PropsType) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        console.log('clock')
        setInterval(() => {
            setDate(new Date(Date.now()))
        }, 1000)
    }, [])

    let view
    switch (props.mode) {
        case 'digit':
            view = <DigitClockView date={date}/>
            break
        case 'analog':
        default:
            view = <AnalogClockView date = {date}/>
    }
    return (
        <div>
            {view}
        </div>
    );
};

