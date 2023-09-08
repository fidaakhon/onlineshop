import './App.css';
//import bootsrap from 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header/Header';
import Slider from './Components/slider/Slider';
import Card from './Components/Cards/Card';
import Flex from './Components/Flex/Flex';
import Flex2 from './Components/Flex2/Flex2';
import WhyUs from './Components/WhyUs/WhyUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Testimonial from './Components/Testimonial/Testimonial';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart'
import { useEffect, useState } from 'react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


function App() {
  const [isResponsive, setIsResponsive] = useState(false);
  const [isLarge, setIsLarge] = useState(window.innerWidth > 768);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleRes = () => {
    setIsResponsive(!isResponsive);
  }
  useEffect(() => {
    if (isLarge) {
      setIsResponsive(true);
      // console.log('small');
    }
  }, [isLarge])
  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsLarge(window.innerWidth > 768);
      setIsResponsive(!isResponsive)
    })
    return () => {
      window.removeEventListener('resize', () => {
        setIsLarge(window.innerWidth > 768);
        setIsResponsive(!isResponsive)
      })
    }
  }, [isResponsive])

  const addsToCart = (data) => {
    if (cartItems.length === 0) {
      setCartItems([data]);
    } else {
      setCartItems((oldData) => [...oldData, data]);
    }
    // console.log(cartItems);
  }


  const handleShowCart = () => {
    setShowCart(!showCart);
  }




  return (
    <>
      {showCart ? <Cart cartItems={cartItems} cartShow={handleShowCart} /> :
        <div>
          {isLarge && <div className="App">
            <div>
              <h1 className='heading'>GIFTOS</h1>
            </div>
            <div className='header_slider'>
              <Header responsiveHeader={isResponsive} />
              <Slider />
            </div><br />
            <div className='products'>
              <Card addingCard={addsToCart} cartShow={handleShowCart} />
            </div>
            <div className='Flex'>
              <Flex />
            </div>
            <div>
              <WhyUs />
            </div>
            <div>
              <Flex2 />
            </div>
            <div>
              <ContactUs />
            </div>
            <div>
              <Testimonial />
            </div>
            <div>
              <Footer />
            </div>
          </div>}
          {!isLarge && <div className="App">
            <div className='header_head'>
              <h1 className='heading'>GIFTOS</h1>
              <h4 onClick={handleRes}><FormatListBulletedIcon style={{ fontSize: '60px' }} /></h4>
            </div>
            <div className='header_slider'>
              <Header responsiveHeader={isResponsive} />
              <Slider />
            </div><br />
            <div className='products'>
              <Card addingCard={addsToCart} cartShow={handleShowCart} />
            </div>
            <div className='Flex'>
              <Flex />
            </div>
            <div>
              <WhyUs />
            </div>
            <div>
              <Flex2 />
            </div>
            <div>
              <ContactUs />
            </div>
            <div>
              <Testimonial />
            </div>
            <div>
              <Footer />
            </div>
          </div>
          }
        </div>
      }
    </>
  );
}


export default App;
