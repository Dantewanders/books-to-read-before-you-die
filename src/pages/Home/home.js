import React from 'react'
import Header from '../../components/Header/header'
import { Outlet } from 'react-router-dom'

function Home(props) {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  )
}

export default Home