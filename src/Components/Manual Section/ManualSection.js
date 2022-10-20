import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import dataList from './ManualData'
import Manual from './Manual'

const ManualSection = () => {


  return (
    <>
      <div className='manual_Section text-center'>
        <Row  className='d-flex flex-column align-items-center justify-content-center'> 
          <Col xl="12" lg="12" md="10" sm="11" xs="11">
            <h1 className='text-white text-center pt-5'>How it Works</h1>
            <p className='para'>Welcome to the new face of Commercial Real  Estate Leasing!</p>
          </Col>
        </Row>
        <Container className='pt-3'>
          <Row className='d-flex align-items-center justify-content-center pb-5'>
            {
              dataList.map((data, ind) => {
                return <Manual key={ind}
                  imgsrc={data.imgsrc}
                  count={data.count}
                  title={data.title}
                  para={data.para}
                />
              })
            }
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ManualSection;