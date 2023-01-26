import image from '../img/gallery-bg.jpg';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Gallery=()=>{
     return(
        <div>
         <Wrapper className="container" style={{
            backgroundImage:`url(${image})`
         }}>
        <div className="gallery">
            <NavLink to='/portfolio'><p>photographies</p></NavLink>
        </div>
         </Wrapper>
        </div>
    )
};
export default Gallery;

const Wrapper=styled.div`
position:relative;
   background-size:cover;
   background-position:center;
   background-repeat: no-repeat;
   min-height:90vh;
   filter: grayscale(100%);
   
   .container{
    position:relative;
   }
   .gallery{
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    color:white;
    border: 7px solid rgb(219, 219, 219);
    background-color: rgba(0, 0, 0, 0.7);
    width: 55%;
    padding: 3rem 4rem;
    cursor:pointer;
    &:hover{
        background-color: rgba(0, 0, 0, 0);
    }
    p{
        text-align: center;
        color:#ebebeb;
        letter-spacing:  .1rem;
        font-size:clamp(1rem,2vw,1.1rem);
    }
   }
   @media (max-width:420px){
    .gallery{
        min-width:17rem;
        padding:2rem 4rem;
    }
   }

`