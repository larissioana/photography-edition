import styled from "styled-components";
import { useLocation,NavLink } from "react-router-dom";
import  {AboutUs}  from "../data";
import { useState,useEffect } from "react";
import { GrCaretPrevious} from "react-icons/gr";
import { motion } from "framer-motion";
import { pageAnimation,container,photoAnim } from "../animations";
import ScrollTop from "../ScrollTop";

const PhotographyDetail=()=>{
    const url=useLocation();
    const[photographies,setPhotographies]=useState(AboutUs);
    const[photographie,setPhotographie]=useState();
    const[showMore,setShowMore]=useState(false);

    useEffect(()=>{
    const currentPhotographie=photographies.filter((statePhotography)=>statePhotography.url===url.pathname);
    setPhotographie(currentPhotographie[0]);
    },[photographies,url]);
    return(
        <Wrapper variants={pageAnimation} initial='hidden' exit='exit' animate='show'>
               <ScrollTop/>
            {photographie &&(
                <div>
                <h3>{photographie.title}</h3>
                <div className="prev">
                    <NavLink to='/portfolio'>
                    <button>
                    <span><GrCaretPrevious/></span>
                    </button>
                    </NavLink>
                </div>
            <motion.div variants={container} initial='hidden' animate='show' className="photographies">
               
                {photographie.secondaryImage.map((item)=>{
                    const{image,id}=item;
                    return <motion.div variants={photoAnim} className="gallery" key={id}>
                        <img  src={image} alt="photographies"/>
                    </motion.div>
                })}
         
         </motion.div>
         <div className="more-images">
         <button className="show-more" onClick={()=>setShowMore(!showMore)}>
         {showMore? "Less":"More"}
         </button>
         </div>
         <div className="gallery-images">
            {photographie.thirdImage.map((item)=>{
                const{id,image}=item;
                return <div className="gallery-images" key={id}>
                    {showMore && 
                    <img src={image} alt="photographie"/>
            }
                </div>
            })}
            </div>
            </div>
       
           )}
       
 
        </Wrapper>
    )
};
export default PhotographyDetail;
const Wrapper=styled(motion.div)`
    margin:5rem auto;
    width:100%;
    position:relative;
    overflow-x: hidden;
    
h3{
    color:#ebebeb;
    margin-left:3rem;
    font-size:clamp(1.5rem,2vw,2rem);
    margin-bottom:5rem;
}
.prev{
    position:absolute;
    top:3rem;
    left:3rem;
    margin-top:1rem;
    
    button{
        color:#000000;
        clip-path: circle();
        font-size:clamp(1.5rem,3vw,2rem);
        cursor: pointer;
        padding:.6rem;
     }
}
    .photographies{
        margin:0rem 2rem;
        display:grid;
        place-items: center;
        gap:5rem;
        grid-template-columns:repeat(auto-fill,minmax(400px,1fr));
        
     .gallery{
       margin-top:4rem;
        img{
            width:28rem;
            height:30rem;
            object-fit: cover;
           
        }
     }
    }
   
    .gallery-images{
        display:grid;
        margin:2rem 2rem;
        
        place-items: center;
        gap:5rem;
        grid-template-columns:repeat(auto-fill,minmax(400px,1fr));
        img{
            width:28rem;
            height:30rem;
            object-fit: cover;
          
        }
    }
    .show-more{
        background:#5f6262;
        color:#17181a;
        filter:grayscale(70%);
        border:none;
        width:6rem;
        height:6rem;
        clip-path: circle();
        font-size:.9rem;
        cursor:pointer;
        &:hover{
            filter:sepia(40%);
        }
    }
   
    @media (max-width:468px){
        gap:0;
        overflow-x: hidden;
        .photographies{
            gap:.5rem;
            display:flex;
            justify-content: center;
            flex-wrap: wrap;
            
            img{
            max-width:8rem;
           max-height:10rem;
        }
        }
        .gallery-images{
           gap:0rem;
            display:flex;
            flex-wrap: wrap;
            justify-content: center;
            
            img{
            max-width:8rem;
           max-height:10rem;
        }
        }
       
    }
    .more-images{
        display: grid;
        place-items: center;
        margin-top:3rem;
    }
  
`