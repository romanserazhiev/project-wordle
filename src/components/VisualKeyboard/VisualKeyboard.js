import KeyboardRow from "../KeyboardRow";
import { KEYBOARDROWS } from "../../data";
import { range } from "../../utils";
import { getKeyStatuses } from "../../game-helpers";

function VisualKeyboard({ results }) {
  const keyStatuses = getKeyStatuses(results);
  return (
    <div className="keyboardRows">
      {range(KEYBOARDROWS.length).map((_, index) => (
        <KeyboardRow key={index} row={KEYBOARDROWS[index]} keyStatuses={keyStatuses} />
      ))}
    </div>
  );
}

export default VisualKeyboard;
