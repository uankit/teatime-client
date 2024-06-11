import React, { ReactElement, useEffect, useState } from "react";
import MovieTitleGuess from "../movie/MovieTitle";
import PosterContainer from "./PosterContainer";
import FooterComponent from "../FooterComponent";
import InputComponent from "../InputComponent";
import ButtonContainer from "./ButtonContainer";
import { Movie } from "../../types/movie";

type Props = {
  movie: Movie;
};

const FooterChildren: React.FC<Props> = ({movie}): ReactElement => {
  const movieTitle = movie.title;

  const generateRandomIndex = () => {
    const firstIndex = Math.floor(Math.random() * movieTitle.length);
    const secondIndex = Math.floor(Math.random() * movieTitle.length);
    return [firstIndex, secondIndex];
  };

//   const [inputs, setInputs] = useState(new Array(movieTitle.length).fill(""));
const words = movieTitle.split(" ");

const initialInputs = words.map(word => new Array(word.length).fill(''));  
const [inputs, setInputs] = useState(initialInputs);
const [revealedPositions, setRevealedPositions] = useState<number[]>([]);

  useEffect(() => {
    const positions = generateRandomIndex();
    setRevealedPositions(positions);
  }, []);

//   useEffect(() => {
//     const initialInputs = inputs.map((input, index) =>
//       revealedPositions.includes(index) ? movieTitle[index] : ""
//     );    
//     setInputs(initialInputs);
//   }, [revealedPositions]);

useEffect(() => {
    const updatedInputs = inputs.map((wordInputs, wordIndex) =>
      wordInputs.map((_: any, charIndex: number) => {
        const globalIndex = words.slice(0, wordIndex).join(' ').length + wordIndex + charIndex;
        return revealedPositions.includes(globalIndex) ? movieTitle[globalIndex] : '';
      })
    );
    setInputs(updatedInputs);
  }, [revealedPositions]);

//   const handleChange = (event: any, index: number) => {
//     const newInputs = [...inputs];
//     newInputs[index] = event.target.value;
//     setInputs(newInputs);
//   };

//   const checkTitle = () => {
//     const userTitle = inputs.join("");
//     if (userTitle === movieTitle) {
//       alert("Correct!");
//     } else {
//       alert("Try again!");
//     }
//   };

const handleChange = (event: React.ChangeEvent<HTMLInputElement>, wordIndex: number, charIndex: number) => {
    const newInputs = inputs.map((wordInputs, wi) =>
      wordInputs.map((input: any, ci: any) =>
        wi === wordIndex && ci === charIndex ? event.target.value : input
      )
    );
    setInputs(newInputs);
  };

  const checkTitle = () => {
    const userTitle = inputs.map(wordInputs => wordInputs.join('')).join(' ');
    if (userTitle === movieTitle) {
      alert('Correct!');
    } else {
      alert('Try again!');
    }
  };

  return (
    <>
    <div className="title-container">
      <div className="input-container">
        {inputs.map((wordInputs, wordIndex) => (
          <div key={wordIndex} className="word-container">
            {wordInputs.map((input: string, charIndex: number) => (
              <input 
                key={charIndex}
                type="text"
                maxLength={1}
                className="input-box"
                value={input}
                onChange={(event) => handleChange(event, wordIndex, charIndex)}
                disabled={revealedPositions.includes(
                  words.slice(0, wordIndex).join(' ').length + wordIndex + charIndex
                )}
              />
            ))}
          </div>
        ))}
      </div>
      <ButtonContainer />
    </div>
    </>
  );
};

const RightContainer: React.FC<Props> = ({ movie }): ReactElement => {
  return (
    <div className="right">
      <PosterContainer imageSrc={movie.poster} />
      <FooterComponent children={<FooterChildren movie={movie} />} />
    </div>
  );
};

export default RightContainer;
