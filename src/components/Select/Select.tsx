import React, {useEffect, useState, KeyboardEvent} from 'react';
import s from './Select.module.css'

type ItemsType = {
    value: string
    title: string
}

type SelectPropsType = {
    value: string
    items: ItemsType[]
    onClick: (select: boolean) => void
    select: boolean
    onClickChangeValue: (tech: string) => void
}

const Select = (props: SelectPropsType) => {
    const [hoveredValue, setHoveredValue] = useState(props.value)
    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredValue)
    useEffect(() => {
        setHoveredValue(props.value);
    }, [props.value])

    const selectMenu = () => {
        props.onClick(!props.select)
    }
    const onClickChange = (title: any) => {
        props.onClickChangeValue(title);
        props.onClick(!props.select)
    }
    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < props.items.length; i++) {
            if (!selectedItem) {
                props.onClickChangeValue(props.items[0].value)
            }
            if (props.items[i].value === hoveredValue) {
                if (e.key === 'ArrowDown') {
                    if (props.items[i + 1]) {
                        props.onClickChangeValue(props.items[i + 1].value)
                        break;
                    }
                }
                if (e.key === 'ArrowUp') {
                    if (props.items[i - 1]) {
                        props.onClickChangeValue(props.items[i - 1].value)
                        break;
                    }
                }
                if (e.key === 'Enter' || e.key === 'Escape') {
                    props.onClickChangeValue(props.items[i].value)
                    props.onClick(!props.select)
                    break;
                }
        }
    }
}
return (
    <div>
        <div
            tabIndex={1}
            className={s.select}
            onKeyDown={onKeyDown}
            onClick={selectMenu}>{selectedItem && selectedItem.title}</div>
        <div className={s.items}>
            {props.select && props.items.map(el => <div
                onMouseEnter={() => {
                    setHoveredValue(el.value)
                }}
                className={s.item + ' ' + (hoveredItem === el ? s.selected : '')}
                key={el.value}
                onClick={() => onClickChange(el.value)}
            >{el.title}</div>)}
        </div>
    </div>
);
}
;

export default React.memo(Select);