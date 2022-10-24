import React, {ChangeEvent, useState} from 'react';

export const ControlledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div>
            <input value={value} onChange={onChange}/>
        </div>
    );
};

