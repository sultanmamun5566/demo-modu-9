import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    
    const [friend,setFriend]=useState({})
    const {friendId}=useParams();

    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setFriend(data))

    },[])
    return (
        <div>
            <h1>Deaatilllls:{friendId} </h1>
            <h1>{friend.name}</h1>
            <h2>{friend.phone}</h2>
            <h4>{friend.website}</h4>
            <p>{friend.company?.name}</p>
        </div>
    );
};

export default FriendDetail;