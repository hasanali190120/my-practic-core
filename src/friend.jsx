 import { useEffect, useState } from 'react'
import './friend.css'
import Friendss from './friendss'
 export default function Friend(){
    const[friends, setFriends] =useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data =>setFriends(data))
    },[])
     
     return(<div className='box'>
        <h3>Friend :{friends.length}</h3>
        {
            friends.map(friend=><Friendss friend={friend}>

            </Friendss>)
        }
     </div>
     )
}