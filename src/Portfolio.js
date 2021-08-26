import React, { useEffect } from 'react'
import './portfolio.scss'
import Portfoliolist from './Portfoliolist'
import {useState} from 'react'
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    DesignPortfolio,
    contentPortfolio
} from './Datalayer.js'

function Portfolio() {
    const [selected, setselected]= useState("featured")
    const [data, setdata]= useState([])
   
    const list =[
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },

        {
            id: "design",
            title: "Design App",
        },
        {
            id: "content",
            title: "Content App",
        }
    ]

    useEffect(()=>{
      
        switch(selected){
            case "featured":
                setdata(featuredPortfolio);
                break;
                case "web":
                    setdata(webPortfolio);
                    break;
                    case "mobile":
                        setdata(mobilePortfolio);
                        break;
                        case "design":
                            setdata(DesignPortfolio);
                            break;
                            case "content":
                                setdata(contentPortfolio);
                                break;
                            default:
                                setdata(featuredPortfolio)
        }
        

    },[selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
               {list.map(item=>(
                   <Portfoliolist title={item.title} 
                   active={selected === item.id} 
                   setselected={setselected}
                       id={item.id}
                   />
               ))}
            </ul>
            <div className="container">
              {data.map((d)=>(
                <div className="items">
                    <img src={d.img} alt=""/>
                    <h3>{d.title}</h3>
                </div>
                ))}   
            </div>
            
        </div>
    )
}

export default Portfolio
