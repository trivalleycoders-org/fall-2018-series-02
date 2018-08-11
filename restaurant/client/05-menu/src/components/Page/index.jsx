import React, { Component } from 'react'
import Header from './Header'
import Gallery from './Gallery'
import Menu from './Menu'
import menuItems from '../../menu-data'

const Page = () => {
  return (
    <div>
      <Header />
      <Gallery />
      <Menu
        menuItems={menuItems}
      />
    </div>
  )
}

export default Page;
