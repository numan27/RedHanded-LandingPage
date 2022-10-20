import React from 'react'
import { Container, Row, Col, Navbar, Nav, } from 'react-bootstrap';
// import { BsFacebook } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <>
      <Container fluid className='footer'>
        <Container className=''>
          <Row className='d-flex justify-content-between align-items-center pb-3 pt-1'>
            <Col className='px-0 d-flex footerBrand pt-3' xl="2" lg="2" md="12" sm="12" xs="12">
              <div className='text-uppercase d-flex justify-content-around flex-column'>
                <h3 className='m-0 p-0'>Redhanded</h3>
                <span className='text-white m-0 p-0'>© 2021 redhanded</span>
              </div>
            </Col>

            <Col className='d-flex  align-items-center justify-content-center px-0' xl="9" lg="9" md="12" sm="12" xs="12" >
              <div className='pt-4 linksWrapper' bg="black">
                <ul className=" list-unstyled footerLinks d-flex justify-content-between align-items-center">
                  <li className='text-white linkItem mx-1 text-nowrap' href="">About Us</li>
                  <li className='text-white linkItem mx-1' href="#features">Blog</li>
                  <li className='text-white linkItem mx-1' href="#pricing">Partners</li>
                  <li className='text-white linkItem mx-1' href="#pricing">Pricing</li>
                  <li className='text-white linkItem mx-1 text-nowrap' href="#pricing">Contact Us</li>
                  <li className='text-white linkItem mx-1 text-nowrap' href="#pricing">Terms & Conditions</li>
                  <li className='text-white linkItem mx-1 text-nowrap' href="#pricing">Privacy Policy</li>
                </ul>
              </div>
            </Col>

            <Col className='pl-3 pr-0 socialWrapper' xl="1" lg="1" md="12" sm="12" xs="12">
              <div className='socialIcons pt-3 d-flex align-items-center justify-content-between'>
                <i class="bi bi-facebook rounded-circle"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-pinterest"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Footer;