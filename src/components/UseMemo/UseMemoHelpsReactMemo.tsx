import React, {useMemo, useState} from 'react';
import {Users} from "./Users";

export const UseMemoHelpsReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['alex', 'mike', 'max'])

    const addCount = () => {
        console.log('counter rerendered')
        setCounter(counter + 1)
    }

    let newUsers = useMemo(() => {
        users.filter(u => u.indexOf('e') >= 0)
        return users
    }, [users])

    return (
        <div>
            <div>
                {counter}
                <button onClick={addCount}>+</button>
            </div>
            <Users users={newUsers} addUser={setUsers}/>
        </div>
    );
};
