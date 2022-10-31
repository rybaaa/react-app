import React, {ChangeEvent, useState} from 'react';

export const ControlledSelect = React.memo(() => {
    const [value, setValue] = useState <string | undefined > ('1')
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div>
            <select value={value} onChange={onChange}>
                <option value={'1'}>none</option>
                <option value={'2'}>HTML</option>
                <option value={'3'}>CSS</option>
                <option value={'4'}>JS</option>
            </select>
        </div>
    );
});