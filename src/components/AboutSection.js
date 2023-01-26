import { aboutSection } from "../data";
import styled from "styled-components";
import image from '../img/team2.jpg';
import {container,photoAnim} from '../animations';
import { motion, useAnimation } from "framer-motion";
import{useInView} from 'react-intersection-observer';
import { useEffect } from "react";

const AboutSection=()=>{

const controls=useAnimation();
const{ref,inView}=useInView();
  
useEffect(()=>{
    if(inView){
        controls.start("show")
    }if(!inView){
        controls.start('hidden')
    }
},[controls,inView])

    return(
        <Wrapper>
         <motion.div ref={ref} initial="hidden"
         animate={controls}
         variants={container}
         className="container">
            {aboutSection.map((item)=>{
                const{image,id}=item;
                return <motion.div key={id}>
                <motion.img variants={photoAnim}  src={image} alt='photographie'/>
                </motion.div>
})}
         </motion.div>
         <motion.div className="description">
          <p>"The world should see all the beauty that wee see through the lens. "</p>
          <h3>Our responsabilities are:</h3>
          <div  className="circle">
            <span>filming</span>
            </div>
            <div  className="circle">
            <span>taking photos</span>
            </div>
            <div  className="circle">
            <span>editing and retouching</span>
            </div>
            <div className="circle">
            <span>researching and making contacts</span>
            </div>
            <div className="circle">
            <span>selection of models</span>
            </div>
            <div className="circle">
            <span>creating and hiring a shooting team</span>
            </div>
          <img src={image} alt='photographie'/>
          </motion.div>
        </Wrapper>
    )
}
export default AboutSection;
const Wrapper=styled(motion.div)`
overflow-x: hidden;
    .container{
  
        display:flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap:.5rem;
        img{
            width:20rem;
            height:30rem;
            object-fit: cover;
            filter:grayscale(100%);
            
        }
    }
    .description{
        padding:5% 10%;
        color:#ebebeb;
        margin-top:3rem;
        width:100%;
        .circle {
        border-radius: 50%;
        width:1rem;
        height:1rem;
        background:#e8e7e7;
        margin-top:2rem;
       
        span{
            margin-left:1.5rem;
            font-size:clamp(.8rem,2vw,1.1rem);
            display:inline-flexbox;
            width:40rem;
           
        }
    }
      
        h3{
            font-size:clamp(1rem,2vw,1.5rem);
            margin-top:2rem;
            font-weight: bolder;
        }
        h4{
            font-size:clamp(.9rem,2vw,1rem);
            margin-top:.5rem;
            
        }
        img{
            width:30rem;
            height:30rem;
            object-fit: cover;
            margin-top:2rem;
            filter:grayscale(100%);
        }
      
    }
    @media (max-width:969px){
        .container{
            justify-content: center;
            img{
            max-width:15rem;
            height: 15rem;
        }
        }
        
       }
       @media (max-width:600px){

        .description{
            padding:0;
            display: grid;
            place-items: center;
            p{
                text-align: center
            }
            .circle{
                margin-right:17rem;
            }
            img{
                width:18rem;
                height:20rem;
            }
        }
       }
`