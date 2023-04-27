import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
// import { RiMenu3Line , RiCloseLin } from 'react-icons/ri'
import { RiMenu3Line } from "@react-icons/all-files/ri/RiMenu3Line";
import { RiCloseLine } from "@react-icons/all-files/ri/RiCloseLine";



const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt4">What is GPT4?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    
    <div className='gpt4__navbar'>
      <div className='gpt4__navbar-links'>
        <div className='gpt4__navbar-links_logo'>
          <img src={logo} alt="" />
        </div>
        <div className='gpt4__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className="gpt4__navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>

      <div className="gpt4__navbar-menu">
        {
          toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => { setToggleMenu(false) }} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => { setToggleMenu(true) }} />

        }
        {
          toggleMenu && (
            <div className='gpt4__navbar-menu_container scale-up-center'>
              <div className='gpt4__navbar-menu_container-links'>
                <Menu />
                <div className="gpt4__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button type='button' onClick={()=>{alert("signup")}}>Sign up</button>
                </div>

              </div>
            </div>
          )
        }

      </div>
    </div>
  )
}

export default Navbar
