import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const{id,name,phone,website,address}=props.friend;
    
    

    const friendStyle={
        border:'3px solid goldenrod',
        padding:'10px',
        borderRadius:'10px'
    }
    
    return (
        <div style={friendStyle}>
            <h2>this is :{name} {id}</h2>
            <h5>Call me:{phone} </h5>
            <p>visit me: {website}</p>
            <p><small>i live in:{address.city}</small></p>
            <Link to={`/friend/${id}`}>visit me</Link>
            <br />
            <Link to={`/friend/${id}`}>
                <button>visit me</button>
            </Link>
            <br />
            <button >visit me to 2</button>
        </div>
    );
};

export default Friend;