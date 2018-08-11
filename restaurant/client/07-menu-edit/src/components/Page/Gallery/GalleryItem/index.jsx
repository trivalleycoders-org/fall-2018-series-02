import React from 'react'

const galleryItem = (props) => {
  let { title, description, image, price } = props.item

  return (
    <div className='gallery-item'>
      <img className='gallery-item-image img-responsive' src={image}  alt={title}/>
      <div className='gallery-item-title'>{title}</div>
      <div className='gallery-item-description'>{description}</div>
      <div id='price'>{price}</div>
    </div>
  )
}

export default galleryItem
