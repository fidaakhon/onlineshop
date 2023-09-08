import React from "react";
import "./Card.css";
import Data from "./Data";
import { useState } from "react";

const Card = ({ addingCard, cartShow }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (id, imgsrc, title, price) => {
        // Check if the cart is empty before adding an item
        if (cartItems.length === 0) {
            setCartItems([{ id, imgsrc, title, price }]);
            console.log(cartItems);
        } else {
            // Add the selected item to the cartItems state
            setCartItems([...cartItems, { id, imgsrc, title, price }]);
            console.log(cartItems);
        }

        addingCard({ id, imgsrc, title, price });

    }

    const showCart = () => {
        cartShow();
    }
    


    return (
        <div className="cards" id="card">
            <div className="card_header"><h2>LATEST PRODUCTS</h2></div>
            <div className="card_body">
                {Data.map((val) => {
                    return (
                        <span key={val.id}>
                            <div className="card1" >
                                <div> <button className="add_to_cart" onClick={() => addToCart(val.id, val.imgsrc, val.title, val.price)}>Add to Cart</button></div>
                                <img src={val.imgsrc} alt="pic" className="card_img" />
                                <div className="description">
                                    <h6 className="card-title">{val.title}</h6>
                                    <h6>Price:<span className="price">{val.price}</span></h6>
                                </div>
                            </div>
                        </span>
                    );
                })}
            </div >
            <div className="view_btn_div">
                <button className="view_btn">View All Products</button>
                <button className='showCartbtn' onClick={showCart}>Go to Cart</button>
            </div>
        </div>
    );
}

export default Card;
