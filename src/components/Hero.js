import React from 'react'
import styled from 'styled-components';




function Hero() {
  return (
    <>
    <Main>
        <About>About the Program</About>
        <Dub>
            The LSETF Employability Support Project, 
                is designed to help tackle the unemployment scourge 
                among the youths by helping them train 10,000 young people to gain skills
                 in 4 tech sectors namely – Software Development, 
                 Cloud Computing, Cyber Security and Web Development,
                  that will help place them in line for immediate employment.
        </Dub>
        
        <p>Below is a Database of partcicpants of the just concluded Software Enginnering cohort 5.0 2022.</p>

    </Main>
    </>
  )
}

export default Hero

const G = styled.div`
text-align: center;
`

const Main = styled.div`
P{
  text-align: center;
  font-weight:bold;
  margin-top: 10px;
  font-size: 14pt;

  
}
@media screen and (max-width:700px){
  p{
    font-size: 10px;
  }
}

`
const About = styled.h2`
text-align: center;
`
const Dub = styled.div`
display: flex;
justify-content: center;
width: 100px
font-size: 12pt;
text-align: center;
@media screen and (max-width:700px){
  font-size:8pt;
  font-weight: bold;
}
  


`