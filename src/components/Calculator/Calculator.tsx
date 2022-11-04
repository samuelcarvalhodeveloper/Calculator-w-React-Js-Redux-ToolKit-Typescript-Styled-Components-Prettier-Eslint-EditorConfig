import CalculatorStyled from "./Styled";
import Viewfinder from "../Viewfinder/Viewfinder";
import Keypad from "../Keypad/Keypad";

function Calculator() {
  return (
    <CalculatorStyled>
      <div className="main__container">
        <div className="main__content">
          <Viewfinder />
          <Keypad />
        </div>
      </div>
    </CalculatorStyled>
  );
}

export default Calculator;
