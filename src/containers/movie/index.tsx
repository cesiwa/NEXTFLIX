import React from 'react'
import { FeaturedMovie } from '@/components/featured-movie'

function MovieContainer({movie = {
    poster_path: "",
    title: "",
    overview: "",
  } , isCompact=true} : {movie:{poster_path:string, title:string, overview:string}, isCompact:boolean}) {
  return (
    <FeaturedMovie movie={movie} isCompact={isCompact}/>
  )
}

export default MovieContainer