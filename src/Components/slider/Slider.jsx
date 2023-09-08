import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import './Slider.css';
//impot the images from image folder
import Slid1 from '../images/Slider_img1.png';


function UncontrolledExample() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
      <div className='slider'>
        <div className='slider_text'>
            <h1>Welcome to our Gift Shop</h1>
            <p>Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.</p>
            <button className='slider_btn'>Contact Us</button>
        </div>
        <div className='slider_image'>
            <img src={Slid1} alt='slider_img1' />
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='slider'>
        <div className='slider_text'>
            <h1>Welcome to our Gift Shop</h1>
            <p>Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.</p>
            <button className='slider_btn' ><a href='#contactus'>Contact Us</a></button>
        </div>
        <div className='slider_image'>
            <img src={Slid1} alt='slider_img1' />
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='slider'>
        <div className='slider_text'>
            <h1>Welcome to our Gift Shop</h1>
            <p>Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.</p>
            <button className='slider_btn'>Contact Us</button>
        </div>
        <div className='slider_image'>
            <img src={Slid1} alt='slider_img1' />
        </div>
      </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;