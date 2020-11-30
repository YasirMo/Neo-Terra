import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {



  return (
    <>
      <nav className='navbar'>

    <div className='navbar-container'> 
         <Link to='/' className='navbar-logo'> 
         Neo Terra
         </Link>
         </div>
            
         <ul className={ 'nav-menubar'}>
       
            <li className='nav-item'>

              <Link to='/Learn' className='nav-links' >
              Learn
              </Link>
            </li>

            <li className='nav-item'>

              <Link to='/TakeAction' className='nav-links'>
               Take action
              </Link>

            </li>
            
            <li className='nav-item'>
              <Link  to='/News' className='nav-links'>
               News
              </Link>
            </li>

            <li className='nav-item'>
              
              <Link to='/Aboutus' className='nav-links' >
              About us
              </Link>
 
            </li>
            </ul>
            <div className='Buttons'>
              
              <Link to='/Quiz' className='Button-link'>
             Quiz
          
              </Link>
 
            </div>
           
           
          
       
      </nav>
    </>
  );
}

export default Navbar
