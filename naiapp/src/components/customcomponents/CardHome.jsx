import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import img1 from '../../assets/img1.png'
const CardHome = ({props}) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.img}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        
      </Card.Body>
    </Card>
  )
}

export default CardHome