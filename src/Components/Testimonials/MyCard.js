import React from 'react';
import { Card } from 'react-bootstrap';

const MyCard = (props) => {
    return (
        <div className='justify-content-center d-flex'>
            <Card className='px-3 mb-3 myCard mx-4' style={{ width: '28vw', height: '300px' }}>
                <Card.Body className='d-flex flex-column justify-content-around'>
                    <div>
                        <Card.Text className='cardText'>
                            <i class="bi bi-quote qoutes"></i>  <p>{props.text}<i class="bi bi-quote qoutes"></i> </p>
                        </Card.Text>
                    </div>
                    <div className='d-flex mb-4 justify-content-start'>
                        <Card.Img className='clientImg mr-3' src={props.img} alt="client" />
                        <div>
                            <Card.Title className='mb-2 cardTitle'>{props.title}</Card.Title>
                            <Card.Subtitle className="mb-2 designation">{props.designation}</Card.Subtitle>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MyCard;