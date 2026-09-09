import React from "react";

function GuessInput({ onAddGuess }) {
  const [guess, setGuess] = React.useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!guess) return;

    onAddGuess(guess);
    console.log(`Your guess is: ${guess.toUpperCase()}`);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleFormSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value);
        }}
        pattern="\w{5}"
        title="Provide a word with five letters"
      />
    </form>
  );
}

export default GuessInput;
