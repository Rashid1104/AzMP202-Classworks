
import { useEffect, useState } from 'react'
import './App.css'

function App() {
 const [products, setProducts] = useState([])
 const [loading, setLoading] = useState(null)
 const BASE_URL = "http://localhost:3000"

 const getProducts = async () => {
  try {
    setLoading(true)
    const res = await axios(`${BASE_URL}/products`)
    // console.log(res.data); 
    setProducts(res.data.data)
  } catch (error) {
    console.log(error);
  } 
}

useEffect(() => {
  getProducts()

}, [])

  return (
    <>
   <ul>
    { products.length > 0 && products.map((p)=>{
       return <li key={p.id}><span>{p.title}</span></li>
    })

    }
   </ul>
    </>
  )
}

export default App
