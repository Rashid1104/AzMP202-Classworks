import React from 'react'
import { Outlet } from 'react-router-dom'
import ClientHeader from "../../layouts/Client/header"

const ClientLayouts = () => {
  return (
    <>
    <ClientHeader />
<Outlet />
    </>
  )
}

export default ClientLayouts