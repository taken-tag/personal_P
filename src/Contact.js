import React from 'react'
import {useState} from 'react'
import './contact.scss'



function Contact() {

    const  [message, setmessage]= useState(false)

const Handlesubmit= (e)=>{
 e.preventDefault();
 setmessage(true)

}

    return (
        <div className="contact" id="contact">
            <div className="left">
             <img src="https://image.freepik.com/free-vector/contact-concept-landing-page_52683-21298.jpg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={Handlesubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="message"/>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply Asap :)</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact
