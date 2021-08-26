import React from 'react'
import './portfolio_list.scss'

function Portfoliolist({id, title, active, setselected}) {
    return (
        
            <li className={active ? "portfoliolist active": "portfoliolist"} onClick={()=> setselected(id)}>
             {title}
            </li>         

         
        
    )
}

export default Portfoliolist
