import React, { useEffect, useRef, useState } from "react";

interface GuestListProps {
    users: string[] | undefined,
    onNewGuest: (guest:string) => void
}

const GuestList: React.FC<GuestListProps> = ({users,onNewGuest}) => {
    const [name,setName] = useState('');
    // const [guests,setGuests] = useState<string[]>([])
    const inputRef = useRef<HTMLInputElement|null>(null);

    useEffect(()=>{
        // if(!users)return
        // setGuests(users)

        if(!inputRef.current) return
        inputRef.current.focus();
    },[])

    const onAddGuestClick = () => {
        setName("");
        onNewGuest(name);
        //setGuests([...guests,name])
    }

    const onInputNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const onDragStart =(event:React.DragEvent<HTMLDivElement>)=>{
        console.log(event)
    }

    return(
        <section>
            <h3>
            Guest List component!
            </h3>
           
            <input ref={inputRef} type="text" value={name} onChange={onInputNameChange} />
            <button onClick={onAddGuestClick}>Add Guest</button>
            <div draggable onDragStart={onDragStart}>
                Drag ME
            </div>
        </section>
    )
}

export default GuestList;