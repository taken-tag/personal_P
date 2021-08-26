import React from 'react'
import './testmonial.scss'

function Testimonials() {
  const data=[
   {
       id: 1,
       name: "kiara",
       title: "ceo of clothy",
       img: "https://st3.depositphotos.com/9970522/12733/i/950/depositphotos_127337686-stock-photo-female-software-developer-working-on.jpg",

       icon: "https://img.pngio.com/youtube-logo-icon-transparent-youtube-logo-youtube-logo-png-youtube-icon-png-3507_2480.png",
       desc: "lorem isum dollr sit emit constpating elit lorem isum dollr sit emit constpating elit",

   },

   {
    id: 2,
    name: "kunal",
    title: "Senior Developer",
    img: "https://i.pinimg.com/originals/c3/4f/15/c34f154f2083e62a50764a8cb075a8f2.jpg",
    icon: "https://img.pngio.com/youtube-logo-icon-transparent-youtube-logo-youtube-logo-png-youtube-icon-png-3507_2480.png",
    desc: "lorem isum dollr sit emit constpating elit lorem isum dollr sit emit constpating elit",
    featured: true,

},

{
    id: 3,
    name: "Nikhil",
    title: "Senior Developer",
    img: "https://www.gngmodels.com/wp-content/uploads/2018/04/topmodel1-512x768.jpg",
    icon: "https://img.pngio.com/youtube-logo-icon-transparent-youtube-logo-youtube-logo-png-youtube-icon-png-3507_2480.png",
    desc: "  lorem isum dollr sit emit constpating elit lorem isum dollr sit emit constpating elit  ",

},
  ]



    return (
        <div className="testimonial" id="testimonial">
            <h1>Testimonials</h1>
            <div className="container">
            {data.map(d=>(
                <div className={d.featured ? "card featured": "card"}>
                    <div className="top">
                        <img className="left" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7hcIlckthDgGr8NDCBXdVaSB7j0ig3dpzlw&usqp=CAU" alt=""/>
                        <img className="user" src={d.img} alt=""/>
                        <img className="right" src={d.icon} alt=""/>
                    </div>
                    <div className="centre"> {d.desc} </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
