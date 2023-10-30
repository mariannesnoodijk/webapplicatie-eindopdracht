import React, {useState, useEffect} from "react";
import './Navbar.css';
import {Link} from "react-router-dom";
import logo from '../../assets/logo/logo.png'
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
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
                            <Link to='/properties' className='nav-links' onClick={closeMobileMenu}>
                                Properties
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
                        {/* TODO: FIND OUT BELOW. WHEN ACTIVE, DOESNT FIT/APPEAR ON PAGE. ONLY APPEARS IN SMALL SCREEN*/}
                        {/*<li className="nav-item">*/}
                        {/*    <Link to='/registerAccount' className='nav-links-mobile' onClick={closeMobileMenu}>*/}
                        {/*        Register*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                    </ul>
                    <Link to='/login'>{button && <Button buttonStyle='btn--outline'>LOGIN</Button>}</Link>
                    <Link to='/register'>{button && <Button buttonStyle='btn--outline'>REGISTER</Button>}</Link>

                    {/*{button && <Button buttonStyle='btn--outline'>FAVORITES</Button>}*/}
                </div>
            </nav>
        </>
    );
}

export default Navbar;