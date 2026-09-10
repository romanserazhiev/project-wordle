import KeyboardKey from "../KeyboardKey";

function KeyboardRow({ keyStatuses, row }) {
  return (
    <div className="row">
      {row.map((letter, index) => {
        const status = keyStatuses[letter.toUpperCase()] || "";

        return <KeyboardKey key={index} letter={letter} status={status} />;
      })}
    </div>
  );
}

export default KeyboardRow;
