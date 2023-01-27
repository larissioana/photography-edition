import styled from "styled-components";
import { services } from "../data";
import imageHome from '../img/home2.png';
import { motion, useAnimation } from "framer-motion";
import{useInView} from 'react-intersection-observer';
import {container,photoAnimation,photoAnim} from '../animations';
import { useEffect } from "react";


const Services=()=>{
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
               <h2>We offer</h2>
               <h2>high  quality services</h2>
        <motion.div ref={ref} initial="hidden" animate={controls} variants={container} className="container">
         
            <div className="cards">
                <div className="card">
                    {services.map((service)=>{
                        const{id,title,image}=service;
                        return <motion.div variants={photoAnim} className="service" key={id}>
                            <div className="icon">
                            <img src={image} alt={title}/>
                            <h3>{title}</h3>
                            </div>
                        </motion.div>
                    })}
                </div>
                <div className="img-container">
                    <motion.img variants={photoAnimation} src={imageHome} alt='camera'/>
                </div>
            </div>
        </motion.div>
        </Wrapper>
    )
};
export default Services;

const Wrapper=styled(motion.div)`
    margin:5rem auto;
    color:#ebebeb;
    padding:2rem 2rem;
    h2{
        font-size:clamp(1.7rem,3vw,3rem);
        text-align: center;
        line-height: 4rem;
    }

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
   
   .cards{
       
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        p{
        margin-bottom:1.5rem;
        margin-top:1rem;
        font-size:clamp(.9rem,2vw,1rem);
  }
        
    }
    .card,.img-container{
        flex:1;
    }
    .card{
       
        margin-top:2rem;
        display: grid;
        place-items: center;
        grid-template-columns: 1fr 1fr;
    }
    .icon{
        display:flex;
        align-items:center;
 
    h3{
        margin-left:1rem;
        background:#ebebeb;
        color:black;
        padding:1rem;
        font-size:clamp(1rem,2vw,1.2rem);
    
  }
    img{
        width:30px;
        height:30px;
  }
  
}
    .service{
    margin-left:1.5rem;
    margin-top:3rem;
}
    .img-container{
    margin-left:6rem;
    margin-top:5rem;
    img{
    width:30rem;
    height:30rem;
    object-fit: cover;
  }
}
@media (max-width:600px){
    overflow-x: hidden;
    h2{
        text-align: center;
        margin-bottom:2rem;
        line-height: 1rem;
    }
    .container{
        display:grid;
        place-items: center;
    }
    .img-container{
        margin-left:0;
        margin-top:2rem;
        display:grid;
        place-items: center;
        img{
            width:25rem;
        }
    }
}
@media (max-width:390px){
    overflow-x: hidden;
   .card{
        display:grid;
        place-items: center;
        grid-template-columns:1fr;
    }
    
    .img-container{
        img{
            width:20rem;
            
        }
    }
}
`;
