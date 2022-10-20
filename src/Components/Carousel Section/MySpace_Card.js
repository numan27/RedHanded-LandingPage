import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MySpace_Card = (props) => {
    return (
        <div className='justify-content-center d-flex align-items-center'>
            <Card className='rounded-lg p-2 myCard_2 bg-white' style={{ width: '18rem' }}>
                <Card.Img className='card2_img' variant="top" src={props.img} />
                <Card.Body className='pb-0 bg-white'>
                    <Card.Title className='address'>{props.address}</Card.Title>
                    <Card.Text className='city sizing mb-0'>{props.city}</Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Card.Text className='area sizing mb-1'>{props.area}</Card.Text>
                        <Card.Text className='price sizing mb-1'>{props.price}</Card.Text>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
}

export default MySpace_Card;