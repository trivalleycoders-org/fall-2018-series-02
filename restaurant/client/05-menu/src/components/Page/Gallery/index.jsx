import React from 'react'
import GalleryItem from './GalleryItem'
import galleryItems from '../../../menu-data'

const Gallery = () => {
  const renderItems = galleryItems.map((g, index) => (
    <GalleryItem
      key={index}
      item={g}
    />
  ))
  return (
    <div className='gallery'>
      <h2>Our Fresh Meals</h2>
      <div className='gallery-items'>
        {renderItems}
      </div>
    </div>
  )
}
export default Gallery
