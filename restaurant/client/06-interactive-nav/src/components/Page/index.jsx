import React, { Component } from 'react'
import Header from './Header'
import Gallery from './Gallery'
import Menu from './Menu'
import menuItems from '../../menu-data'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
    }
  }
  handleSignInClick = () => {
    this.setState({ signedIn: !this.state.signedIn })
  }
  render() {
    return (
      <div>
        <Header
          handleSignInClick={this.handleSignInClick}
          signedIn={this.state.signedIn}
        />
        <Gallery />
        <Menu
          menuItems={menuItems}
        />
      </div>
    )
  }

}

export default Page;
