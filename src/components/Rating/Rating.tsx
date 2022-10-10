import React from "react";
import s from "../UncontrolledRating/UncontrolledRating.module.css";

export type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
    onClick: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} value={1} onClick={props.onClick}/>
            <Star selected={props.value > 1} value={2} onClick={props.onClick}/>
            <Star selected={props.value > 2} value={3} onClick={props.onClick}/>
            <Star selected={props.value > 3} value={4} onClick={props.onClick}/>
            <Star selected={props.value > 4} value={5} onClick={props.onClick}/>
        </div>
    );
}

type StarsPropType = {
    selected: boolean
    value: 0 | 1 | 2 | 3 | 4 | 5
    onClick: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}

function Star(props: StarsPropType) {

    const onClickHandler = () => {props.onClick(props.value)}

    if (props.selected) {
        return (<span>
                <img
                    className={s.star} src='https://www.svgrepo.com/show/5127/star.svg' alt='logostar'
                    onClick={onClickHandler}
                />
            </span>
        )
    } else {
    }
    return <span>
        <img
            className={s.star} src='https://www.svgrepo.com/show/131116/star.svg' alt='logostar'
             onClick={onClickHandler}
        />
    </span>
}
