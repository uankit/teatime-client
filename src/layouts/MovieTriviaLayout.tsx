import React, { ReactElement, useEffect, useRef, useState } from "react";
import LeftContainer from "../components/MovieTriviaComponent/LeftContainer";
import RightContainer from "../components/MovieTriviaComponent/RightContainer";
import { Alert, Carousel, notification } from "antd";
import { useMovie } from "../hooks/useMovie";
import styles from "../styles/MovieTriviaPage.module.css";

const MovieTriviaLayout: React.FC = (): ReactElement => {
  const { movies } = useMovie();
  const [blurStates, setBlurStates] = useState<number[]>([]);

  useEffect(() => {
    movies && setBlurStates(new Array(movies.length).fill(2))
  }, [movies])

  return (
    <>
    <Carousel arrows infinite={false}> 
      {movies.map((movie, index) => (
        <div className={styles.container}>
          <LeftContainer movie={movie} setBlur={setBlurStates} blur={blurStates} index={index} />
          <RightContainer movie={movie} setBlur={setBlurStates} blur={blurStates} index={index} />
          
        </div>
      ))}
    </Carousel>
    </>
  );
};

export default MovieTriviaLayout;
