import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";

function GameOverBanner({ status, guessesCount, answer, onRestart }) {
  if (status === "win") {
    return <HappyBanner guessesAmount={guessesCount} onRestart={onRestart} />;
  }

  if (status === "lose") {
    return <SadBanner answer={answer} onRestart={onRestart} />;
  }

  return null;
}

export default GameOverBanner;
