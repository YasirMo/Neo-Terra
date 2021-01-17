import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
function Navbar(pros) {


    const [dropdownOpen, setOpen] = useState(false);
  
    const toggle = () => setOpen(!dropdownOpen);
  return (
    
    <>
      <nav className='navbar'>

    <div className='navbar-container'> 
    <Link to ='/'> 
         <img className="navbar-Logo" src='/images/Logo.png' alt='logo' />
         </Link>
         </div>
            
         <ul className={ 'nav-menubar'}>
        <li className='nav-item'>
                  <Link to='/' className='nav-links' >
                 Home
                  </Link>
                  </li>
                  <li className='nav-item'>
              
              <Link to='/News' className='nav-links' >
              News
              </Link>
 
            </li>

            <li className='nav-item'>
              
              <Link to='/CarbonFootprint' className='nav-links' >
              Carbon Footprint
              </Link>
 
            </li>
                    
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>
              Blog
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header> Learn</DropdownItem>
              
                <DropdownItem><Link to='/Learn'  >
             Learn
              </Link></DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            </ul>

            <Link to='/Quiz' className='Button-link' >
            Quiz
            </Link>
      </nav>
    </>
  );
}

export default Navbar
