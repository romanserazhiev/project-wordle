function SadBanner({ answer, onRestart }) {
  return (
    <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default SadBanner;
