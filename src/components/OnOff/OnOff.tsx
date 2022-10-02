import React, {useState} from 'react';
import s from './OnOff.module.css'


export const OnOff = () => {
    const [on,setOn] = useState(false)

    const square1 = s.square + ' ' + (on? s.green: ' ')
    const square2 = s.square + ' ' + (on? ' ': s.red)
    const circle = s.circle + ' ' + (on? s.green: s.red)
    return (
        <div className={s.block}>
            <div onClick={()=>{setOn(true)}} className={square1}>On</div>
            <div onClick={()=>{setOn(false)}} className={square2}>Off</div>
            <div className={circle}></div>
        </div>
    );
};

