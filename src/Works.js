import React from 'react'
import './work.scss'
import {useState} from 'react'

function Works() {
    const [slider, setslider]= useState(0)
 const data= [
     {
  id: 1,
  title: "Web Application",
  img: "https://png.pngtree.com/png-vector/20201230/ourmid/pngtree-black-mobile-phone-mockup-png-png-image_2674011.jpg",
  desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",     },

  {
    id: 2,
    title: "Mobile App",
    img: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/117249728/original/2a7dd6c90343abed444a718a5f90d502c51dad7b/design-a-professional-and-responsive-website.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
  },

  {
    id: 3,
    title: "Branding",
    img: "https://cdn.dribbble.com/users/2151039/screenshots/14824606/media/4e5aac6675b64d3f723ddfc597cd7a06.jpg?compress=1&resize=400x300",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
  },
 ]

 const handleClick = (way)=>{
  way=== "left" ? setslider(slider > 0 ? slider-1 : 2):
  setslider(slider<data.length -1 ? slider+1 : 0)
 }

    return (
        <div className="work" id="work">
            <div className="slider" style={{transform:`translateX(-${slider* 100}vw)`}}>
                {data.map(d=>(<div className="container">
                 <div className="items">
                     <div className="left">
                         <div className="left_container">
                         <div className="img_container">
                             <img src="https://png.pngtree.com/png-vector/20201230/ourmid/pngtree-black-mobile-phone-mockup-png-png-image_2674011.jpg" alt=""/>
                         </div>
                         <h2>{d.title}</h2>
                         <p>{d.desc}
                         </p>
                         <span>Projects</span>
                         </div>
                     </div>
                     <div className="right">
                         <img src= "https://cdn.dribbble.com/users/1774675/screenshots/15040336/media/d2e0646a9cada48cdfdeba6f4947d488.png?compress=1&resize=400x300"/>
                     </div>
                 </div>
                </div>
                ))}
            </div>
            <img className="arrow left" src="https://icons-for-free.com/iconfiles/png/512/arrow+left+chevron+chevronleft+left+left+icon+icon-1320185731545502691.png" alt="" onClick={()=>handleClick("left")}/>
            <img className="arrow right" src="https://icons-for-free.com/iconfiles/png/512/arrow+left+chevron+chevronleft+left+left+icon+icon-1320185731545502691.png" alt="" onClick={()=>handleClick()}/>
        </div>
    )
}

export default Works
