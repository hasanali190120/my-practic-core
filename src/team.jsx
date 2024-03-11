import { useState } from "react"

export default function Team(){
    const [team,setTeam] =useState(11);

    const handleUse=()=>{
        const newTeam=team +1
        setTeam(newTeam)
    }
    const styleAdd={
        border:'2px solid red',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }
    return(
        <div style={styleAdd}>
            <h3>players:{team} </h3>
            <button onClick={handleUse}>add</button>
        </div>
    )
}