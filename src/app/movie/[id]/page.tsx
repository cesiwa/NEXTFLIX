import React from 'react'
import MovieContainer from '@/containers/movie'

function MoviePage({ params } : { params: { id: string } }) {
    console.log(params)
  return (
    <div>MoviePage</div>
  )
}

export default MoviePage