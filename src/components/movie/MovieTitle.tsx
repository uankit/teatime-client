import React, { useState, useEffect } from 'react';

const MovieTitleGuess = () => {
  const movieTitle = "2046A";
  const revealedPositions = [0, 3]; // Positions to reveal (0-based index)

  const [inputs, setInputs] = useState(new Array(movieTitle.length).fill(''));

  useEffect(() => {
    const initialInputs = inputs.map((input, index) => 
      revealedPositions.includes(index) ? movieTitle[index] : ''
    );
    setInputs(initialInputs);
  }, []); // Empty dependency array ensures this runs once on component mount

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  const checkTitle = () => {
    const userTitle = inputs.join('');
    if (userTitle === movieTitle) {
      alert('Correct!');
    } else {
      alert('Try again!');
    }
  };


  return (
    <div className="title-container">
      <div className="input-container">
        {inputs.map((input, index) => (
          <input 
            key={index}
            type="text"
            maxLength={1}
            className="input-box"
            value={input}
            onChange={(event) => handleChange(event, index)}
            disabled={revealedPositions.includes(index)}
          />
        ))}
            
      </div>

      <div className='button-container'>
      <button onClick={checkTitle}>I'm</button>
      <button>I'm stuck</button>
      </div>
  
    </div>
  );
};

export default MovieTitleGuess;
