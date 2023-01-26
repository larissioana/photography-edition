import styled from "styled-components";
import { useState } from "react";
import { faqSection } from "../faq";
import Question from "./Questions";

const FaqSection=()=>{
    const[state,setState]=useState(faqSection);
  
    return(
        <Wrapper>
        <h2>Any Questions <span>FAQ</span></h2>
        <div className="container">
         {state.map((item)=>{
            return <Question key={item.id} {...item}/>
         })}
         
        </div>
        </Wrapper>
    )
};
export default FaqSection;
const Wrapper=styled.div`
overflow-x: hidden;
    h2{
        color:#ebebeb;
        text-align: center;
        margin-bottom:4rem;
        font-size:clamp(1.7rem,3vw,3rem);
        span{
            font-size:clamp(2rem,4vw,3.2rem);
        }
    }
    .container{
        display: grid;
        place-content: center;
        padding:3rem 2rem;
        width:100%;
        .question{
       
           width:600px;
    
            display:flex;
            justify-content: space-between;
            button{
                color:#ebebeb;
                background:none;
                border:none;
                cursor: pointer;
                font-size:1rem;
                padding-left:1rem;
            }
            h3{
                color:#ebebeb;
                margin-bottom:1.6rem;
                font-size:clamp(1rem,2vw,1.3rem);
            }
        }
        h4{
            color:#ebebeb;
                margin-bottom:1rem;
                font-size:clamp(.9rem,2vw,1rem);
        }
    }
    .line{
        width:100%;
        height:.3rem;
        background-color:#5f6262;
        filter:grayscale(70%);
        margin-bottom:1rem;
    }
    @media (max-width:640px){
        overflow-x: hidden;
        .question{
            max-width:400px;
          
        }
    }
    @media (max-width:470px){
        overflow-x: hidden;
        .question{
            max-width:270px;
          
        }
    }
`