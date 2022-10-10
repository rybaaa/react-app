import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating,} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import s from './App.module.css'

function App() {
    const [rating, setRating] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
    const [collapsed, setCollapsed] = useState(false)
    const [switcher, setSwitcher] = useState(false)
    return (
        <div className={s.app}>
            <PageTitle title ={'This is APP component'}/>
            <PageTitle title ={'My friends'}/>
            Article 1
            <Rating value={rating} onClick={setRating} />
            <Accordion title={'Menu'} collapsed={collapsed} onClick={setCollapsed}/>
            <Accordion title={'Users'} collapsed={collapsed} onClick={setCollapsed}/>

            Article 2
            <Rating value={rating} onClick = {setRating}/>

            <OnOff value={switcher} onClick = {setSwitcher} />

            <UncontrolledAccordion title={'Menu'}

            />

            <UncontrolledRating />


        </div>
    );
}

type PageTitlePropsType = {
    title:string
}
function PageTitle(props:PageTitlePropsType) {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
