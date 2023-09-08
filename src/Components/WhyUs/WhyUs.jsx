import React from "react";
import "./WhyUs.css";
import Truck from "../images/truck.svg"
import FreeShoping from "../images/free.svg"
import Quality from "../images/high-quality.svg";


const WhyUs = () => {
    return (
        <div className="whyus" id="why">
            <div className="whyus_header"><h2>WHY SHOP WITH US</h2></div>
            <div className="whyus_container">
                <div className="whyus_body">
                    <div className="whyus_card">
                        <div className="whyus_card_img">
                            <img src={Truck} alt="Fast Delivery" className="whyus_img" />
                        </div>
                        <h6>Fast Delivery</h6>
                        <p>variations of passages of Lorem Ipsum available</p>
                    </div>
                </div>
                <div className="whyus_body">
                    <div className="whyus_card">
                        <div className="whyus_card_img">
                            <img src={FreeShoping} alt="Fast Delivery" className="whyus_img" />
                        </div>
                        <h6>Free Shipingy</h6>
                        <p>variations of passages of Lorem Ipsum available</p>
                    </div>
                </div>
                <div className="whyus_body">
                    <div className="whyus_card">
                        <div className="whyus_card_img">
                            <img src={Quality} alt="Fast Delivery" className="whyus_img" />
                        </div>
                        <h6>Best Quality</h6>
                        <p>variations of passages of Lorem Ipsum available</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default WhyUs;