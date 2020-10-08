import React from 'react'
import MovieCard from './MovieCard';
import './MovieList.css'


function MovieList(props) {        
    return (
        <div className="movieList__container">
            {props.movies.map((el,i)=>{return <MovieCard title={el.title} description={el.description} posterUrl={el.posterUrl} rate={el.rate} key={el.key}/>} )}
        </div>
    )
}

export default MovieList
