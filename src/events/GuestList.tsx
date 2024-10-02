import { wait } from "@testing-library/user-event/dist/utils";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { ThemeContext } from "../context/useTheme";
import { signal } from "@preact/signals-react";

interface GuestListProps {
    users: string[] | undefined,
    onNewGuest: (guest:string) => void
}

const GuestList: React.FC<GuestListProps> = ({users,onNewGuest}) => {
    // const { darkTheme } = useContext(ThemeContext);
    // console.log("THEME CONTEXT->", darkTheme)
    const [name,setName] = useState('');
    // const [guests,setGuests] = useState<string[]>([])
    const inputRef = useRef<HTMLInputElement|null>(null);
    const [waitList, setWaitList] = useState(0);

    const superSlowFunction = () => {
        for(let i=0;i<1000000000;i++);
        return name + " ick"
    }

    const item = signal("ROY")
    console.log("item->", item)

    // const newName = useMemo(()=>{
    //     return superSlowFunction()
    // },[name])

    useEffect(()=>{
        // if(!users)return
        // setGuests(users)
        console.log("USE EFECT called")
        console.log(inputRef.current?.value)
        if(!inputRef.current) return
        inputRef.current.focus();
        setWaitList(prev => users ? 6 - users?.length : prev)
    },[])

    useEffect(()=>{
        console.log("USE EFFECT called for users")
        setWaitList(prev => users ? 6 - users?.length : prev)
    },[users])

    const onAddGuestClick = () => {
        onNewGuest(name);
        if(inputRef.current) {
            inputRef.current.value = "";
            if(waitList !== 0)
            inputRef.current.focus();
        }
    }

    const onInputNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const onDragStart =(event:React.DragEvent<HTMLDivElement>)=>{
        //console.log(event)
    }

    const isWaitlistFull = () => {
        return waitList === 0 ? true : false;
    }

    

    return(
        <section>
            <h3>
            Guest List component!
            </h3>
           
            <input ref={inputRef} type="text" onChange={onInputNameChange} disabled={isWaitlistFull()} />
            <button onClick={onAddGuestClick}>Add Guest</button>
            {/* <div draggable onDragStart={onDragStart}>
                Drag ME
            </div> */}
            
            <div>
                { waitList === 0 ? 'WAITLIST FULL' : 'current space in waitlist->' +waitList }
            </div>

        </section>
    )
}

export default GuestList;