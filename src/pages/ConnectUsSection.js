import styled from "styled-components";
import { data } from "../team";
import {useState,useEffect} from 'react';
import { pageAnimation } from "../animations";
import { motion } from "framer-motion";
import FaqSection from "../components/FaqSections";
import ScrollTop from "../ScrollTop";

const ConnectSection=()=>{
    const [people, setPeople]=useState(data);
    const [index,setIndex]=useState(0);

    useEffect(()=>{
    const lastIndex=people.length -1;
    if(index < 0){
    setIndex(lastIndex); 
    }
    if(index > lastIndex){
        setIndex(0);
    }
    },[index,people]);

     useEffect(()=>{
    let slider= setInterval(()=>{
     setIndex(index+1)
     },2000);
     return () => clearInterval(slider)
     },[index])
    return(
        <Wrapper variants={pageAnimation}
        exit='exit'
        initial='hidden'
        animate='show'
        >
            <div className="title">
                <h2>Our team</h2>
            </div>
         <div className="container">
            <div className="section-center">
            {people.map((person,personIndex)=>{
              const{name,image,job,icon,info}=person;
              let position='nextSlide';
              if (personIndex === index){
                position='activeSlide'
              }
              if(personIndex === index-1 || (index === 0 && personIndex === people.length-1)){
                position='lastSlide'
              }
              return <article className={position} key={personIndex}>
                 <img src={image} alt='our-team'/>
                 <p>{info}</p>
                 <hr/>
                 <h3>{name}</h3>
                 <h4>{job}</h4>
                 <p className="icon">{icon}</p>
              </article>
            })}
         </div>
         </div>
         <FaqSection/>
         <ScrollTop/>
        </Wrapper>
    )
};
export default ConnectSection;

const Wrapper=styled(motion.div)`
overflow-x:hidden;
.title{
    display:flex;
    place-content: center;
    h2{
        color:#ebebeb;
        font-size:clamp(2.5rem,5vw,5rem);
        text-transform: uppercase;
     
    }
}
    margin:8rem auto 0rem auto;
    width:100vw;
    .container{
        width:95vw;
        
    }
    .section-center{
        margin:0 auto;
        margin-top:3rem;
        width:90vw;
        height:38rem;
        max-width:900px;
        text-align: center;
        position:relative;
        display: flex;
        justify-content: center;
        overflow: hidden;
    }
    article{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:70%;
        opacity:0;
       border-radius: 1rem;
       padding:3rem;
    
      
        img{
            width:15rem;
            height:15rem;
            clip-path: circle();
            object-fit: cover;
            
        }
        p{
            color:#ebebeb;
            margin-top:1rem;
            font-size:clamp(.8rem,2vw,.9rem);
            line-height:1.4rem;
          
            
            
        }
        hr{
            color:#d0cbcb;
            margin-top:.7rem;
        }
        h3{
            font-size:clamp(1.2rem,2vw,1.4rem);
            color:#ebebeb;
            margin-top:.6rem;
        }
        h4{
            color:#ebebeb;
            margin-top:.7rem;
            font-size:clamp(1rem,2vw,1.1rem);
        }
        .icon{
        font-size:clamp(1.1rem,2vw,1.5rem);

    }
  
}
article.activeSlide {
    opacity: 1;
    transform: translateX(0);
}
    article.lastSlide {
    transform: translateX(-100%);
}
    article.nextSlide {
    transform: translateX(100%);
}
.prev,.next{
    font-size:clamp(1.3rem,2vw,2rem);
    height:2rem;
    clip-path: circle();
    cursor:pointer;
    
}
.prev{
    position:absolute;
    top:5rem;
    left:0;
   
}
.next{
    position:absolute;
    top:5rem;
    right:0;
}

@media (max-width:480px){
    overflow-x:hidden;
    margin:3rem auto;
    display: grid;
        place-items: center;
    article{
        height:79%;
        display: grid;
        place-items: center;
    }
    img{
       max-width:12rem;
       max-height:12rem;
       clip-path: circle();
    }
    .prev{
        left:0rem;
       
    }
    .next{
        right:0;
    }
}
`