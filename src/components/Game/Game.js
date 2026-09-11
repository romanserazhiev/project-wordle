import React from "react";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import VisualKeyboard from "../VisualKeyboard";
import GameOverBanner from "../GameOverBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { WORDS } from "../../data";

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [answer, setAnswer] = React.useState(() => {
    const word = sample(WORDS);
    console.info({ answer: word });
    return word;
  });
  const guessesWithStatus = guesses.map((guess) => ({
    word: guess,
    status: checkGuess(guess, answer),
  }));

  const lastGuess = guesses[guesses.length - 1];
  const hasWon = lastGuess === answer;
  const hasLost = !hasWon && guesses.length >= NUM_OF_GUESSES_ALLOWED;
  const isGameOver = hasWon || hasLost;

  let bannerStatus = null;
  if (hasWon) {
    bannerStatus = "win";
  } else if (hasLost) {
    bannerStatus = "lose";
  }

  function handleAddGuess(newGuess) {
    setGuesses((prevGuesses) => [...prevGuesses, newGuess]);
  }

  function handleRestart() {
    const nextWord = sample(WORDS);
    console.info({ answer: nextWord });
    setAnswer(nextWord);
    setGuesses([]);
  }

  return (
    <>
      <GuessResults results={guessesWithStatus} answer={answer} />
      <GuessInput disabled={isGameOver} onAddGuess={handleAddGuess} />
      <VisualKeyboard results={guessesWithStatus} answer={answer} />
      <GameOverBanner status={bannerStatus} guessesCount={guesses.length} answer={answer} onRestart={handleRestart} />
    </>
  );
}

export default Game;
