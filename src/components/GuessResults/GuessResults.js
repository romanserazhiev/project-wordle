import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        const result = results[index];
        return <Guess key={index} status={result?.status} word={result?.word} />;
      })}
    </div>
  );
}

export default GuessResults;
