import styled from "styled-components";
import { useState} from "react";
import { pageAnimation } from "../animations";
import { motion } from "framer-motion";

const Contact=()=>{
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[message,setMessage]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name,email,message)
        setName("");
        setEmail("");
        setMessage("");
    }
    return(
        <Wrapper variants={pageAnimation} exit='exit' initial='hidden' animate='show'>
        <h2>Contact us</h2>
        <div className="container">
        <div className="left">
        <svg width="480" height="749" viewBox="0 0 748 749" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M97.0506 327.733C100.555 327.733 103.396 324.892 103.396 321.388C103.396 317.883 100.555 315.042 97.0506 315.042C93.5462 315.042 90.7054 317.883 90.7054 321.388C90.7054 324.892 93.5462 327.733 97.0506 327.733Z" fill="#353440"/>
<path d="M446.857 286.071H309.023V223.797C309.023 214.746 310.805 205.785 314.269 197.423C317.732 189.062 322.809 181.464 329.208 175.065C335.608 168.665 343.205 163.589 351.567 160.125C359.928 156.662 368.89 154.879 377.94 154.879C386.99 154.879 395.952 156.662 404.314 160.125C412.675 163.589 420.272 168.665 426.672 175.065C433.072 181.464 438.148 189.062 441.611 197.423C445.075 205.785 446.857 214.746 446.857 223.797V286.071Z" fill="#EBEBEB"/>
<path d="M416.184 271.443C438.182 249.444 438.182 213.778 416.184 191.779C394.185 169.78 358.519 169.78 336.52 191.779C314.521 213.778 314.521 249.444 336.52 271.443C358.519 293.441 394.185 293.441 416.184 271.443Z" fill="#9E616A"/>
<path d="M403.547 183.82C424.257 183.82 441.045 167.031 441.045 146.322C441.045 125.612 424.257 108.824 403.547 108.824C382.838 108.824 366.049 125.612 366.049 146.322C366.049 167.031 382.838 183.82 403.547 183.82Z" fill="#292930"/>
<path d="M439.268 234.591H292.665V233.761C292.665 195.759 325.548 164.843 365.967 164.843C406.386 164.843 439.268 195.759 439.268 233.761V234.591Z" fill="#292930"/>
<g clip-path="url(#clip0_2_5)">
<path d="M243.331 532.991L238.217 629C238.217 629 454.537 427.687 481.487 368.785C508.437 309.883 457.708 164.179 457.708 164.179L345.154 224.631L243.331 532.991Z" fill="#9E676F"/>
<path d="M575.018 123.878L608.309 126.978C608.309 126.978 625.747 164.179 571.847 167.279L575.018 123.878Z" fill="#9F616A"/>
<path d="M575.018 181.229L608.309 184.329C608.309 184.329 625.747 221.53 571.847 224.631L575.018 181.229Z" fill="#9F616A"/>
<path d="M575.018 243.231L608.309 246.331C608.309 246.331 625.747 283.532 571.847 286.633L575.018 243.231Z" fill="#9F616A"/>
<path d="M565.506 305.233L598.797 308.333C598.797 308.333 616.235 345.534 562.336 348.634L565.506 305.233Z" fill="#9F616A"/>
<path d="M591.225 138.823H588.699V71.1608C588.699 66.0182 587.663 60.9258 585.651 56.1746C583.638 51.4234 580.688 47.1064 576.969 43.47C573.25 39.8335 568.835 36.949 563.975 34.981C559.116 33.0129 553.908 32 548.649 32H402.04C396.781 32 391.573 33.0129 386.714 34.9809C381.855 36.9489 377.439 39.8335 373.72 43.4699C370.001 47.1063 367.051 51.4233 365.038 56.1745C363.026 60.9257 361.99 66.018 361.99 71.1607V442.358C361.99 447.501 363.026 452.593 365.038 457.345C367.051 462.096 370.001 466.413 373.72 470.049C377.439 473.686 381.854 476.57 386.714 478.538C391.573 480.506 396.781 481.519 402.04 481.519H548.648C559.271 481.519 569.458 477.393 576.969 470.049C584.48 462.705 588.699 452.745 588.699 442.359V186.985H591.225V138.823Z" fill="#3F3D56"/>
<path d="M580.172 71.4324V442.086C580.172 445.927 579.399 449.729 577.896 453.278C576.394 456.826 574.191 460.05 571.413 462.765C568.636 465.481 565.339 467.635 561.71 469.104C558.082 470.573 554.192 471.33 550.265 471.329H402.948C399.021 471.329 395.132 470.573 391.503 469.103C387.874 467.634 384.577 465.48 381.8 462.764C379.023 460.049 376.82 456.825 375.317 453.277C373.814 449.729 373.041 445.927 373.041 442.086V71.4324C373.041 67.5922 373.814 63.7895 375.317 60.2415C376.82 56.6936 379.023 53.4698 381.8 50.7543C384.577 48.0389 387.874 45.8849 391.503 44.4153C395.132 42.9458 399.021 42.1896 402.948 42.1898H420.827C419.946 44.2993 419.61 46.5881 419.848 48.8546C420.085 51.1212 420.889 53.2958 422.189 55.187C423.488 57.0781 425.243 58.6277 427.3 59.6992C429.356 60.7708 431.651 61.3313 433.981 61.3315H517.974C520.304 61.3298 522.597 60.7683 524.653 59.6964C526.708 58.6245 528.463 57.075 529.762 55.1843C531.062 53.2936 531.866 51.1196 532.104 48.8537C532.342 46.5877 532.007 44.2993 531.128 42.1898H550.265C554.192 42.1896 558.081 42.9458 561.71 44.4154C565.339 45.8849 568.636 48.0389 571.413 50.7544C574.19 53.4698 576.393 56.6936 577.896 60.2416C579.399 63.7895 580.172 67.5922 580.172 71.4324Z" fill="#272727"/>
<path opacity="0.2" d="M608.131 126.507L588.523 133.569L588.877 134.508L608.485 127.446L608.131 126.507Z" fill="black"/>
<path opacity="0.2" d="M608.131 184.512L588.523 191.575L588.877 192.513L608.485 185.451L608.131 184.512Z" fill="black"/>
<path opacity="0.2" d="M608.131 246.518L588.523 253.581L588.877 254.519L608.485 247.457L608.131 246.518Z" fill="black"/>
<path opacity="0.2" d="M597.858 308.542L588.312 313.022L588.755 313.923L598.301 309.443L597.858 308.542Z" fill="black"/>
<path d="M406.743 293.193L394.827 318.905L373.041 365.92V282.762L406.743 293.193Z" fill="#9F616A"/>
<path d="M539.142 187.96C539.142 223.168 505.847 217.842 464.776 217.842C423.705 217.842 390.41 223.168 390.41 187.96C390.41 152.752 406.673 90.3441 464.776 90.3441C524.88 90.3441 539.142 152.752 539.142 187.96Z" fill="#2F2E41"/>
<path d="M577.461 311.344L580.172 327.906V442.086C580.183 447.135 578.847 452.099 576.295 456.488L549.068 409.813L539.259 312.064L536.815 287.652L573.708 288.412L577.461 311.344Z" fill="#9F616A"/>
<path d="M580.172 307.324C578.863 303.164 576.643 296.133 574.096 288.292C569.616 274.481 564.134 258.13 560.882 250.339C554.673 235.467 523.037 241.428 523.037 241.428L414.649 237.458C414.649 237.458 410.609 236.938 392.434 234.577C384.814 233.587 378.176 244.028 373.041 256.499V295.753L398.294 297.633C396.263 304.561 395.099 311.703 394.827 318.905C394.541 328.756 396.32 339.767 404.002 346.598C420.561 361.359 425.89 427.805 425.89 427.805L414.24 471.329H550.265C554.192 471.33 558.082 470.574 561.71 469.104C565.339 467.635 568.636 465.481 571.413 462.765C574.191 460.05 576.394 456.826 577.896 453.278C579.399 449.73 580.172 445.927 580.172 442.086V425.965C571.59 412.384 564.543 405.553 564.543 405.553L540.21 311.974L577.461 311.344L580.172 311.294V307.324Z" fill="#2F2E41"/>
<path d="M503.433 199.892C522.976 180.783 522.976 149.803 503.433 130.695C483.891 111.587 452.206 111.587 432.664 130.695C413.122 149.803 413.122 180.783 432.664 199.892C452.206 219 483.891 219 503.433 199.892Z" fill="#9F616A"/>
<path d="M406.709 164.054H426.502L435.233 140.148L436.979 164.054H446.439L451.533 150.109L452.551 164.054H522.843C522.843 150.317 517.262 137.142 507.327 127.429C497.393 117.715 483.919 112.258 469.87 112.258H459.682C445.633 112.258 432.159 117.715 422.225 127.429C412.29 137.142 406.709 150.317 406.709 164.054Z" fill="#2F2E41"/>
<path d="M94 582.996L271.438 385.061L277.78 257.957L344.361 149.453L363.384 102.952C363.384 102.952 407.772 107.602 371.311 195.955L356.25 243.231C369.826 271.821 366.631 302.962 366.631 334.483V442.817C366.631 468.326 252.535 607.275 238.064 628.5L94 582.996Z" fill="#9E676F"/>
<path opacity="0.2" d="M358.165 158.648L344.928 152.287L345.379 151.389L357.609 157.266L376.071 109.939L377.026 110.296L358.165 158.648Z" fill="black"/>
<path d="M478.013 453.377C493.265 453.377 505.629 441.288 505.629 426.375C505.629 411.462 493.265 399.372 478.013 399.372C462.761 399.372 450.397 411.462 450.397 426.375C450.397 441.288 462.761 453.377 478.013 453.377Z" fill="#635DC2"/>
<path d="M413.575 445.585C423.861 445.585 432.199 437.432 432.199 427.375C432.199 417.318 423.861 409.165 413.575 409.165C403.29 409.165 394.952 417.318 394.952 427.375C394.952 437.432 403.29 445.585 413.575 445.585Z" fill="white"/>
<path d="M413.575 446.377C409.732 446.377 405.974 445.262 402.779 443.174C399.583 441.086 397.092 438.119 395.621 434.647C394.15 431.175 393.765 427.354 394.515 423.668C395.265 419.982 397.116 416.596 399.834 413.939C402.552 411.281 406.014 409.472 409.784 408.738C413.554 408.005 417.461 408.382 421.012 409.82C424.563 411.258 427.598 413.693 429.734 416.818C431.869 419.943 433.009 423.617 433.009 427.375C433.003 432.413 430.954 437.243 427.31 440.805C423.667 444.367 418.728 446.371 413.575 446.377ZM413.575 409.957C410.052 409.957 406.608 410.978 403.678 412.892C400.749 414.806 398.466 417.527 397.117 420.709C395.769 423.892 395.416 427.394 396.103 430.773C396.791 434.152 398.487 437.256 400.979 439.692C403.47 442.128 406.644 443.786 410.1 444.459C413.556 445.131 417.137 444.786 420.392 443.467C423.648 442.149 426.43 439.916 428.387 437.052C430.345 434.188 431.389 430.82 431.389 427.375C431.384 422.757 429.505 418.33 426.166 415.064C422.826 411.799 418.298 409.962 413.575 409.957Z" fill="#CBCBCB"/>
<path d="M417.568 433.709H399.417C399.395 433.709 399.372 433.707 399.35 433.703L407.934 419.165C407.987 419.074 408.063 418.999 408.155 418.946C408.247 418.894 408.351 418.866 408.457 418.866C408.564 418.866 408.668 418.894 408.76 418.946C408.852 418.999 408.928 419.074 408.981 419.165L414.742 428.921L415.018 429.388L417.568 433.709Z" fill="#2E302D"/>
<path d="M427.674 433.709H411.975L415.017 429.389L415.236 429.077L419.2 423.447C419.27 423.361 419.358 423.29 419.457 423.239C419.557 423.189 419.667 423.159 419.78 423.152C419.892 423.146 420.004 423.162 420.11 423.201C420.215 423.24 420.311 423.3 420.391 423.377C420.412 423.399 420.431 423.423 420.448 423.447L427.674 433.709Z" fill="#2E302D"/>
<path d="M541.428 445.585C551.713 445.585 560.051 437.432 560.051 427.375C560.051 417.318 551.713 409.165 541.428 409.165C531.142 409.165 522.804 417.318 522.804 427.375C522.804 437.432 531.142 445.585 541.428 445.585Z" fill="white"/>
<path d="M541.428 446.377C537.584 446.377 533.827 445.262 530.631 443.174C527.435 441.086 524.944 438.119 523.473 434.647C522.002 431.175 521.618 427.354 522.367 423.668C523.117 419.982 524.968 416.596 527.686 413.939C530.404 411.281 533.867 409.472 537.636 408.738C541.406 408.005 545.313 408.382 548.864 409.82C552.415 411.258 555.451 413.693 557.586 416.818C559.721 419.943 560.861 423.617 560.861 427.375C560.855 432.413 558.806 437.243 555.163 440.805C551.519 444.367 546.58 446.371 541.428 446.377ZM541.428 409.957C537.904 409.957 534.46 410.978 531.531 412.892C528.601 414.806 526.318 417.527 524.97 420.709C523.621 423.892 523.268 427.394 523.956 430.773C524.643 434.152 526.34 437.256 528.831 439.692C531.322 442.128 534.497 443.786 537.952 444.459C541.408 445.131 544.99 444.786 548.245 443.467C551.5 442.149 554.282 439.916 556.239 437.052C558.197 434.188 559.242 430.82 559.242 427.375C559.236 422.757 557.358 418.33 554.018 415.064C550.678 411.799 546.15 409.962 541.428 409.957Z" fill="#CBCBCB"/>
<path d="M549.121 425.439L548.515 426.032V421.744C548.515 421.515 548.422 421.294 548.255 421.132C548.089 420.969 547.864 420.878 547.629 420.878H534.34C534.224 420.878 534.108 420.9 534 420.943C533.892 420.987 533.794 421.05 533.712 421.131C533.629 421.211 533.564 421.307 533.519 421.412C533.474 421.517 533.451 421.63 533.451 421.744C533.451 421.858 533.474 421.971 533.519 422.077C533.564 422.182 533.629 422.277 533.712 422.358C533.794 422.438 533.892 422.502 534 422.546C534.108 422.589 534.224 422.611 534.34 422.611H546.743V426.032L546.138 425.439C546.014 425.318 545.856 425.236 545.684 425.202C545.512 425.169 545.334 425.186 545.172 425.251C545.01 425.317 544.872 425.428 544.775 425.57C544.677 425.713 544.625 425.88 544.625 426.052V426.095C544.625 426.324 544.719 426.545 544.885 426.707L547.003 428.778C547.085 428.858 547.183 428.922 547.29 428.966C547.398 429.009 547.513 429.032 547.629 429.032C547.745 429.032 547.861 429.009 547.968 428.966C548.076 428.922 548.173 428.858 548.255 428.778L550.373 426.707C550.54 426.545 550.633 426.324 550.633 426.095V426.052C550.633 425.88 550.581 425.713 550.484 425.57C550.386 425.428 550.248 425.317 550.086 425.251C549.924 425.186 549.746 425.169 549.574 425.202C549.402 425.236 549.244 425.318 549.121 425.439Z" fill="#2E302D"/>
<path d="M548.515 432.139H536.112V428.718L536.718 429.311C536.841 429.432 536.999 429.514 537.171 429.548C537.343 429.581 537.521 429.564 537.683 429.499C537.845 429.433 537.983 429.322 538.081 429.18C538.178 429.037 538.23 428.87 538.23 428.698V428.655C538.23 428.426 538.137 428.205 537.97 428.043L535.852 425.972C535.77 425.891 535.672 425.828 535.565 425.784C535.458 425.741 535.342 425.718 535.226 425.718C535.11 425.718 534.995 425.741 534.887 425.784C534.78 425.828 534.682 425.891 534.6 425.972L532.482 428.043C532.316 428.205 532.222 428.426 532.222 428.655V428.698C532.222 428.87 532.274 429.037 532.372 429.18C532.469 429.322 532.607 429.433 532.769 429.499C532.931 429.564 533.109 429.581 533.281 429.548C533.453 429.514 533.611 429.432 533.735 429.311L534.34 428.718V433.006C534.34 433.235 534.433 433.456 534.6 433.618C534.766 433.781 534.991 433.872 535.226 433.872H548.515C548.632 433.872 548.747 433.85 548.855 433.807C548.963 433.763 549.061 433.7 549.143 433.619C549.226 433.539 549.292 433.443 549.336 433.338C549.381 433.232 549.404 433.12 549.404 433.006C549.404 432.892 549.381 432.779 549.336 432.673C549.292 432.568 549.226 432.472 549.143 432.392C549.061 432.312 548.963 432.248 548.855 432.204C548.747 432.161 548.632 432.139 548.515 432.139Z" fill="#2E302D"/>
<path d="M429.905 77.5715H384.204V79.5717H429.905V77.5715Z" fill="white"/>
<path d="M499.457 77.5715H453.756V79.5717H499.457V77.5715Z" fill="white"/>
<path d="M569.009 77.5715H523.307V79.5717H569.009V77.5715Z" fill="white"/>
<path d="M429.905 383.599H384.204V385.6H429.905V383.599Z" fill="white"/>
<path d="M499.457 383.599H453.756V385.6H499.457V383.599Z" fill="white"/>
<path d="M569.009 383.599H523.307V385.6H569.009V383.599Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2_5">
<rect width="517" height="597" fill="white" transform="translate(94 32)"/>
</clipPath>
</defs>
       </svg>
       </div>
       <div className="right">
       <form id="form" name="contact" method="post" data-netlify="true" onSubmit={handleSubmit}>
       <input type="hidden" name="form-name" value="contact" />
       <label htmlFor="name">Name & Surname</label>
       <input type="text" name="name" required value={name} onChange={(e)=>setName(e.target.value)}/>
       <label htmlFor="email">Email</label>
       <input type="text" name="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <label htmlFor="message">Message</label>
       <textarea name="message" id="" cols="30" rows="10" required value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
       <button type='submit' className="btn">Send</button>
       </form>
       </div>
       </div>
       </Wrapper>
    )
};
export default Contact;
 const Wrapper=styled(motion.div)`
    margin:4rem auto;

    h2{
        text-align: center;
        color:#ebebeb;
        font-size:clamp(2rem,3vw,3rem);
        margin-top:4rem;
    }
    .container{
        margin-top:2rem;
        display:flex;
        justify-content: center;
        align-items: center; 
        padding:0% 30%;
        width:100%;
        height:80vh;
        .left,.right{
            flex:1;
            margin-top:6rem;
        }
       
        .right{
           display:grid;
           place-content: center;
            #form{
                display:grid;
                padding:0rem 4rem;
             label{
                    color:#ebebeb;
                    padding-bottom:.7rem;
                    text-indent:1rem;
                }
                input,textarea{
                    background:none;
                    color:#ebebeb;
                    border:2px solid #666464;
                    font-size:1rem;
                    width:27rem;
                    &:focus{
                        outline:none;
                    }
                    &:hover{
                        opacity:.7;
                    }
                }
                input{
                    padding:.8rem 0rem;
                  
                  
                    text-indent:.8rem;
                    margin-bottom:1.5rem;
                }
                textarea{
                    text-indent:.8rem;
                    height:8rem;
                   
                }
                .btn{
                    margin-top:1.5rem;
                    background:none;
                    color:#ebebeb;
                    font-size:clamp(.9rem,2vw,1rem);
                    padding:.8rem;
                    border:2px solid #666464;
                    cursor:pointer;
                    &:hover{
                        background:#ebebeb;
                        color:black;
                    }
                }
            }
        }
    }
    @media (max-width:950px){
        .container{
            display:grid;
            place-content: center;
           
        }
        svg{
            width:20rem;
            position:absolute;
            top:10rem;
            left:-4rem;
        }
        #form{
            position:relative;
        }
    }
    @media (max-width:550px) {
        input,textarea{
            max-width:25rem;
        }
        svg{
            left:0;
        }
       
    }
    @media (max-width:440px){
        overflow-x: hidden;
        svg{
            width:15rem;
        }
        input,textarea{
            max-width:17rem;
        }
    }
   
 `