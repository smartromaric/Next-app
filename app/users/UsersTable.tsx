import React from 'react'
import {sort} from "fast-sort"
import Link from 'next/link';
interface User {
    id : number;
    name : string;
    email:string;
    
}
interface Props{
    sortOrder : string
}

const UsersTable = async ({sortOrder}:Props) => {// msut be async for fetch data
    const res = await fetch('https://jsonplaceholder.typicode.com/users',{next:{revalidate:10}}); //await word is important
    // {next:{revalidate:10}} veut dire que les data vont etre recharge tout les 10 s.
    
    const Users : User[]  = await res.json(); // .json() //get in json
    // const usersSorted = () => console.log("ok rigth")
    const sortedUsers=sort(Users).asc(sortOrder === "email"? user => user.email: user => user.name)
  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
        <th>
            <Link href="/users?sortOrder=name">Name</Link>
            </th>
        <th>
        <Link href="/users?sortOrder=email">Email</Link>
        </th>
        </tr>
      </thead>
      <tbody>
      {sortedUsers.map(user =><tr key = {user.id} >
         <td>{user.name}</td>
         <td>{user.email}</td>
         </tr>)} 
      </tbody>
    </table>
  )
}

export default UsersTable