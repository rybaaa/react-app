import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating,} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    return (
        <div>
            <PageTitle title ={'This is APP component'}/>
            <PageTitle title ={'My friends'}/>
            Article 1
            <Rating value={3}/>
            <Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Users'} collapsed={false}/>

            Article 2
            <Rating value={4}/>

            <OnOff />
            <OnOff />

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
