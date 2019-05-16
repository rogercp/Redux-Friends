import React from 'react';

const Friend=props=>{

return (
    <>
    <h2>{props.friend.name}</h2>
    <h3>Age: {props.friend.age}</h3>
    <h4>{props.friend.email}</h4>
    </>
)
}
export default Friend;