import React from "react";
import "./Testimonial.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

// import "font-awesome/css/font-awesome.min.css";

const Testimonial = () => {
    return (
        <>
        <div className="testimonial_heading"id="testimonials" ><h3>TESTIMONIAL</h3></div>

        
        <div className="testimonial" >
            
            <Carousel fade className="car">
                <Carousel.Item>
                    <div className="testimonial__container">
                        <div className="testimonial__container__text">
                            <div className="testimonial__container__text__heading">
                                <h4 className="testimonial_name">Rochak</h4>
                                <h6 className="testimonial_subtitle">Default model text</h6>
                            </div>
                            <div className="testimonial__container__text__icon">
                                <i className="fa fa-quote-left" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="testimonial__container__text_para">
                            <p>Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="testimonial__container">
                        <div className="testimonial__container__text">
                            <div className="testimonial__container__text__heading">
                                <h4 className="testimonial_name">Morijorch</h4>
                                <h6 className="testimonial_subtitle">Default model text</h6>
                            </div>
                            <div className="testimonial__container__text__icon">
                                <i className="fa fa-quote-left" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="testimonial__container__text_para">
                            <p>Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className="testimonial__container">
                        <div className="testimonial__container__text">
                            <div className="testimonial__container__text__heading">
                                <h4 className="testimonial_name">Brad Johns</h4>
                                <h6 className="testimonial_subtitle">Default model text</h6>
                            </div>
                            <div className="testimonial__container__text__icon">
                                <i className="fa fa-quote-left" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="testimonial__container__text_para">
                            <p>Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                        </div>
                    </div>

                </Carousel.Item>
            </Carousel>

        </div >
        </>
    );
};

export default Testimonial;
