import React, {useState} from "react";
import s from './UncontrolledRating.module.css'


export const UncontrolledRating = React.memo( ()=> {
    const [value, setValue] = useState(0)

    return (
        <div className={s.rating}>
            <Star selected={value > 0} onClick={setValue} value={1}/>
            <Star selected={value > 1} onClick={setValue} value={2}/>
            <Star selected={value > 2} onClick={setValue} value={3}/>
            <Star selected={value > 3} onClick={setValue} value={4}/>
            <Star selected={value > 4} onClick={setValue} value={5}/>
        </div>
    );
})

type StarsPropType = {
    value: 1 | 2 | 3 | 4 | 5
    selected: boolean
    onClick: (value: 1 | 2 | 3 | 4 | 5) => void
}

const Star= React.memo ((props: StarsPropType) => {

    if (props.selected) {
        return (<span>
                <img
                    className={s.star} src='https://www.svgrepo.com/show/5127/star.svg' alt='logostar'
                    onClick={() => {
                        props.onClick(props.value)
                    }}
                />
            </span>
        )
    } else {
    }
    return <span>
        <img className={s.star} src='https://www.svgrepo.com/show/131116/star.svg' alt='logostar'
             onClick={() => {
                 props.onClick(props.value)
             }}
        />
    </span>
})
