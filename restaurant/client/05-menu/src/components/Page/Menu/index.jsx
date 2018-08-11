import React from 'react'
import MenuItem from './MenuItem'

const Menu = (props) => {
  const renderItems = props.menuItems.map((i, index) => (
    <MenuItem
      key={index}
      title={i.title}
      description={i.description}
      price={i.price}
    />
  ))
  return (
    <div className='menu'>
      <h2>Our Menu</h2>
      {renderItems}
    </div>
  )
}
export default Menu
