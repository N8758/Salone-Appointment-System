import React from 'react'
import aboutus from './aboutus.png'
import { Container } from 'react-bootstrap'
const About = () => {
  return (
    <Container style={{backgroundColor:"black", textAlign:"start", color:"white", paddingTop:"50px",paddingLeft:"30px", paddingRight:"30px", paddingBottom:"30px"}} >
       <h5 style={{textAlign:"center"}}>NAI - India's First Online Beauty <br/> Service Booking App</h5>
       <br/>
       <p>
       Finding the right spa or salon for your hair and beauty needs is painstakingly exasperating, and even more so are those long queues and waiting times at
the venues, especially during the weekends.<br/>
The salon booking app brings to you a comprehensive range of top-rated male, female and unisex salons in your locality to choose from. <br/> You can compare your desired parlour and salon services, prices and the best offers and discounts offered by our partners and pick the best beauty salon and parlour that suits your budget, time, and convenience the most. Also, you can check the genuine user reviews and ratings before booking a salon online and experience high quality services without wasting your precious time.<br/>
Whether you are looking for a stylish new haircut, hair spa, facial, waxing and hair removal, Bridal makeup, or last-minute nails or want to treat yourself to a soothing body spa, NAI happens to be your go-to spa and salon booking app.
       </p>
    </Container>
  )
}

export default About