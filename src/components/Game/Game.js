import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import HappyBanner from "../HappyBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import SadBanner from "../SadBanner/SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [currentGuess, setCurrentGuess] = React.useState("");

  const lastGuess = guesses[guesses.length - 1];
  const hasWon = lastGuess === answer;
  const hasLost = !hasWon && guesses.length >= NUM_OF_GUESSES_ALLOWED;
  const isGameOver = hasWon || hasLost;

  function handleAddGuess(newGuess) {
    console.log(`Your guess is: ${currentGuess.toUpperCase()}`);
    setCurrentGuess("");
    setGuesses([...guesses, newGuess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} onAddGuess={handleAddGuess} />
      {hasWon && <HappyBanner guessesAmmount={guesses.length} />}
      {hasLost && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
