import { range } from "../../utils";

function Guess({ status, word }) {
  return (
    <p className="guess">
      {range(5).map((index) => {
        const letter = word ? word[index] : "";
        const cellStatus = status ? status[index]?.status : "";
        const className = cellStatus ? `cell ${cellStatus}` : "cell";

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
