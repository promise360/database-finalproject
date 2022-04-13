import React from 'react'
import styled from 'styled-components';

function Text() {
  return (
    <>
    <Big>WELCOME TO MY DATABASE PROJECT</Big>
    </>
  )
}

export default Text

const Big = styled.p`
display:flex;
justify-content: center;
width: 100%;
font-size: 18pt;
font-weight:bold;
text-align: center;

@media screen and (max-width:700px){
    font-size: 13pt;
}

  
 

`