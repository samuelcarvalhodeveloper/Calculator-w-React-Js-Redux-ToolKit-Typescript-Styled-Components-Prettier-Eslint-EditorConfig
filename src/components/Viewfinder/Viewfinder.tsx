import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import ViewfinderStyled from "./Styled";

function Viewfinder() {
  const value: string = useSelector(
    (state: RootState) => state.calculatorValue.value,
  );

  return (
    <ViewfinderStyled>
      <div className="main__logo">
        <h1>Calculator</h1>
      </div>
      <div className="main__label">
        <p>Result:</p>
      </div>
      <div className="main__viewfinder">
        <input
          type="text"
          className="main__input"
          value={value}
          disabled
        />
      </div>
    </ViewfinderStyled>
  );
}

export default Viewfinder;
