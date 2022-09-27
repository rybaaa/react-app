import React from "react";

type AccordionPropsType = {
    title:string
    collapsed:boolean
}



function Accordion(props:AccordionPropsType) {
    console.log('Accordion rendering')


    return (<div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccrodionTitlePropsType = {
    title:string
}

function AccordionTitle(props:AccrodionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3>{props.title}</h3>

}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;