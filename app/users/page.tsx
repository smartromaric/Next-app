
import React from 'react'
import UsersTable from './UsersTable'

interface Props{
  searchParams : {sortOrder : string}
}

const users = ({searchParams:{sortOrder}}:Props) => { 
  return (
    <>
    <h1>User list</h1>
    <UsersTable sortOrder = {sortOrder} />
    </>
  )
}

export default users