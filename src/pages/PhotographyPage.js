import styled from "styled-components";
import { AboutUs} from "../data";
import { useState } from "react";
import { pageAnimation,titleAnim } from "../animations";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import ScrollTop from "../ScrollTop";

const PhotographyPage=()=>{
   const[photographie,setPhotographie]=useState(AboutUs);
   return(
    <motion.div variants={pageAnimation} exit='exit' initial='hidden' animate='show'>
     <Wrapper>
     <ScrollTop/>
    <motion.div variants={titleAnim} className="title">
     <h3>TOP GALLERY PHOTO</h3>
      <h2>Gain the new skills.</h2>
      </motion.div>
         <div className="container">
        <motion.div className="gallery">
            {photographie.map((item)=>{
                const{mainImage,id,title,url}=item;
                return <div  key={id} className="about-gallery">
                   <NavLink to={url}>
                <img  src={mainImage} alt={title}/>
                <h3>{title}</h3>
              </NavLink>
                </div>
            })}
         </motion.div>
         </div>
   
        </Wrapper>
    </motion.div>
   )
};
export default PhotographyPage;

const Wrapper=styled.div`
margin:6rem auto;
overflow-x:hidden;
h3{
    text-align: center;
    color:#ebebeb;
    font-size:clamp(1.5rem,2vw,2rem);
    margin-bottom:2rem;
}
h2{
    text-align: center;
    color:#ebebeb;
    font-size:clamp(2rem,3vw,3rem);
    margin-bottom:3rem;
}
.container{
    margin-top:3rem;
    width:70%;
    min-height:30rem;
    background:#2a2a2a;
    margin:0 auto;
   
 
    .gallery{
    place-items: center;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
   
    
}
}
.about-gallery{
    margin-top:2rem;
    padding:2rem 4rem;
    position:relative;
    place-items: center;
    perspective: 300px;
    overflow:hidden;
    
    
    h3{
        position:absolute;
        bottom:1rem;
        color:#ffffff;
        left:6rem;
        width:9rem;
        font-size:clamp(.9rem,2vw,1rem);
       
    }
    }
    img{
        width:18rem;
        height:18rem;
        object-fit: cover;
        filter:sepia(50%);
        &:hover{
            filter:none;
        }
        
    }
    p{
      
      color:#ebebeb;
      font-size:clamp(2rem,4vw,4rem);
      cursor:pointer;
    }
    @media (max-width:500px) {
        overflow-x: hidden;
    }
  
`