import React from 'react'
import "./styles.css"

const MoviesCardHeader = ({ movie }) => {
  return (
    <div className='header-wrapper' >
      <div className="header-text">
        <h1>{movie.original_title_romanised}</h1>
        <h2>{movie.original_title}</h2>
      </div>

      <div className='header-image'>
        <img src={movie.image} alt="movie.username" className="image-size"/>
      </div>
    </div>
  )
}
export default MoviesCardHeader
