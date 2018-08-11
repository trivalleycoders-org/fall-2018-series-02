import React from 'react'

const MenuItem = ({ index, title, description, price, handleItemChange }) => {
  const handleChange = (fieldName, value) => {
    handleItemChange(index, fieldName, value)
  }
  return (
    <div className='menu-edit-item'>
      <div className='menu-edit-item-left'>
        <input className='title-input' type='text' value={title} onChange={(event) => handleChange('title', event.target.value)}  /><br/>
        <input className='description-input' type='text' value={description} onChange={(event) => handleChange('description', event.target.value)}  />
      </div>
      <div className='menu-edit-item-right'>
        <input className='price-input' type='text' value={price} onChange={(event) => handleChange('price', event.target.value)}  />
      </div>
    </div>
  )
}

export default MenuItem
