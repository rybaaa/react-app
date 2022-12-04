import React, {useEffect, useState} from 'react';

export const UseEffectReset = () => {
    const [text, setText] = useState('')
    const handler = (e: KeyboardEvent) => {
        setText((state) => state + e.key)
        console.log(e.key)
    }
    useEffect(() => {
        window.addEventListener('keypress', handler)
        return (() => {
            window.removeEventListener('keypress', handler)
        })
    }, [])
    return (
        <div>
            Text: {text}
        </div>
    );
};

