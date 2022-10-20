import React from 'react'
import { Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import MyButton from './MyButton';

const MainSection = (title) => {
    return (
        <>
            <div className='main_Section text-white d-flex justify-content-center align-items-center mt-5 py-5'>
                <Row className='d-flex justify-content-center py-5'>
                    <Col xl="6" lg="8" md="9" sm="9" xs="11" className='d-flex sectionContent justify-content-around flex-column text-center'>
                        <h1 className='mb-5'>LEASE YOUR COMMERCIAL SPACE
                            WITHOUT A BROKER</h1>
                        <div className="searchBar d-flex align-items-center justify-content-center w-100 px-2 mb-5">
                            <Form className='d-flex w-100 px-4' >
                                <FormControl type="text" placeholder="Enter City or State" className="mr-3 searchInput" />
                                <MyButton title="Search" />
                            </Form>
                        </div>
                        <p className='text-center'>Welcome to the new face of Commercial Real Estate Leasing! REDHANDED is an online platform
                            where real estate owners and potential tenants can transact independently of a broker.
                            Don't get caught REDHANDED paying broker fees!
                        </p>
                        <div className='pt-4'>
                            <Button className='mr-2 dangerBtn py-3 px-4'>Im a landlord</Button>
                            <Button className='ml-2 primaryBtn py-3 px-4' variant='primary'>Im a tenant</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default MainSection;