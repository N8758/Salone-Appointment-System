import Carousel from 'react-bootstrap/Carousel';
import bg from '../../assets/homeBg.png';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import React, {useState} from 'react';

function Background() {
    const [index, setIndex] = useState(0);
  const images = [bg, bg,bg];
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
        <Carousel activeIndex={index} onSelect={handleSelect} slide={true}>
          {images.map((image) => (
            <Carousel.Item key={image}>
              <img
                className="d-block w-100"
                src={image}
                alt="First slide"
                style={{ height: "28em" }}
              />
              <Carousel.Caption>{/* Empty Caption */}</Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        
      </div>
  );
}

export default Background;