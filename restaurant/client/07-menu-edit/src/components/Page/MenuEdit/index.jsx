import React from 'react'
import MenuItem from './MenuItem'

const MenuEdit = (props) => {

  const renderItems = props.menuItems.map((i, index) => (
    <MenuItem
      key={index}
      index={index}
      title={i.title}
      description={i.description}
      price={i.price}
      handleItemChange={props.handleMenuItemChange}
    />
  ))
  return (
    <div className='menu-edit'>
      <h2>Our Menu</h2>
      {renderItems}
      <button className='button menu-edit-done'
        onClick={props.handleEditMenuClick}>
        Done
      </button>
    </div>
  )
}
export default MenuEdit
