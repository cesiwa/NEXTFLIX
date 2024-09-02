import React from 'react'
import Movies from '@/mocks/movies.json'
import Genres from '@/mocks/genres.json'

import { FeaturedMovie } from '@/components/featured-movie'
import { Categories } from '@/components/categories'
import  { MoviesSection } from '@/components/movies-section'

function HomeContainer({ selectedCategory }: { selectedCategory: { id: string, movies: any[] } }) {

  const convertedCategories = Genres.genres.slice(0, 5).map(category => ({
    id: category.id.toString(),
    name: category.name,
  }));
  const selectedGenre = Genres.genres.find(genre => `${genre.id}` === selectedCategory.id)?.name;
  const selectedGenreName = selectedGenre ? selectedGenre : "Unknown Category";

  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} isCompact={true}/>
      <Categories categories={convertedCategories}/>
      { selectedCategory.movies.length > 0 && (
          <MoviesSection title={selectedGenreName} movies={selectedCategory.movies}/>
      )}
      <MoviesSection title="Popular Movies" movies={Movies.results.slice(1, 6)}/>
      <MoviesSection title="Your Favorites" movies={Movies.results.slice(7, 13)}/>
    </div>
  )
}

export default HomeContainer