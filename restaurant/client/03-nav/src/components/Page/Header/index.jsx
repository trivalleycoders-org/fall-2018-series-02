import React from 'react'
import iVegies from '../../../images/vegies-left.jpg'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <img className='img-responsive' src={iVegies} alt='fresh vegies'/>
      </div>
      <div className='header-right'>
        <div className='header-titles'>
          <h1>Wholesome Foods</h1>
          <h2>Delicious meals made with locally sourced organic ingredients.</h2>
        </div>
        <Nav />
      </div>
    </div>
  )

}

export default Header
