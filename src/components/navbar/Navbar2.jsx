import {useState} from "react";
import {Link} from "react-router-dom";
import './Navbar2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdownmenu from "../../helpers/dropdown/Dropdownmenu.jsx";


function Navbar2() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    INSERT LOGO
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {/*<FontAwesomeIcon icon="fa-solid fa-bars" />*/}
                    {/*{click ? <FontAwesomeIcon icon="fa-solid fa-bars" style={{color: "black"}}/> : <FontAwesomeIcon icon="fa-solid fa-x" style={{color: "black"}}/>}*/}
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to='/services'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Services <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdownmenu />}
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/products'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/contact-us'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/sign-up'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Link to='sign-up'>
                    <button className='btn'>Sign Up</button>
                </Link>
            </nav>
        </>
    );
}

export default Navbar2;