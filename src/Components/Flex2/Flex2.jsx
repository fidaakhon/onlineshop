import React from "react";
import "./Flex2.css";
import SavingImg from "../images/gifts.png";

const Flex = () => {
    return (
        <>
            <div className="flex2_container">
                <div className="flex2_img">
                    <img src={SavingImg} alt="saving-img" />
                </div>
                <div className="flex2_text">
                    <h1>GIFTS FOR YOUR LOVED ONES</h1>
                    <p>Qui ex dolore at repellat, quia neque doloribus omnis adipisci, ipsum eos odio fugit ut eveniet blanditiis praesentium totam non nostrum dignissimos nihil eius facere et eaque. Qui, animi obcaecati.</p>
                    <div className="flex2_btns">
                        <button className="flex2_btn1">Buy now</button>
                        <button className="flex2_btn2">See more</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Flex;