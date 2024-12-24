
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './layouts/Admin/Footer'
import Header from './layouts/Admin/Header'
import NotFound from './Components/NotFound/INDEX.JSX'
import Contact from './Components/Contact'
import Products from './Components/Products'
import ProductDetails from './Components/ProductDetails'
import ClientLayout from './Components/Client/ClientLayouts'
import AdminLayout from './Components/Admin/AdminLayouts'

function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<ClientLayout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="/contact" element={<Contact />} />

          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Route>
        //admin layout
        <Route path="/admin" element={<AdminLayout />}>
          {/* <Route index element={<Dashboaard />} /> */}
          {/* <Route path="products" element={<AdminProducts />} /> */}
          {/* <Route path="users" element={<Users />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
