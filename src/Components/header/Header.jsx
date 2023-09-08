import React, { useState } from "react";
import "./header.css";
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


const Header = ({ responsiveHeader }) => {
    const [activeItem, setActiveItem] = useState('home'); // Initialize the active item

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };
    return (
        <>
            {responsiveHeader &&
                <div className="header">
                    <ul>
                        <li id="home" className={activeItem === 'home' ? 'active' : ''}
                            onClick={() => handleItemClick('home')}>Home</li>
                        <li id="shop" className={activeItem === 'shop' ? 'active' : ''}
                            onClick={() => handleItemClick('shop')}><a href="#card">Shop</a></li>
                        <li id="why us" className={activeItem === 'Whyus' ? 'active' : ''}
                            onClick={() => handleItemClick('Whyus')}><a href="#why">Why us</a></li>
                        <li id="testimonial" className={activeItem === 'testimonial' ? 'active' : ''}
                            onClick={() => handleItemClick('testimonial')}><a href="#testimonials">Testimonial</a></li>
                        <li id="contact" className={activeItem === 'contact' ? 'active' : ''}
                            onClick={() => handleItemClick('contact')}><a href="#contactus">Contact US</a></li>
                        <div className="header_login">
                            <li id="login"><PersonIcon />login</li>
                            <li id="login"><ShoppingBagIcon /></li>
                            <li id="login"><SearchIcon /></li>
                        </div>
                    </ul>
                </div>
            }
        </>

    );
}

export default Header;