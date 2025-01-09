import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import axios from "axios"

import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const BASE_URL = "http://localhost:8080"


  const getProducts = async () => {
    try {
      setLoading(true)
      const res = await axios(`${BASE_URL}/products`)
      console.log(res.data);
      
    
      setProducts(res.data.data)
      

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (pId) => {
    try {
      const res = await axios.delete(`${BASE_URL}/products/${pId}`)

      console.log(res);

      if (res.status === 200) {
      
        setProducts([...products.filter((p) => p.id !== pId)])
      } else {
        throw new Error("failed to delete")
      }

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getProducts();
 
  }, [])
  
  const confirmDelete = (pId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(pId)
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
      } 
    })
  }
  return (
    <>
      <ul>
        {products.length > 0 && products.map((p) => {
          return <li key={p.id}><span>{p.title}</span> <button onClick={() => {         
            confirmDelete(p.id) 
          }}>delete</button></li>
        })}
      </ul>
    </>
  )
}

export default App
