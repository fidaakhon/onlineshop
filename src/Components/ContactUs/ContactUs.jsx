import React from "react";
import "./ContactUs.css";
//import bootsrap from 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
    return (
        <div className="contactContainer" id="contactus">   
            <h2 className="contactHeader">CONTACT US</h2>
            <div className="contactContainer2">
                <div className="map_container">
                    <div className="map_responsive">
                        <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="300" frameborder="0" allowfullscreen title="location"></iframe>
                    </div>
                </div>
                <div className="contactForm">
                    <form>
                        <div className="form-group">

                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />

                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phone Number" />

                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Message"></textarea>
                            <button type="submit" className="btn formButton">SEND</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    );
}

export default ContactUs;