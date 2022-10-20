import React from 'react'
import MySpace_Card from './MySpace_Card';
import HotSpaces from './HotSpaces';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselSection = () => {

  const settings = {
    centerMode: false,
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 500,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          arrows: true,
          centerPadding: '60px',
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          touchMode: true,
          slidesToScroll: 1,
          // initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          touchMode: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Container fluid className='px-0'>
        <div className='pt-5 text-center'>
            <h1>Browse Spaces</h1>
            <p className='car_p'>Check out the hottest spaces on REDHANDED</p>
        </div>
        <Row className='carousel_Section d-flex justify-content-center px-0 mx-auto pb-5'>
          <Col className='mt-4' xl="12" lg="12" md="12" sm="10" xs="10">

            <Slider {...settings}>
              {
                HotSpaces.map((item, ind) => {
                  return <MySpace_Card key={ind}
                    address={item.address}
                    img={item.img}
                    city={item.city}
                    price={item.price}
                    area={item.area}
                  />
                })
              }

            </Slider>
          </Col>

        </Row>
      </Container>

    </>
  )
}

export default CarouselSection;