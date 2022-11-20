import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating,} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import s from './App.module.css'
import {TrackingValueUncontrolledInput} from "./components/UncontrolledInput/TrackingValueUncontrolledInput";
import {GetValueOfUncontrolledInput} from "./components/UncontrolledInput/GetValueOfUncontrolledInput";
import {ControlledInput} from "./components/ControlledInput/ControlledInput";
import {ControlledCheckbox} from "./components/ControlledInput/ControlledCheckbox";
import {ControlledSelect} from "./components/ControlledInput/ControlledSelect";
import Select from "./components/Select/Select";
import {ReactMemo} from "./components/ReactMemo/ReactMemo";
import {UseMemo} from "./components/UseMemo/UseMemo";
import {UseMemoHelpsReactMemo} from "./components/UseMemo/UseMemoHelpsReactMemo";
import {UseStateAdvanced} from "./components/UseStateAdvanced/UseStateAdvanced";
import {UseEffect} from "./components/UseEffect/UseEffect";

function App() {
    const [rating, setRating] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
    const [collapsed, setCollapsed] = useState(false)
    const [switcher, setSwitcher] = useState(false)
    const [value, setValue] = useState<string>(' ')
    const [select, setSelect] = useState(false)

    return (
        <div className={s.app}>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={rating} onClick={setRating}/>
            <Accordion title={'Skill'} collapsed={collapsed} onClick={setCollapsed}
                       items={[{title: 'Student', id: 1}, {title: 'Front', id: 2}, {
                           title: 'Back',
                           id: 3
                       }, {title: 'Full', id: 4}, {title: 'PM', id: 5}]}/>
            {/*<Accordion title={'Users'} collapsed={collapsed} onClick={setCollapsed}/>*/}

            Article 2
            <Rating value={rating} onClick={setRating}/>

            <OnOff value={switcher} onClick={setSwitcher}/>

            <UncontrolledAccordion title={'Menu'}
            />
            <UncontrolledRating/>
            <TrackingValueUncontrolledInput/>
            <GetValueOfUncontrolledInput/>
            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>
            <Select value={value}
                    items={[
                        {value:'1', title: 'Student'},
                        {value:'2', title: 'Front'},
                        {value:'3', title: 'Back'},
                        {value:'4', title: 'Full'},
                        {value:'5', title: 'PM'}]}
                    select = {select}
                    onClick={setSelect}
                    onClickChangeValue={setValue}
            />
            <UncontrolledAccordion title={'Menu'}/>
            <ReactMemo/>
            <hr/>
            <UseMemo/>
            <UseMemoHelpsReactMemo/>
            <UseStateAdvanced/>
            <UseEffect/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

const PageTitle = React.memo((props: PageTitlePropsType) => {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
})

export default App;
