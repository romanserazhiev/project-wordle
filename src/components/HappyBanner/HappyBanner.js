function HappyBanner({ guessesAmmount, onRestart }) {
  const plural = guessesAmmount > 1;
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {guessesAmmount} guess{plural && "es"}
        </strong>
        .
      </p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default HappyBanner;
