import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {datbase,}  from './Dbase';
import {storage} from '../components/Dbase';
import {collection, addDoc, getDocs, doc  } from 'firebase/firestore';
// import {storage} from './Dbase';
import logo1 from './imagez/giticon.png';
import logo2 from './imagez/linkedinicon.png';
import logo3 from './imagez/facebookicon.png';
import logo4 from './imagez/whatsappicon.png';






function MainDbase() {

  const [newName, setNewname] = useState([]);
  const [avatar, setAvatar] = useState("")
  const [newDesc, setNewdesc] = useState("");
  const [newFacebook, setNewfacebook] = useState("");
  const [newWhatsapp, setNewwhatsapp] = useState("");
  const [newLinkedin, setNewlinkedin] = useState("");
  const [newGithub, setNewgithub] = useState("");

  const collectionsRef = collection(datbase, 'participantes');



  const CardIdentifiers = async () => {
    await addDoc(collectionsRef,{name:newName, description:newDesc, github:newGithub, linkedin:newLinkedin,
      facebook:newFacebook, whatsapp:newWhatsapp,image:avatar})
    console.log(CardIdentifiers)
  }

  const getData = async () => {
    const data = await getDocs(collectionsRef);
    setNewname(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
  }

  useEffect(() => {
    getData();
    
  }, []);
  

  return (
    <>
    <Cardholder>
      {newName.map((props) => (
        <div key={props.id}>
          <Card >
        <Studenticon><img src={props.image}/></Studenticon>
        <Studentname>{props.name}</Studentname>
        <Studentdesc>{props.description}</Studentdesc>

        <Socialicons>
         <a target='_blank' href={props.github}> <img src={logo1} className='icons' /></a>
         <a target='_blank' href={props.linkedin}> <img src={logo2} className='icons' /></a>
         <a target='_blank' href={props.facebook}> <img src={logo3} className='icons' /></a>
         <a target='_blank' href={props.whatsapp}> <img src={logo4} className='icons' /></a>

        </Socialicons>

      </Card>

        </div>
      ))}
      
    </Cardholder>
    </>
  )
}

export default MainDbase

const Cardholder = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
background-color: white;

`
const Card = styled.div`
margin: 30px;
color: white;
background-color:purple;
padding: 20px;
width: 300px;
height: 400px;
box-shadow: 10px 10px 8px #888888;
border-radius:20px;
transition: transform .1s ease;
 :hover{
   background-color:whitesmoke;
   color:purple;
 }

cursor: pointer;

 @media screen and (max-width: 700px) {
   margin:10px;
   height:340px;
   width:300px;
 }


`
const Studentname = styled.div`
font-weight: 800;
font-size: 15pt;






`
const Studentdesc = styled.div`
font-size: 12px;
font-weight: bold;
font-style: italics;
`
const Socialicons = styled.div`
display: flex;
justify-content: space-around;

img {
  height:30px;
  width: 30px;
  border-radius:50%;
  margin-top:5px;

   @media screen and (max-width:700px){
   height:18px;
   width:18px;
    
   }
}
`
const Studenticon = styled.div`
 img {
   width:130px;
   height: 130px;
   border-radius:20px;


   @media screen and (max-width: 700px) {
    
    height:80px;
    width:80px;
  }

 }
`
