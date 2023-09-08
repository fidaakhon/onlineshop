import React from "react";
import "./Flex.css";
import SavingImg from "../images/saving-img.png";

const Flex = () => {
    return (
        <>
            <div className="flex_container">
                <div className="flex_img">
                    <img src={SavingImg} alt="saving-img" />
                </div>
                <div className="flex_text">
                    <h1>BEST SAVINGS ON NEW ARRIVALS</h1>
                    <p>Qui ex dolore at repellat, quia neque doloribus omnis adipisci, ipsum eos odio fugit ut eveniet blanditiis praesentium totam non nostrum dignissimos nihil eius facere et eaque. Qui, animi obcaecati.</p>
                    <div className="flex_btns">
                    <button className="flex_btn1">Buy now</button>
                    <button className="flex_btn2">See more</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Flex;