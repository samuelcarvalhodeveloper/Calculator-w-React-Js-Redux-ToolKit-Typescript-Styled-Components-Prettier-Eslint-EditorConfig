import styled from "styled-components";

const ViewfinderStyled = styled.div`
  .main__logo {
        font-size: 2rem;
        font-weight: 600;
        width: 100%;
        padding: .8rem 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #003B75;
      }

      .main__label {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #003B75;
        padding: .8rem 1rem;
        font-weight: 600;
      }

      .main__viewfinder {
        width: 100%;
        position: relative;
        overflow: hidden;

        .main__input {
          width: 100%;
          height: 6rem;
          text-align: right;
          font-size: 4rem;
          border-radius: 1rem;
          border: 1px solid #C0E0FF;
          background: #E1F0FF;
          display: flex;
          justify-content: flex-end;
          color: #002952;
          font-weight: 600;
          padding: 0 1rem;
        }
      }
`;

export default ViewfinderStyled;
