import React, {useReducer, useState} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type UncontrolledAccordionPropsType = {
    title: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {


    // const [collapsed, setCollapsed] = useState(false)

    const [state, dispatch] = useReducer(reducer, {collapsed:false})

    console.log('Accordion rendering')
    return (<div>
            {/*<UncontrolledAccordionTitle title={props.title} onClick={()=>{setCollapsed(!collapsed)}} value = {collapsed}/>*/}
            <UncontrolledAccordionTitle title={props.title} onClick={()=>{dispatch({type:TOGGLE_COLLAPSED})}} value = {state.collapsed}/>
            {!state.collapsed && <UncontrolledAccordionBody/>}
        </div>
    )
}

type UncontrolledAccordionTitlePropsType = {
    value:boolean
    title: string
    onClick:(collapsed:boolean)=>void
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    return (
        <h3 onClick={()=>props.onClick(!props.value)}>{props.title}</h3>
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

export default React.memo(UncontrolledAccordion);