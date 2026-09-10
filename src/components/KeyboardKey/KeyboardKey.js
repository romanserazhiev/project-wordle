function KeyboardKey({ letter, status }) {
  const className = status ? `key ${status}` : "key";

  return <div className={className}>{letter}</div>;
}

export default KeyboardKey;
