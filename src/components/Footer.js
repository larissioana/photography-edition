import styled from "styled-components";
import { socialLinks } from "../data";
import {useAnimation,motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import{container,photoAnim} from '../animations';
import { useEffect } from "react";


const Footer=()=>{
    const controls=useAnimation();
    const[ref,inView]=useInView();
    useEffect(()=>{
   if(inView){
    controls.start("show")
   }
   if(!inView){
    controls.start("hidden")
   }
    },[controls,inView]);
         return(
        <Wrapper>
        <motion.div ref={ref} 
        initial="hidden"
        animate={controls}
        variants={container}
        className="container">
            {socialLinks.map((link)=>{
                const{id,url,icon}=link;
                return<motion.div variants={photoAnim} className="footer" key={id}>
                 <a href={url} target="_blank" rel="noreferrer">
                    {icon}
                 </a>
                </motion.div>
            })}
        </motion.div>
        </Wrapper>
    )
}
export default Footer;

const Wrapper=styled(motion.div)`
    margin-top:3rem;
    .container{
        width:100%;
        height:4rem;
        display:flex;
        justify-content: center;
        .footer{
           a{
            color:#5f6262;
            padding-left:1rem;
            font-size:clamp(1.5rem,3vw,2rem);
            filter:grayscale(70%);
           }
        }
    }
`