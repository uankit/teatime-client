import React, { ReactElement } from "react";
import LeftContainer from "../components/MovieTriviaComponent/LeftContainer";
import RightContainer from "../components/MovieTriviaComponent/RightContainer";
import { Carousel, CollapseProps } from "antd";
import { ReactTyped } from "react-typed";
import { Movie } from "../types/movie";
import { useMovie } from "../hooks/useMovie";

const MovieTriviaLayout: React.FC = (): ReactElement => {
  const { movies } = useMovie();

  return (
    <Carousel arrows infinite={false}>
      {movies.map((movie) => (
        <div className="container">
          <LeftContainer movie={movie} />
          <RightContainer movie={movie} />
          </div>
      ))}
    </Carousel>
  );
};

export default MovieTriviaLayout;
