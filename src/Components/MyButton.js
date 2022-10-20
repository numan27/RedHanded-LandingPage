import React from 'react';
import {Button } from 'react-bootstrap';

const MyButton =(props) => {
    return (
        <Button className='myButton'>{props.title}</Button>
    );
}

export default MyButton;