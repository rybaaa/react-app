import React from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    isOn:boolean
}

export const OnOff = (props:OnOffPropsType) => {
    const square1 = s.square + ' ' + (props.isOn? s.green: ' ')
    const square2 = s.square + ' ' + (props.isOn? ' ': s.red)
    const circle = s.circle + ' ' + (props.isOn? s.green: s.red)
    return (
        <div className={s.block}>
            <div className={square1}>On</div>
            <div className={square2}>Off</div>
            <div className={circle}></div>
        </div>
    );
};

