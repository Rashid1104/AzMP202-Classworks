import React from 'react'
import Header from '../layourts/ClientHeader'
import { Outlet } from 'react-router-dom'

const ClientLayout = () => {
  return (
    <>
<Header />
<Outlet/>
    </>
  )
}

export default ClientLayout