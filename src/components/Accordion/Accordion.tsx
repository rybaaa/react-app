import React from "react";

type ItemsType = {
    title:string
    id:number
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
    items: ItemsType[]
}


function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')


    return (<div>
            <AccordionTitle title={props.title} collapsed={props.collapsed} onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody items={props.items}/>}
        </div>
    )
}

type AccrodionTitlePropsType = {
    collapsed: boolean
    onClick: (collapsed: boolean) => void
    title: string
}

function AccordionTitle(props: AccrodionTitlePropsType) {
    const onClickHandler = () => {
        props.onClick(!props.collapsed)
    }
    return <h3 onClick={onClickHandler}>{props.title}</h3>

}

type AccrodionBodyPropsType = {
    items: ItemsType[]
}

function AccordionBody(props: AccrodionBodyPropsType) {
    return (
        <ul>
            {props.items.map(el => <li key={el.id} onClick={()=>{alert(el.title)}}>{el.title}</li>)}
        </ul>
    )
}

export default Accordion;