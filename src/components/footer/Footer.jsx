import React from 'react';
import {Button} from "../../helpers/button/Button.jsx";
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join our newsletter to be the first to receive our new listings
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email address here..."
                            className="footer-input"
                        />
                        <Button buttonStyle='btn--outline'>SUBSCRIBE</Button>
                    </form>
                </div>
            </section>

        </div>
    );
}

export default Footer;