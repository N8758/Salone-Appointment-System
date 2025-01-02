import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

import Background from './Background1.jsx'
import {Row,Col} from 'react-bootstrap'
import Stack from 'react-bootstrap/Stack';
import CardHome from '../customcomponents/CardHome.jsx';
import img1 from '../../assets/bridal.png'
import img2 from '../../assets/trending2.png'
import img3 from '../../assets/treditional2.png'
import img4 from '../../assets/formal2.png'
//for him
import img5 from '../../assets/img1.png'
import img6 from '../../assets/Tirending.png'
import img7 from '../../assets/treditional.png'
import img8 from '../../assets/formal.png'

import Button from 'react-bootstrap/Button';

import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Home = () => {

  const [forHim,setForHim]=useState(true)
  const her=[
    {img:img1,title:"Bridal", desc:"A variety of pampering bridal packages for all wedding and pre-wedding functions"},
    {img:img2,title:"Trending", desc:"Choose from the wide assortment of trending packages for your new look"},
    {img:img3,title:"Traditional", desc:"Garba Night or Friend's Wedding, no matter the event, turn up sassy and classy."},
    {img:img4,title:"Formal", desc:"Everything you need to get t elegant look for your next business meeting."},
  ]

  const him=[
    {img:img5,title:"Groom", desc:"Packages to make you look and feel your best on your Wedding day."},
    {img:img6,title:"Trending", desc:"The man in you needs some pampering too, and we can help."},
    {img:img7,title:"Traditional", desc:"Because, why should girls have all the fun? Nail it on next Garba Night."},
    {img:img8,title:"Formal", desc:"Show up classy on your next business event. Pick from th best packages."},
  ]

  const handleShowCards =()=>{
    setForHim(!forHim)
  }

  return (
    <Container fluid>
        <Background/>
        <br/>
        <Stack direction="virtical" style={{display:"-ms-flexbox"}}>
        <Row style={{height:"25%"}} >
          <Col md='8' style={{backgroundColor:'#eab676' , padding:"20px"}}>
            <h3>
              Packages & Combos
            </h3>
            <br/>
            <p style={{fontSize:"18px"}}>
              From your <br/> Neighbourhood Salon <br/>And Spas
            </p>

            <h5 style={{textDecoration:"underline"}}>For Him / Her</h5>
            <br/>
            
          </Col>
          <Col md='4' style={{backgroundColor:'#1a1115'}}>

          </Col>
          
        </Row>
<br/>
        <ButtonGroup aria-label="Basic example">
      <Button variant="secondary" onClick={handleShowCards}>For Him</Button>
      <Button variant="secondary" onClick={handleShowCards}>For Her</Button>
      
    </ButtonGroup>
{forHim && 
  <Container fluid>
          <Row className="overflow-auto">
            {him.map((e, index) => (
              <Col md='3' key={index}>
                <CardHome props={e} />
              </Col>
    ))}
  </Row>
</Container>
}   
{!forHim && 
  <Container fluid>
          <Row className="overflow-auto">
            {her.map((e, index) => (
              <Col md='3' key={index}>
                <CardHome props={e} />
              </Col>
    ))}
  </Row>
</Container>
}  

    </Stack>
        
    </Container>
  )
}

export default Home;