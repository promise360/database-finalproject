import React from 'react'
import styled from 'styled-components';


function Foot () {
  return (
    <>
    <Under>
        <Footer>
          <span> <p>This Participant's Database project is the Property of AZUBINE UZONDU PROMISE, 
                 Loftyinc, USADF and LSETF. </p></span> 
                 <p> All rights reserved (c2022)</p>

        </Footer>
    </Under>
    
    </>
  )
}

export default Foot;

const Under = styled.div`
height:60px;
width:100%;
background-color:purple;
display:flex;
justify-content:
`
const Footer = styled.div`
display:flex;

align-items:center;
flex-direction:column;
width: 100%;
height: 50px;

@media screen and (max-width:700px){
  P{
    font-size:7pt;
    font-weight:bold;
    text-align:center;
  }
}
`