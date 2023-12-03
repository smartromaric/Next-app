import React from 'react'


interface Props{
  params:{id:number; photoId:number}
}
const pages = ({params:{id,photoId}}:Props) => {
  return (
    <div>photo of user N°{id} ,photo : {photoId}</div>
  )
}

export default pages