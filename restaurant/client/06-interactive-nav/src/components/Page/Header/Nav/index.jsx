import React from 'react'

const Nav = (props) => {
  return (
    <ul className='nav-ul'>
      <li><button className='button' href='#menu'>Menu</button></li>
      <li><button className='button' href='#gallery'>Gallery</button></li>
      <li><button className='button' href='#location'>Location</button></li>
      <li><button className='button' href='#our-story'>Our Story</button></li>
      {
        props.signedIn
          ? <div className='sign-in'>
            <li><button className='button' onClick={props.handleEditMenuClick}>Edit Menu</button></li>
            <li><button className='button' onClick={props.handleSignInClick}>Sign-out</button></li>
          </div>
          : <div className='sign-in'>
            <li><button className='button' onClick={props.handleSignInClick}>Sign-in</button></li>
          </div>
      }
    </ul>
  )
}

export default Nav
