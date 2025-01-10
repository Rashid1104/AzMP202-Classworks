import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../layourts/AdminHeader'

const AdminLayout = () => {
  return (
    <>
<Header />
<Outlet/>
    </>
  )
}

export default AdminLayout