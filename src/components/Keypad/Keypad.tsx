import { useDispatch } from "react-redux";
import {
  addButtonCharacters,
  result,
  clean,
  backspace,
} from "../../features/calculatorSlice/calculatorSlice";
import KeypadStyled from "./Styled";

function Keypad() {
  const displatch = useDispatch();
  function handleButtonClean(): void {
    displatch(clean());
  }
  function handleButtonClick(e: any): void {
    displatch(addButtonCharacters(e.target.innerText));
  }
  function handleBackspace(): void {
    displatch(backspace());
  }
  function handleResult(): void {
    displatch(result());
  }

  return (
    <KeypadStyled>
      <div className="main__group">
        <button
          type="button"
          className="main__button"
          onClick={handleButtonClean}>
          C
        </button>
        <button
          type="button"
          className="main__button"
          onClick={handleButtonClick}>
          /
        </button>
        <button
          type="button"
          className="main__button"
          onClick={handleButtonClick}>
          *
        </button>
        <button
          type="button"
          className="main__button"
          onClick={handleBackspace}>
          {"<"}
        </button>
        <button
          type="button"
          className="main__button"
          onClick={handleButtonClick}>
          7
        </button>
        <button
          type="button"
          className="main__button"
          onClick={handleButtonClick}>
          8
        </button>
        <button
          type="button"
          className="main__button"
          onClick={handleButtonClick}>
          9
        </button>
        <button
          type="button"
          className="main__button"
          onClick={handleButtonClick}>
          +
        </button>
        <button
          type="button"
          className="main__button"
          onClick={handleButtonClick}>
          4
        </button>
        <button
          type="button"
          className="main__button"
          onClick={handleButtonClick}>
          5
        </button>
        <button
          type="button"
          className="main__button"
          onClick={handleButtonClick}>
          6
        </button>
        <button
          type="button"
          className="main__button"
          onClick={handleButtonClick}>
          -
        </button>
        <button
          type="button"
          className="main__button"
          onClick={handleButtonClick}>
          1
        </button>
        <button
          type="button"
          className="main__button"
          onClick={handleButtonClick}>
          2
        </button>
        <button
          type="button"
          className="main__button"
          onClick={handleButtonClick}>
          3
        </button>
        <button
          type="button"
          className="main__button"
          onClick={handleResult}>
          =
        </button>
        <button
          type="button"
          className="main__button"
          onClick={handleButtonClick}>
          0
        </button>
        <button
          type="button"
          className="main__button"
          onClick={handleButtonClick}>
          .
        </button>
      </div>
    </KeypadStyled>
  );
}

export default Keypad;
