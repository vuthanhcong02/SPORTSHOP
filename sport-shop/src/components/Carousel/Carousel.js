import React from 'react';
import Slider from 'react-slick';
import './Carousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Carousel() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:3000,
    };
  
    const slides = [
      {
        id: 1,
        image: 'https://giaydabongtot.com/wp-content/uploads/2020/09/Shop-giay-the-thao-nam-nu-tphcm-dep-va-chat-luong-nhat-1.jpg',
        caption: 'First slide',
      },
      {
        id: 2,
        image: 'https://noithatnamviet.com/wp-content/uploads/2019/10/MG_6182-780x520-1.jpg',
        caption: 'Second slide',
      },
      {
        id: 3,
        image: 'https://noithatnamviet.com/wp-content/uploads/2019/10/MG_6212-780x520-1.jpg',
        caption: 'Third slide',
      },
    ];
  
    return (
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="carousel d-flex justify-content-center align-items-center">
            <img className="" src={slide.image} alt={slide.caption} />
          </div>
        ))}
      </Slider>
    );
  }
export default Carousel  