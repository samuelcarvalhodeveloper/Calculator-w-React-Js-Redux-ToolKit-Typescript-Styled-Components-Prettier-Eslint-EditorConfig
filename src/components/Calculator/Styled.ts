import styled from "styled-components";

const CalculatorStyled = styled.main`
display: flex;
  justify-content: center;
  margin: 11.1rem 3rem;

  .main__container {
    width: 100%;
    max-width: 35rem;
    height: 62.8rem;
    overflow: auto;

    .main__content {
      width: 35rem;
      height: 62.8rem;
      border: .1rem solid #1E90FF;
      background: #D2E9FF;
      border-radius: 2rem;
      padding: 2rem;
    }
  }
`;

export default CalculatorStyled;
