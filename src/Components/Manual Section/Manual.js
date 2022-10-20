import React from 'react'
import { Col } from 'react-bootstrap';



const Manual = (props) => {
    return (
        <>  
            <Col xl="5" lg="6" md="5" sm="6" xs="11" className='d-flex justify-content-center align-items-start'>
                <div className="d-flex align-items-start">
                    <img className='manualIcon' src={props.imgsrc} alt="icon" />
                </div>
                <div className='d-flex flex-column align-items-start pl-3'>
                    <h1 className='count'>{props.count}</h1>
                    <h3 className='text-white manual_title'>{props.title}</h3>
                    <p className='text-white manual_para text-left'>{props.para}</p>
                </div>
            </Col>
        </>
    )
}

export default Manual;