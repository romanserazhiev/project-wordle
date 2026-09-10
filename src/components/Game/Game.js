import React from "react";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";
import VisualKeyboard from "../VisualKeyboard";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const guessesWithStatus = guesses.map((guess) => ({
    word: guess,
    status: checkGuess(guess, answer),
  }));

  const lastGuess = guesses[guesses.length - 1];
  const hasWon = lastGuess === answer;
  const hasLost = !hasWon && guesses.length >= NUM_OF_GUESSES_ALLOWED;
  const isGameOver = hasWon || hasLost;

  function handleAddGuess(newGuess) {
    console.log(`Your guess is: ${newGuess.toUpperCase()}`);
    setGuesses((prevGuesses) => [...prevGuesses, newGuess]);
  }

  return (
    <>
      <GuessResults results={guessesWithStatus} answer={answer} />
      <GuessInput disabled={isGameOver} onAddGuess={handleAddGuess} />
      <VisualKeyboard results={guessesWithStatus} answer={answer} />
      {hasWon && <HappyBanner guessesAmmount={guesses.length} />}
      {hasLost && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
