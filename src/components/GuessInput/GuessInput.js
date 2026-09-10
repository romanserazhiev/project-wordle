function GuessInput({ onAddGuess, currentGuess, setCurrentGuess, disabled }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!currentGuess) return;

    onAddGuess(currentGuess);
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleFormSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={currentGuess}
        onChange={(event) => {
          setCurrentGuess(event.target.value);
        }}
        disabled={disabled}
        pattern="\w{5}"
        title="Provide a word with five letters"
      />
    </form>
  );
}

export default GuessInput;
