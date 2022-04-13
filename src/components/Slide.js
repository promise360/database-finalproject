import React from 'react'
import { Carousel } from 'antd';
import './slide.css';

function Slide() {

    function onChange(a, b, c) {
        console.log(a, b, c);
      }
    const contentStyle = {
        height: '300px',
        color: '#fff',
        lineHeight: '300px',
        textAlign: 'center',
        background: '#364d79',
      };

  return (
    <div className='alpha'>
         <Carousel  afterChange={onChange} autoplay >

             
            <div className='slide1a'>
                 
                      
            </div>

            <div className='slide2b'>
                 <h3></h3>
            </div>

            <div className='slide3c'>
                 <h3></h3>
            </div>

            <div className='slide4d'>
                 <h3></h3>
            </div>
  </Carousel>
 
    </div>
  )
}

export default Slide
