import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {



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
              <Link  to='/Learn' className='nav-links'>
               Learn
              </Link>
            </li>

            <li className='nav-item'>
              
              <Link to='/CarbonFootprint' className='nav-links' >
              Carbon Footprint
              </Link>
 
            </li>
             <li className='nav-item'>
              
              <Link to='/News' className='nav-links' >
              News
              </Link>
 
            </li>
            </ul>

            <Link to='/Quiz' className='Button-link' >
            Quiz
            </Link>
      </nav>
    </>
  );
}

export default Navbar
