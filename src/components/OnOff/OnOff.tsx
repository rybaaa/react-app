import React, {useState} from 'react';
import s from './OnOff.module.css'

type switcherType = {
    value:boolean
    onClick: (switcher:boolean) => void
}

export const OnOff = (props:switcherType) => {

    const onClickHandler = () => {props.onClick(!props.value)}

    const square1 = s.square + ' ' + (props.value? s.green: ' ')
    const square2 = s.square + ' ' + (props.value? ' ': s.red)
    const circle = s.circle + ' ' + (props.value? s.green: s.red)
    return (
        <div className={s.block}>
            <div onClick={onClickHandler} className={square1}>On</div>
            <div onClick={onClickHandler} className={square2}>Off</div>
            <div className={circle}></div>
        </div>
    );
};

