import React, { useState } from 'react';
import "../././Styles/Navbar.css"
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import { withTheme } from '@material-ui/core';

function Navbar(pros) {
    

  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

return (
  <div className='navbar-container'> 
    <div className="navbar-Logo">
      <a href ='/'> 
        <img className="navbar-Logo" src='/images/Logo.png' alt='logo' />
      </a>
    </div>

    {/* <div className="MidSection"></div> */}
    
    <ul className={click ? "nav-menubar active" : "nav-menubar"}>
      <li className='nav-item'>
        <a href='/Quiz' className='nav-links' onClick={handleClick}>
          Quiz
        </a>
      
      </li>
      <li className='nav-item' >
        <a href='/News' className='nav-links' onClick={handleClick}>
          News
        </a>
      
      </li>
      <li className='nav-item'>
        <a href='/CarbonFootprint' className='nav-links' onClick={handleClick} >
          CF Calculator
        </a>
        
      </li>

      {/* Dropdown Button */}
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        {/* Main button */}
        <DropdownToggle caret  className='BlogDropDown' style={{backgroundColor: '#009e5d', fontWeight: 500, border: 'none'}}>
          Learn More Here!
        </DropdownToggle>

        {/* Dropdown Menu (Article Links) */}
        <DropdownMenu style={{backgroundColor: '#C8D3D5',}}>

          <DropdownItem header style={{backgroundColor: 'white',}}>
            Learn about Climate Change Below!
          </DropdownItem>

          {/* Main Links */}
          <DropdownItem  className='itemLink'>
            <a href='/Learn'>Effects in <b>Nature</b></a>
          </DropdownItem>
            
          <DropdownItem className='itemLink'>
            <a href ='/LearnPageTwo'>Effects in <b>Society</b></a>
          </DropdownItem>
                
          <DropdownItem className='itemLink'>
            <a href ='/LearnPageThree'>Ways to <b>Reduce</b> Climate Change</a>
          </DropdownItem>

        </DropdownMenu>
      </ButtonDropdown>
    </ul>
  
    <div className="menu-closeicon" onClick={handleClick}>
      <i className={click ? "fas fa-times":"fas fa-bars"}></i>
    </div>
  </div>
);
}

export default Navbar


