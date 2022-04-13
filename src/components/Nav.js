import React from 'react'
import styled from 'styled-components';
import nav1 from './imagez/loftyinco.jpg';
import nav2 from './imagez/lsetff.jpg';
import nav3 from './imagez/wehubb.jpg';
import nav4 from './imagez/usad.jpg';

function Nav () {
  return (
    <>
    <Alpha>
        <Beta><img src={nav1}/>
        <img src={nav2}/>
        <img src={nav3}/>
        </Beta>

        <Ceta>
            <img src={nav4}/>
        </Ceta>
    </Alpha>
    
    </>
  )
}

export default Nav;

const Alpha = styled.div`
height:80px;
width:100%;
background-color:purple;
display:flex;
justify-content:space-between;
position:fixed;
z-index:999;
margin-bottom: 40px;
`
const Beta = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
width: 200px;

@media screen and (max-width:700px){
  img{
    height:10px;
  }
}

img{
    height:30px;
    width: 30px;
    border-radius:50%;
},

}


`
const Ceta = styled.div`
display:flex;

align-items:center;
width: 200px;

img{
    height:30px;
    width: 30px;
    border-radius:50%;
},
`