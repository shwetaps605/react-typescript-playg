import { useState } from "react";
import GuestList from "../events/GuestList";
import { Child, ChildV2} from "./Child"

const defaultUsers = ['Alex','Bob','shirley']

const Parent = () => {
    const [users,setUsers] = useState<string[]>(defaultUsers)

    const updateUsersAfterGuestIsAdded = (guest:string) => {
        setUsers([...users,guest])
    }

    return <div>
        <h1>
        Hi! this is a parent component
        </h1>
        <ul>
            {users.map(user => <li key={user}>{user}</li>)}
        </ul>
        <Child color="red" randNum={0} />
        <ChildV2 color="GREEN" randNum={1}/>
        <GuestList users={users} onNewGuest={updateUsersAfterGuestIsAdded} />
    </div>
}

export default Parent;