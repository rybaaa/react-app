import React, {ChangeEvent, useState} from 'react';

export const TrackingValueUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }
    return (
        <div>
            <input onChange={onChange}/>
            <button>save</button> actual value: {value}

        </div>
    );
};

