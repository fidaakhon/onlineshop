import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="social_icons">
                <a href="https://www.facebook.com/" target="_blank"><FacebookIcon /></a>
                <a href="https://www.instagram.com/" target="_blank"><InstagramIcon /></a>
                <a href="https://www.twitter.com/" target="_blank"><TwitterIcon /></a>
                <a href="https://www.linkedin.com/" target="_blank"><LinkedInIcon /></a>
            </div>
            <div className="footer_container">
                <div className="footer_about">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </div>
                <div className="footer_help">
                    <h3>Need Help</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum </p>
                </div>
                <div className="footer_contact">
                    <h3>Contact Us</h3>
                    <p>Phone: +91 1234567890</p>
                    <p>locatio : Kushum Chitral</p>
                    <p>email : fidaurr900@gmail.com </p>
                </div>

            </div><hr />
            <p>© 2021 - All Rights Reserved</p>
        </div>
    );
};

export default Footer;