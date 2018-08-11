import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu'
import Gallery from './Gallery'
import MenuEdit from './MenuEdit'
import menuItems from '../../menu-data'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      editMenu: false,
      menuItems: menuItems,
    }
  }
  handleSignInClick = () => {
    this.setState({ signedIn: !this.state.signedIn })
  }
  handleEditMenuClick = () => {
    this.setState({ editMenu: !this.state.editMenu })
  }
  handleMenuItemChange = (index, fieldName, value) => {
    let newMenuItems = this.state.menuItems
    newMenuItems[index][fieldName] = value
    this.setState({
      menuItems: newMenuItems,
    })
  }
  render() {
    return (
      <div className='page'>
        {!this.state.editMenu
          ? <div id='page-content'>
            <Header
              handleEditMenuClick={this.handleEditMenuClick}
              handleSignInClick={this.handleSignInClick}
              signedIn={this.state.signedIn}
            />
            <Gallery />
            <Menu
              menuItems={this.state.menuItems}
            />
          </div>
          : <div className='menu-edit'>
            <MenuEdit
              menuItems={this.state.menuItems}
              handleEditMenuClick={this.handleEditMenuClick}
              handleMenuItemChange={this.handleMenuItemChange}
            />
          </div>
        }

      </div>
    )
  }
}

export default Page;
