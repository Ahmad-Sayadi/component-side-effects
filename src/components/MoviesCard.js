import React from "react"
import "./styles.css"
import MoviesCardHeader from "./MoviesCardHeader"


const MoviesCard =({movie})=>{
    return(
        <div className="movie-card">
            <MoviesCardHeader movie={movie}/>

        </div>
    )
}
export default MoviesCard;