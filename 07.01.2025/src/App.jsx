import { Route, Routes } from 'react-router-dom'
import './App.css'
import ClientLayout from './ClientLayouts'
import AddProduct from './pages/AddProduct'
import Basket from './pages/Basket'
import Details from './pages/Details'
import Favorites from './pages/Favorites'
import Home from './pages/Home'

function App() {


  return (
    <>
   <Routes>
  <Route path = "/" element = {<ClientLayout />}>
<Route index element = {<Home />}/>
<Route path = "/Favorite" element = {<Favorites />}/>
<Route path = "/Basket" element = {<Basket />}/>
<Route path = "/Addproduct" element = {<AddProduct />}/>
<Route path="/details/:id" element={<Details />}/>
</Route>
</Routes>
    </>
  )
}

export default App
