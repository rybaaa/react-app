import React from 'react';
import {ClockPropsType} from "./DigitClockView";
import styles from './AnalogClockView.module.css'

export const AnalogClockView: React.FC<ClockPropsType> = ({date}) => {
    return (
        <div className={styles.clock}>
            <div
                className={styles.hour_hand}
                style={{
                    transform: `rotateZ(${date.getHours() * 30}deg)`
                }}
            />
            <div
                className={styles.min_hand}
                style={{
                    transform: `rotateZ(${date.getMinutes() * 6}deg)`
                }}
            />
            <div
                className={styles.sec_hand}
                style={{
                    transform: `rotateZ(${date.getSeconds() * 6}deg)`
                }}
            />
            <span className={styles.twelve}>12</span>
            <span className={styles.one}>1</span>
            <span className={styles.two}>2</span>
            <span className={styles.three}>3</span>
            <span className={styles.four}>4</span>
            <span className={styles.five}>5</span>
            <span className={styles.six}>6</span>
            <span className={styles.seven}>7</span>
            <span className={styles.eight}>8</span>
            <span className={styles.nine}>9</span>
            <span className={styles.ten}>10</span>
            <span className={styles.eleven}>11</span>
        </div>
    );
};

