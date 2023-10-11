import React, {useState, useEffect} from "react";
import './Navbar.css';
import {Link, NavLink} from "react-router-dom";
import logo from '../../assets/logo/logo.png'
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Button} from "../../helpers/button/Button.jsx";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(false);
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    // useEffect below prevents the SIGN UP button to appear upon refreshing the page when the icons are shown
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    {/* Adding the onClick function below closes the mobile drop down menu when clicking on the Logo to redirect to the homepage */}
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        {/*<img src={logo} alt=""/>*/}
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {/* Below will change the navbar to bars when making screen smaller */}
                        {/* useState is used */}
                        {click ? <CloseIcon style={{color: "white"}}/> : <ReorderIcon style={{color: "white"}}/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/listings' className='nav-links' onClick={closeMobileMenu}>
                                Listings
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Login
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>LOGIN<AccountCircleOutlinedIcon/></Button>}
                    {button && <Button buttonStyle='btn--outline'>FAVORITES<FavoriteBorderOutlinedIcon/></Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;