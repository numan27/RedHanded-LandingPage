import React from 'react'
import MyCard from './MyCard';
import ClientsData from './ClientsData';
import { Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TestimonialsSection = () => {

  const settings = {
    centerMode: true,
    centerPadding: '70px',
    infinite: true,
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 500,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          centerMode: true,
          arrows: true,
          centerPadding: '60px',
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          arrows: true,
          centerPadding: '60px',
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          arrows: true,
          centerPadding: '70px',
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          centerMode: true,
          toucnMode: true,
          arrows: true,
          centerPadding: '70px',
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          toucnMode: true,
          arrows: false,
          centerPadding: '70px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='testimonial_section py-5'>
      <div className='d-flex justify-content-center text-center flex-column'>
        <h2>Testimonials</h2>
        <p className='mainP'>See for yourself how others are enjoying the REDHANDED difference!</p>
      </div>
      <Row className='pt-4'>

        <Col xl="12" lg="12" md="12" sm="12" xs="12" className='py-4 px-4'>
          <Slider {...settings}>
            {
              ClientsData.map((item, ind) => {
                return <MyCard key={ind}
                  text={item.text}
                  img={item.img}
                  title={item.title}
                  designation={item.designation}
                />
              })
            }

          </Slider>

        </Col>
      </Row>
    </div>
  )
}

export default TestimonialsSection;