import React from 'react';

export type ClockPropsType = {
    date: Date
}
export const DigitClockView: React.FC<ClockPropsType> = ({date}) => {
    const transfer = (number: number) => {
        return number > 9
            ? number
            : '0' + number
    }
    let hours = transfer(date.getHours())
    let minutes = transfer(date.getMinutes())
    let seconds = transfer(date.getSeconds())
    return (
        <div>
            {hours}:{minutes}:{seconds}
        </div>
    );
};

