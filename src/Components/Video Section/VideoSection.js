import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import VideoPlayer from './VideoPlayer';
import thumbnail from './thumbnail.jpg';
import bulletIcon from "./advantage.svg";

const VideoSection = () => {
  return (
    <>
      <div className='video_Section'>
        <Container className=''>
          <div className='heading d-flex justify-content-center align-items-center flex-column mb-5 pt-5 text-white'>
            <h2>The REDHANDED Advantage</h2>
            <h5 className='m-0 text-center'>Welcome to the new face of Commercial Real Estate Leasing!</h5>
          </div>
          <Row className='d-flex justify-content-center align-items-start pt-3'>
            <Col className='py-0 px-0' xl="6" lg="6" md="6" sm="10" xs="10" >
              <div className='advCol d-flex flex-column justify-content-start align-items-start mt-4'>
                <div className='d-flex adv-Wrapper align-items-center'>
                  <img className='icon_advantage mb-3 mr-3' src={bulletIcon} alt="icon" />
                  <p className="advP">REDHANDED is an online platform where real estate owners and entreprenuers can connect and negotiate daily!</p>
                </div>
                <div className='d-flex adv-Wrapper align-items-center'>
                  <img className='icon_advantage mb-3 mr-3' src={bulletIcon} alt="icon" />
                  <p className="advP">REDHANDED eliminates the need for a broker with their commission fees.</p>
                </div>
                <div className='d-flex adv-Wrapper align-items-center'>
                  <img className='icon_advantage mb-3 mr-3' src={bulletIcon} alt="icon" />
                  <p className="advP">Lease or locate highly desired commercial spaces through our AI-driven technology platform.</p>
                </div>
                <div className='d-flex adv-Wrapper align-items-center'>
                  <img className='icon_advantage mb-3 mr-3' src={bulletIcon} alt="icon" />
                  <p className="advP">"REDHANDED provides you with the tools to market your space."</p>
                </div>
              </div>
            </Col>

            <Col xl="6" lg="6" md="6" sm="12" className='d-flex justify-content-end align-items-start videoWrapper pr-0 pl-5 ml-auto'>
              <VideoPlayer thumbnail={thumbnail} />
            </Col>

            <Col xs="10">
            <p className='text-center advP_2 pb-4 text-white'>Check out this short video and learn how to save thousands on your next Commercial Real Estate Leasing.</p>
            </Col>
          </Row> 
        </Container>
      </div>

    </>
  )
}

export default VideoSection;