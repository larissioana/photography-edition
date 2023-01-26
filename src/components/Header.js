import image from '../img/photo.jpg';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { titleAnim,pageAnimation,container } from '../animations';

const Header=()=>{
 
    return(
        <Wrapper variants={pageAnimation} initial="hidden" animate="show" exit='exit'>
        <motion.div className="container" variants={container} initial='hidden' animate='show'>
            <div className="left">
            <motion.h2 variants={titleAnim}>We come to</motion.h2>
            <motion.h2  variants={titleAnim}>make your dream </motion.h2>
            <motion.h2  variants={titleAnim}>come true.</motion.h2>
            </div>
            <div className="right">
            <img src={image} alt='photographer'/>
            </div>
            </motion.div>
        
        </Wrapper>
    )
};
export default Header;
const Wrapper=styled(motion.div)`
margin:5rem  auto;
.container{
display:flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
padding:0rem 10rem;

 .left,.right{
    flex:1;
   
 }
 
 .left{
    

    h2{
        color:#ebebeb;
        font-size:clamp(2rem,4vw,4rem);
        line-height:5rem;

    }
}
}

    img{
        width:30rem;
        height:35rem;
        object-fit: cover;
   }
      
    
@media (max-width:700px){
 
   .container{
    display:grid;
    place-items: center;
   
   }
   
    img{
        height:25rem;
        width:18rem;
        margin-top:2rem;
    }
}
`;
