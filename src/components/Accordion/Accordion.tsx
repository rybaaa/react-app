import React from "react";

type AccordionPropsType = {
    title:string
    collapsed:boolean
    onClick: (collapsed:boolean) => void
}



function Accordion(props:AccordionPropsType) {
    console.log('Accordion rendering')


    return (<div>
            <AccordionTitle title={props.title} collapsed={props.collapsed} onClick = {props.onClick} />
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccrodionTitlePropsType = {
    collapsed:boolean
    onClick: (collapsed:boolean) => void
    title:string
}

function AccordionTitle(props:AccrodionTitlePropsType) {
    const onClickHandler = () => {props.onClick(!props.collapsed)}
    return <h3 onClick={onClickHandler}>{props.title}</h3>

}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;