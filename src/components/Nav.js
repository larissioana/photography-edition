
import React,{useState} from 'react'
import { links } from '../data'
import {NavLink} from 'react-router-dom';
import { FaBars,FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import {fade } from '../animations';
import { motion } from 'framer-motion';
const Nav=()=> {
    const[isOpen,setIsOpen]=useState(false);

    const toggleButton=()=>{
       setIsOpen(!isOpen);
    };
 
  return (
    <Wrapper>
     
        <nav>
          <div className="nav-header">
            <div className="btn">
                <button onClick={toggleButton}>
                    {isOpen? <FaTimes/>: <FaBars/>}
                </button>
            </div>
            <motion.div variants={fade} initial='hidden' animate='show' className={`${isOpen? "nav-links show-links":'nav-links'}`}>
              <ul className="links">
                {links.map((link)=>{
                    const{id,label,icon,url}=link;
                    return <li  key={id}>
                        <NavLink to={url} style={({isActive})=>{
                          return {width:isActive? '3rem':'',
                                  color:isActive?'#292828':'none',
                                  backgroundColor:isActive? '#d1cbcb':'',
                                  padding:isActive?'1rem 1.5rem':'none'}
                          
                            }} >
                         <span>{icon}</span>
                         {label}
                        </NavLink>
                        
                    </li>
                })}
              </ul>
            </motion.div>
          </div>
        </nav>
        
    </Wrapper>
  )
};
export default Nav;
const Wrapper=styled.div`

nav{
    height:5rem;
    width:100%;
    background:#212121;
    button{
            border:none;
            background:none;
            font-size:1.5rem;
            color:#ebebeb;
            cursor:pointer;
            display:none;
        }
    .nav-header{
        display: flex;
        justify-content:center;
        align-items: center;
      
    .links{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding:1.5rem;
            z-index:10;
            a{
               color:#ebebeb;
                margin-left:3rem;
                font-size:clamp(.8rem,2vw,1rem);
                letter-spacing: .1rem;
            }
            span{
              
                opacity:0;
            }
           
        }
      
    }
   
    @media (max-width:1100px){
      overflow-x: hidden;
    button{
        display:block;
        padding:1.5rem;
        
     
        &:hover{
            opacity:.5;
        }
    }
  
     .nav-links{
        position:absolute;
        top:10vh;
        left:0;
        width:100%;
        background:#212121;
        border:1px solid #ebebeb;
        min-height:90vh;
        display:grid;
        z-index:10;
        place-self: center;
        transform: scale(0);
        z-index:10;
        transition:transform .3s ease-out;
       
        ;
       
      .links{
            display:grid;
            place-self: center;
            margin-top:-8rem;
            
          li{
            padding-top:3rem;
           
          }
          
            span{
                opacity:1;
                padding-right:.4rem;
            }
        }
     }
   
     .show-links{
      transform:scale(1);
      animation:anim .5s ease-in-out;
    
   @keyframes anim{
  from{
   transform:scale(0);
   z-index:10;
  
  }
  to{
 
    transform:scale(1);
  }
}
              
}
}
}
   
  `;

