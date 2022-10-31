import React from 'react';

type UsersPropsType = {
    users:Array<string>
    addUser:(users:Array<string>)=>void
}

export const Users = React.memo((props:UsersPropsType) => {
    console.log('users rerendered')
    const newUser = 'NewUser'
    const addUser = () => {
        props.addUser([...props.users, newUser])
    }

    return (
        <div>
            {props.users.map((u,i)=> <div key={i}>{u}</div>)}
            <button onClick={addUser}>Add New User</button>
        </div>
    );
})

