import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";

// types
export type UserType = {
    _id: string// need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]); // need to fix any

    const addUserCallback = (name: string) => {
        let newUsers = [{_id: v1(), name: name}, ...users]

        // need to fix any
        setUsers(newUsers); // need to fix

    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        </div>
    );
}

export default HW3;
