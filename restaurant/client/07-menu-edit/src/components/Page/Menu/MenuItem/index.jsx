import React from 'react'

const MenuItem = ({ title, description, price }) => {
  return (
    <div className='menu-item'>
      <div className='menu-item-left'>
        <div className='menu-item-title'>{title}</div>
        <div className='menu-item-description'>{description}</div>
      </div>
      <div className='menu-item-right'>{price}</div>
    </div>
  )
}

export default MenuItem
