import React, { ReactElement, useEffect, useState } from "react";
import PosterContainer from "./PosterContainer";
import FooterComponent from "../FooterComponent";
import ButtonContainer from "./ButtonContainer";
import { Movie } from "../../types/movie";
import styles from "../../styles/MovieTriviaPage.module.css";
import InputComponent from "../InputComponent";
import { Alert, notification } from "antd";

type Props = {
  movie: Movie;
  index: number
  blur: number[]
  setBlur: React.Dispatch<React.SetStateAction<number[]>>
};

const FooterChildren: React.FC<Props> = ({
  movie,
  setBlur,
  index,
  blur,
}): ReactElement => {
  const movieTitle = movie.title.toUpperCase();

  const generateRandomIndex = () => {
    const firstIndex = Math.floor(Math.random() * movieTitle.length);
    const secondIndex = Math.floor(Math.random() * movieTitle.length);
    const thirdIndex = Math.floor(Math.random() * movieTitle.length);
    return [firstIndex, secondIndex, thirdIndex];
  };

  const words = movieTitle.split(" ");

  const initialInputs = words.map((word) => new Array(word.length).fill(""));
  const [inputs, setInputs] = useState(initialInputs);
  const [correctWords, setCorrectWords] = useState<number[]>([]);

  const [revealedPositions, setRevealedPositions] = useState<number[]>([]);

  
  useEffect(() => {
    const positions = generateRandomIndex();
    setRevealedPositions(positions);
  }, []);

  useEffect(() => {
    const updatedInputs = inputs.map((wordInputs, wordIndex) =>
      wordInputs.map((_: any, charIndex: number) => {
        const globalIndex =
          words.slice(0, wordIndex).join(" ").length + wordIndex + charIndex;
        return revealedPositions.includes(globalIndex)
          ? movieTitle[globalIndex]
          : "";
      })
    );
    setInputs(updatedInputs);
  }, [revealedPositions]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    wordIndex: number,
    charIndex: number
  ) => {
    const newInputs = inputs.map((wordInputs, wi) =>
      wordInputs.map((input: any, ci: any) =>
        wi === wordIndex && ci === charIndex ? event.target.value : input
      )
    );
    setInputs(newInputs);
  };

  const checkTitle = () => {
    const userTitle = inputs
      .map((wordInputs) => wordInputs.join(""))
      .join(" ")
      .toUpperCase();
    const userWords = userTitle.split(" ");

    let newCorrectWords = [...correctWords];
    let allCorrect = true;

    userWords.forEach((word, index) => {
      if (word === words[index]) {
        if (!newCorrectWords.includes(index)) {
          newCorrectWords.push(index);
        }
      } else {
        allCorrect = false;
      }
    });

    if (allCorrect) {
      setBlur((prev) => {
        const newBlurStates = [...prev];
        newBlurStates[index] = 0;
        return newBlurStates;
      });
      
    } else {
      setCorrectWords(newCorrectWords);
      const newInputs = inputs.map((inputGroup, idx) => {
        if (!newCorrectWords.includes(idx)) {
          return inputGroup.map(() => "");
        }
        setBlur((prev) => {
          const newBlurStates = [...prev];
          newBlurStates[index] = blur[index]/1.5;
          return newBlurStates;
        });
        return inputGroup;
      });
      setInputs(newInputs);
    }
  };

  return (
    <>
      <div className={styles.titleContainer}>
        <div className={styles.inputContainer}>
          {inputs.map((wordInputs, wordIndex) => (
            <div key={wordIndex} className={styles.wordContainer}>
              {wordInputs.map((input: string, charIndex: number) => (
                <InputComponent
                  key={charIndex}
                  type="text"
                  maxLength={1}
                  value={input}
                  handleChange={(event) =>
                    handleChange(event, wordIndex, charIndex)
                  }
                />
              ))}
            </div>
          ))}
        </div>
        <ButtonContainer handleSubmit={() => checkTitle()} />
      </div>
    </>
  );
};

const RightContainer: React.FC<Props> = ({
  movie,
  setBlur,
  index,
  blur,
}): ReactElement => {
  return (
    <div className={styles.right}>
      <PosterContainer imageSrc={movie.poster} blur={blur[index]}/>
      <FooterComponent
        children={
          <FooterChildren
            movie={movie}
            setBlur={setBlur}
            index={index}
            blur={blur}
          />
        }
      />
    </div>
  );
};

export default RightContainer;
