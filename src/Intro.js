import React from 'react'
import './intro.scss'
import {init} from "ityped"
import {useEffect, useRef} from 'react'
function Intro() {
   const textref = useRef()

   useEffect(()=>{
       init(textref.current, {
           showCursor: true,
           backDelay: 1500,
           backSpeed: 50,
           strings : ["Developer","Designer", "Content-Creator"]
       });
   },[]);
   

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="image_container">
                    <img src="https://www.freevector.com/uploads/vector/preview/29399/Smart-Boy-Character.jpg" alt="pic"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hii There, I'm </h2>
                    <h1>Yash Verma</h1>
                    <h3>Freelance <span ref={textref}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="https://image.flaticon.com/icons/png/512/57/57055.png" alt=""/>
                </a>

            </div>
        </div>
    )
}

export default Intro
