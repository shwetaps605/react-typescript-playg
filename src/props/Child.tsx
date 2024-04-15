import React from "react"

interface ChildProps {
    color:string,
    randNum: number
}

export const Child = ({color,randNum}: ChildProps) => {
    return (
        <div>
            <h3>
                Hello from the child component!!
            </h3>
            <p>Prop color from parent: {color}</p>
            <p>Prop randNum from parent: {randNum}</p>

        </div>
    )
}

export const ChildV2 : React.FC<ChildProps> = ({color,randNum}) => {
    return (
        <div>
            <h3>
                Hello from the child V2 component!!
            </h3>
            <p>Prop color from parent: {color}</p>
            <p>Prop randNum from parent: {randNum}</p>

        </div>
    )
}


