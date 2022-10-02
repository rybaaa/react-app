import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    title: string
}


function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {


    const [collapsed, setCollapsed] = useState(false)

    console.log('Accordion rendering')
    return (<div>
            <UncontrolledAccordionTitle title={props.title}/>
            <button onClick={()=>{setCollapsed(!collapsed)}}>toggle</button>
            {!collapsed && <UncontrolledAccordionBody/>}
        </div>
    )
}

type UncontrolledAccordionTitlePropsType = {
    title: string
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    )
}

function UncontrolledAccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;