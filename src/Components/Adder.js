import React, { useState } from 'react'
import './Adder.css'
import { FaStar } from "react-icons/fa"
import { v4 as uuidv4 } from 'uuid'

function Adder(props) {

    const [hover, setHover] = useState(0)
    const [adderRating, setAdderRating] = useState(0)    
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [posterUrl,setPosterUrl] = useState('')
    
    return (
        <div className="Adder">            
            <h2>Add a movie</h2>
            <div className="Adder__form">
                <form>
                    <input onChange={(e)=>setTitle(e.target.value)} placeholder="Title"></input>
                    <input onChange={(e)=>setDescription(e.target.value)} placeholder="Description"></input>
                    <input onChange={(e)=>setPosterUrl(e.target.value)} placeholder="Poster URL"></input>
                    <div className="stars">
                    {[...Array(5)].map((el,i)=>{
                        return <label key={Math.random()*1000}>
                                <input className="starRadio" type="radio" key={Math.random()*1000} value={i+1} onClick={()=> setAdderRating(i+1)}/>
                                <FaStar className="star" color={i+1 <= (hover || adderRating) ? "yellow" : "grey"}  onMouseEnter={()=>setHover(i+1)} onMouseLeave={()=>setHover(0)}/>
                                </label>
                    } )}
                    </div>
                    <button onClick={(e)=>{props.movieHandler([{
                        title: title,
                        description: description,
                        posterUrl: posterUrl,
                        rate: adderRating,
                        key: uuidv4()
                    }])
                    e.preventDefault()} }>Submit</button>                             
                </form>
            </div>
        </div>
    )
}

export default Adder
