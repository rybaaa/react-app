import React from 'react';

type ItemsType = {
    title:string
    id:number
}

type SelectPropsType = {
    value: string
    items: ItemsType[]
    onClick:(select:boolean)=>void
    select:boolean
    onClickChangeValue:(tech:string)=>void
}

const Select = (props:SelectPropsType) => {
    const selectMenu = () => {
        props.onClick(!props.select)
    }
    return (
        <div>
            <div onClick={selectMenu}>{props.value}</div>
            {props.select && props.items.map(el=><li key={el.id} onClick={()=>{props.onClickChangeValue(el.title); props.onClick(!props.select) }}>{el.title}</li> )  }
        </div>
    );
};

export default Select;