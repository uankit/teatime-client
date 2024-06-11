import React, { ReactElement, useEffect, useState } from "react";
import MovieTitleGuess from "../movie/MovieTitle";
import PosterContainer from "./PosterContainer";
import FooterComponent from "../FooterComponent";
import InputComponent from "../InputComponent";
import ButtonContainer from "./ButtonContainer";
import { Movie } from "../../types/movie";

type Props = {
  movies: Movie[];
};

const FooterChildren: React.FC = (): ReactElement => {
  const movieTitle = "BATMAN";

  const generateRandomIndex = () => {
    const firstIndex = Math.floor(Math.random() * movieTitle.length);
    const secondIndex = Math.floor(Math.random() * movieTitle.length);
    return [firstIndex, secondIndex];
  };

  const [inputs, setInputs] = useState(new Array(movieTitle.length).fill(""));
  const [revealedPositions, setRevealedPositions] = useState<number[]>([]);

  useEffect(() => {
    const positions = generateRandomIndex();
    setRevealedPositions(positions);
  }, []);

  useEffect(() => {
    const initialInputs = inputs.map((input, index) =>
      revealedPositions.includes(index) ? movieTitle[index] : ""
    );    
    setInputs(initialInputs);
  }, [revealedPositions]);

  const handleChange = (event: any, index: number) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  const checkTitle = () => {
    const userTitle = inputs.join("");
    if (userTitle === movieTitle) {
      alert("Correct!");
    } else {
      alert("Try again!");
    }
  };

  return (
    <>
      <div className="input-container">
        {inputs.map((input, index) => (
          <InputComponent
            key={index}
            type={"text"}
            maxLength={1}
            value={input}
            disabled={revealedPositions.includes(index)}
            handleChange={(e) => handleChange(e, index)}
          />
        ))}
      </div>
      <ButtonContainer />
    </>
  );
};

const RightContainer: React.FC<Props> = ({ movies }): ReactElement => {
  return (
    <div className="right">
      <PosterContainer imageSrc="https://m.media-amazon.com/images/M/MV5BYmY4MzY5NDQtZjI5Ni00NjQ2LTg0YjUtNGJhNmFkN2Y3ODEyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg" />
      <FooterComponent children={<FooterChildren />} />
    </div>
  );
};

export default RightContainer;
