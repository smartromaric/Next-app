import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <div> Test one okk</div>
      <Link href="/users">users</Link> <br />
      <Link href="/users/news">news</Link>
      <ProductCard/>
    </main>
  )
}
