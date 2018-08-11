import React from 'react'
import PropTypes from 'prop-types'

const GalleryItem = (props) => {
  let { title, description, image, price } = props.item

  return (
    <div className='gallery-item'>
      <img className='gallery-item-image img-responsive' src={image}  alt={title}/>
      <div className='gallery-item-title'>{title}</div>
      <div className='gallery-item-description'>{description}</div>
      <div id='gallery-item-price'>{price}</div>
    </div>
  )
}

GalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default GalleryItem
