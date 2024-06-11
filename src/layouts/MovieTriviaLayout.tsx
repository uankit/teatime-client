import React, { ReactElement } from 'react'
import LeftContainer from '../components/MovieTriviaComponent/LeftContainer'
import RightContainer from '../components/MovieTriviaComponent/RightContainer'
import { CollapseProps } from 'antd';
import { ReactTyped } from 'react-typed';
import { Movie } from '../types/movie';

const MovieTriviaLayout:React.FC = ():ReactElement => {
    const movies: Movie[] = [
        {
          title: "The Shawshank Redemption",
          year: "1994",
          genre: "Drama",
          director: "Frank Darabont",
          writer: "Stephen King, Frank Darabont",
          actors: "Tim Robbins, Morgan Freeman, Bob Gunton",
          plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          awards: "Nominated for 7 Oscars. Another 21 wins & 36 nominations.",
          poster: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
        },
        {
          title: "The Godfather",
          year: "1972",
          genre: "Crime, Drama",
          director: "Francis Ford Coppola",
          writer: "Mario Puzo, Francis Ford Coppola",
          actors: "Marlon Brando, Al Pacino, James Caan",
          plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
          awards: "Won 3 Oscars. Another 31 wins & 30 nominations.",
          poster: "https://m.media-amazon.com/images/I/51IUFk5A3iL._AC_.jpg",
        },
        {
          title: "Inception",
          year: "2010",
          genre: "Action, Adventure, Sci-Fi",
          director: "Christopher Nolan",
          writer: "Christopher Nolan",
          actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
          plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
          awards: "Won 4 Oscars. Another 152 wins & 218 nominations.",
          poster: "https://m.media-amazon.com/images/I/51nsovxeiKL._AC_.jpg",
        },
      ];

      
  return (
    <div className="container">
        <LeftContainer movies={movies}/>
        <RightContainer movies={movies}/>
    </div>
  )
}

export default MovieTriviaLayout