import React from 'react'


interface Props{
    params:{slug:string[]}  //tjrs params non parems 
    searchParams :{sortOrder : string}
}
const ProductsPage = ({params:{slug},searchParams:{sortOrder}}:Props) => { //destrusturing methode pour acceder au variable sans utiliser lel elts.autreelets
  return (
    <div>ProductsPage {slug} {sortOrder} </div>
  )
}

export default ProductsPage