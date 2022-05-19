import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MoviesCard from './MoviesCard'
import "./styles.css"

const MoviesList = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get('https://ghibliapi.herokuapp.com/films').then((res) => {
      console.log(res.data)
      setMovies(res.data)
    })
  }, [])

  return (
    <div className='movie-container'>
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <MoviesCard movie={movie} />
          </div>
        )
      })}
    </div>
  )
}
export default MoviesList
