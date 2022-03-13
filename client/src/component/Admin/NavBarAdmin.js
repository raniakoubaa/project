import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineLogout } from 'react-icons/hi';
import logo from '../Header/logo2.png'

const NavBarAdmin = () => {
    const handleClose = () => {
        window.localStorage.clear();
        window.LocalStorage.getItem('persist:root').clear()
      };
  return (
    <div>
        <div className='header'>
    <ul>
      <Link to="/"><li><img src={logo} alt="logo" className='logo' /></li></Link>
      <Link to="/addProduct"><li className='menu-item'>ADD PRODUCT</li></Link>
      <Link to="/admin"><li className='menu-item'>PRODUCTS</li></Link>
      <li className='menu-item'>CATEGORIE</li>
      <li>
        {localStorage.getItem("token") ?

          (<Link to="/"><div style={{ display: "flex" }}>
            <p className='Log' onClick={handleClose}>LogOut</p>
          </div></Link>)
          : (<Link to="/login"><div style={{ display: "flex" }}><HiOutlineLogout size={25} style={{ fill: 'black' }} /><p className='Log'>LogIn</p></div></Link>)}

      </li>
    </ul>

  </div>
    </div>
  )
}

export default NavBarAdmin