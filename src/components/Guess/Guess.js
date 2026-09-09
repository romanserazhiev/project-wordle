import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const checkStatus = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((index) => {
        const status = checkStatus ? checkStatus[index].status : "";
        const letter = checkStatus ? checkStatus[index].letter : "";

        const className = status ? `cell ${status}` : "cell";

        return (
          <span key={index} className={className}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
