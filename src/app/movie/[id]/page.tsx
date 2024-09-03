import React from 'react'
import Movies from '@/mocks/movies.json'
import MovieContainer from '@/containers/movie'
import { notFound } from 'next/navigation'


 function MoviePage({ params, searchParams} : { params: { id: string }, searchParams : {error: boolean}} ) {


  const movieDetail = Movies.results.find((movie) => {movie.id.toString() === params.id})
  if(movieDetail){
    notFound();
  }
  if(searchParams.error){
    throw new Error('An error occurred')
  }

  return (
   <MovieContainer movie={movieDetail || { poster_path: '', title: '', overview: '' }} isCompact={false}/>
  )
}

export default MoviePage