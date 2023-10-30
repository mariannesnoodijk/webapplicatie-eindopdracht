import React, { useState } from 'react';
import './Dropdownmenu.css';
import { Link } from "react-router-dom";

function Dropdownmenu() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                        <li>
                            <Link
                                to='/'
                                onClick={() => setClick(false)}
                            >
                                Login
                            </Link>
                        </li>
                <li>
                    <Link
                        to='/'
                        onClick={() => setClick(false)}
                    >
                        Register
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default Dropdownmenu;
