import React, {useState} from "react";
import "./Cart.css";

const Cart = ({ cartItems, cartShow }) => {
    const [cart, setCart] = useState(cartItems);

    const handleRemove = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    }

    const goBack = () => {
        // window.history.back();
        cartShow();
    }




    return (
        <div className="carts" id="cart">
            <div className="cart_header"><h2>Shopping Cart</h2></div>
            <div className="cart_body">
                {cart.map((vl) => {
                    return (
                        <span key={vl.id}>
                            <div className="cart1" >
                                <div>
                                    <button className="add_to_cart_btn" onClick={() => handleRemove(vl.id)} >X</button>
                                </div>
                                <img src={vl.imgsrc} alt="pic" className="cart_img" />
                                <div className="descriptioncart">
                                    <h6 className="cart-title">{vl.title}</h6>
                                    <h6>Price:<span className="price">{vl.price}</span></h6>
                                </div>
                            </div>
                        </span>
                    );
                })}

            </div >
            <div className="buy_btn_div">
                <button className="buy_btn">Buy</button>
                <button className="buy_btn" onClick={goBack} >Go back</button>
            </div>
        </div>
    );
}

export default Cart;