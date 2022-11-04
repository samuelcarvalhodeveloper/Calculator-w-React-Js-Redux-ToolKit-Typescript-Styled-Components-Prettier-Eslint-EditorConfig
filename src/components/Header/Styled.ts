import styled from "styled-components";

const HeaderStyled = styled.header`
  background: #E2F0FF;
  border-bottom: .1rem solid #1E90FF;
  width: 100%;

  .header__center {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 132rem;
    margin: 0 auto;
    padding: 1rem 3rem;

    .header__logo {
      height: 4rem;
    }
  }
`;

export default HeaderStyled;
