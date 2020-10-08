import React, { useState } from 'react'
import './Filter.css'
import { FaStar } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"

function Filter(props) {

    const [hover, setHover] = useState(0)
    const [filterRate, setfilterRate] = useState(0)
    
        return (
        <div className="Filter">
            <div className="Filter__searchText">
                <input type="text"  onChange={(e)=>props.inputHandler(e.target.value)}></input>
                <AiOutlineSearch className="Filter__searchText__img"/>
            </div>
            <div className="Filter__searchStars">
            {[...Array(5)].map((el,i)=>{
                return <label  key={Math.random()*1000}>
                        <input className="starRadio" type="radio" value={i+1}  onClick={()=> setfilterRate(i+1)} onChange={()=>props.rateHandler(i+1)} />
                        <FaStar className="star" color={i+1 <= (hover || filterRate) ? "yellow" : "grey"} onMouseEnter={()=>setHover(i+1)} onMouseLeave={()=>setHover(0)}/>
                        </label>
            } )}
            </div>            
        </div>
    )
}

export default Filter
