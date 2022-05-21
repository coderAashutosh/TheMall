import React from 'react'
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaWhatsapp
} from 'react-icons/fa'

const Footer = () => {
    return (
        <section id="footer">
            <div className="container footer">
                <div className="footer-box">
                    <h4>Useful Links</h4>
                    <div className="footer-links">
                        <a href="#">&bull; Products on Sale</a>
                        <a href="#">&bull; Featured Products</a>
                        <a href="#">&bull; Wishlist</a>
                    </div>
                </div>
                {/* <div className="footer-box">
                    <h4>Support</h4>
                    <div className="footer-links">
                        <a href="#">&bull; Support</a>
                        <a href="#">&bull; About</a>
                        <a href="#">&bull; Learn</a>
                        <a href="#">&bull; Hosting</a>
                        <a href="#">&bull; Messenger</a>
                    </div>
                </div> */}
                <div className="footer-box">
                    <h4>Contact Us</h4>
                    <div className="footer-contact u-text-small">
                        <a href='https://goo.gl/maps/xJkgm1nZqyLMCMxx7' target='_blank'>
                            <FaMapMarkerAlt /> &nbsp; Address:  Shop No.4 City Plaza Market, Mall Rd, near Camp Chowk, Hisar
                        </a>
                        <a>
                            <FaPhoneAlt /> &nbsp; Phone: +917015772028 OR +919812055877.
                        </a>
                        <a href='mailto: TheMallMidtown@gmail.com' target='_blank'>
                            <FaEnvelope /> &nbsp; Email: TheMallMidtown@gmail.com
                        </a>
                    </div>
                </div>
                <div className="footer-box">
                    <img src='https://images-platform.99static.com/JlRok7x9eORhrnYpdZ0TYXPkJkY=/380x9:1115x744/500x500/top/smart/99designs-contests-attachments/94/94486/attachment_94486850' className='image' alt="logo" />
                    <p className="u-text-small">&copy; THE MALL 2022. All Rights Reserved</p>
                </div>
            </div>
        </section>
    );
};



export default Footer