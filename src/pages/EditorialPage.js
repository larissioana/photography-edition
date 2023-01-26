import styled from "styled-components";
import { useState } from "react";
import { editorialPhotography } from "../data";
import { pageAnimation,container,photoAnim} from "../animations";
import { motion } from "framer-motion";


const EditorialPage=()=>{
    const[selectedImage,setSelectedImage]=useState(editorialPhotography[0]);
    return(
        <Wrapper variants={pageAnimation} exit='exit' initial='hidden' animate='show'>
            <div className="title">
            <h2>Experience</h2>
            <h3>Photography</h3>
            </div>
        <div className="container">
            <div className="left">
            <img src={selectedImage} alt='photography'/>
            </div>
            <motion.div className="right" variants={container} initial='hidden' animate='show'>
            {editorialPhotography.map((image,index)=>{
    
                return <motion.div variants={photoAnim} key={index}>
                    {selectedImage &&(
                    <img src={image} alt='photography' onClick={()=>setSelectedImage(image)}/>
                    )}
                    </motion.div>
            })}
            </motion.div>
        </div>
        </Wrapper>
    )
}
export default EditorialPage;
const Wrapper=styled(motion.div)`
margin:6rem auto;
overflow-x:hidden;
.title{
    display:grid;
    place-content: center;
    h2{
    font-size:clamp(2rem,3vw,3rem);
    color:#ebebeb;
}
h3{
    font-size:clamp(2.5rem,5vw,5rem);
    color:#ebebeb;
}
}

    .container{
        display:flex;
        padding:5% 2%;
        flex-wrap: wrap;
    }
    .left,.right{
        flex:1;
    }
    .left{
        img{
            width:30rem;
            height:35rem;
            object-fit: cover;
        }
    }
    .right{
        display:grid;
        grid-template-columns: repeat(auto-fill,minmax(150px,1fr));
        row-gap:1rem;
        img{
            width:10rem;
            height:10rem;
            object-fit: cover;
            object-position: top;
            cursor:pointer;
        }
    }
    @media (max-width:1050px){
      .container{
         display:grid;
         place-content: center;
         .right{
            column-gap:.6rem;
         }
      }
    }

    @media (max-width:805px){
        overflow-x:hidden;
        .left{
            display:grid;
            place-items: center;
        }
        .right{
            display:flex;
            justify-content: center;
            flex-wrap: wrap;
            padding:0;
            margin-top:1rem;
            img{
               width:8rem;
               height:8rem;
                padding-left:.5rem
            }
        }
    }
    @media (max-width:380px){
        overflow-x:hidden;
        .left{
            img{
                width:20rem;
                height:25rem;
            }
        }
        .right{
            margin:2rem 1rem;
           img{
            width:5rem;
            height:5rem;
            padding-left:.2rem;
           }
        }
    }
`