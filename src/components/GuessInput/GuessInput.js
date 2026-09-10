import React from "react";

function GuessInput({ onAddGuess, disabled }) {
  const [input, setInput] = React.useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!input) return;

    onAddGuess(input);
    setInput("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleFormSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
        disabled={disabled}
        pattern="\w{5}"
        title="Provide a word with five letters"
      />
    </form>
  );
}

export default GuessInput;
