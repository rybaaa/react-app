import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log('App rendering')
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
