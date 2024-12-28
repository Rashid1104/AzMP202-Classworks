import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from "../../layouts/Admin/Header"

const AdminLayouts = () => {
  return (
    <>
    <AdminHeader />
<Outlet />
    </>
  )
}

export default AdminLayouts