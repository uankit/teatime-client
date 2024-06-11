import { ReactElement, useState } from "react";
import VideoComponent from "../components/VideoComponent";
import videoSrc from "../assets/videos/movie_start.mp4";
import MovieTriviaLayout from "../layouts/MovieTriviaLayout";

const MovieTriviaPage: React.FC = (): ReactElement => {
  const [videoEnded, setVideoEnded] = useState<boolean>(false);
  return (
    <>
      {videoEnded ? (
        <MovieTriviaLayout />
      ) : (
        <VideoComponent
          src={videoSrc}
          width={"100%"}
          height={"100%"}
          onVideoEnd={() => setVideoEnded(true)}
        />
      )}
    </>
  );
};

export default MovieTriviaPage;
