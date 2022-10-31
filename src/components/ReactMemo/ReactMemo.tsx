import React, {useState} from 'react';
import {Counter} from "./Counter";
import {Users} from "./Users";

export const ReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['alex', 'nick', 'max'])

    return (
        <div>
            <Counter
                counter={counter}
                addCount={setCounter}/>
            <Users
                users={users}
                addUser={setUsers}/>
        </div>

    );
};

