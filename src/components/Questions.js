
import {BsPlusLg} from 'react-icons/bs';
import {BiMinus} from 'react-icons/bi';
import { useState } from "react";

const Question=({question,answer})=>{
    const[showInfo,setShowInfo]=useState(false);
    return(
        <>
        <div className="info">
            <div className="question">
            <h3>{question}</h3>
            <button onClick={()=>setShowInfo(!showInfo)}>
                {showInfo? <BiMinus/> : <BsPlusLg/>}
            </button>
            </div>
           
            {showInfo &&
            <h4>{answer}</h4>
}             <div className="line"></div>
        </div>
        </>
    )
}
export default Question;