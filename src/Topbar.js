import React from 'react'
import {Person, Mail} from '@material-ui/icons'
import './topbar.scss'


function Topbar({menuOpen, setmenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
             <a href="#intro" className="logo" >Genius.</a>
             <div className="itemcontainer">
             <Person className="icon"/>
             <span className="span">91 8076 993 794</span>
             </div>
             <div className="itemcontainer">
             <Mail className="icon"/>
             <span className="span">vyash7433@gmail.com</span>
             </div>

            </div>
            <div className="right">            
        <div className="hamburger" onClick={()=>setmenuOpen(!menuOpen)}>
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
        </div> 
            </div>
        </div>
        </div>
    )
}

export default Topbar
