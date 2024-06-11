import {Card} from 'antd'
import React from 'react'
import { Movie } from '../../types/movie'

type MovieCardProps = {
  movie: Movie
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Card className="movie-card">
    <p>{movie.title}</p>
  </Card>
  )
}

export default MovieCard