
import React from 'react'

interface User {
    id : number;
    name : string;
    
}

const users = async() => { // msut be async for fetch data
const res = await fetch('https://jsonplaceholder.typicode.com/users',{next:{revalidate:10}}); //await word is important
// {next:{revalidate:10}} veut dire que les data vont etre recharge tout les 10 s.

const Users : User[]  = await res.json(); // .json() //get in json

  return (
    <>
    <h4>User list</h4>
    <h4>{new Date().toLocaleTimeString()}</h4>
    <ul>{Users.map(user => <li key = {user.id} >{user.name}</li>)}</ul> 
    </>
    
  )
}

export default users