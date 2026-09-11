function HappyBanner({ guessesAmount, onRestart }) {
  const plural = guessesAmount > 1;
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {guessesAmount} guess{plural && "es"}
        </strong>
        .
      </p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default HappyBanner;
