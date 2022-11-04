import styled from "styled-components";

const KeypadStyled = styled.div`
  .main__group {
        padding: 2.6rem 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 1rem;

        .main__button {
          width: 7rem;
          height: 7rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 4rem;
          font-weight: 600;
          border-radius: 1rem;
          background: #75BBFF;
          border: .1rem solid #1E90FF;
          color: #00101F;
        }

        .main__button:hover {
          background: #47A4FF;
        }

        .main__button:active {
          background: #1E80E0;
        }

        .main__button:nth-child(1){
          background: #FFD700;
          border: .1rem solid #DFBC00;
        }

        .main__button:nth-child(1):hover {
          background: #DFBC00;
        }

        .main__button:nth-child(1):active {
          background: #BD9F00;
        }

        .main__button:nth-child(2){
          background: #003B75;
          color: #E1F0FF;
          border: .1rem solid #002952;
        }

        .main__button:nth-child(2):hover {
          background: #002952;
        }

        .main__button:nth-child(2):active {
          background: #001C38;
        }

        .main__button:nth-child(3){
          background: #003B75;
          color: #E1F0FF;
          border: .1rem solid #002952;
        }

        .main__button:nth-child(3):hover {
          background: #002952;
        }

        .main__button:nth-child(3):active {
          background: #001C38;
        }

        .main__button:nth-child(4){
          background: #FFD700;
          border: .1rem solid #DFBC00;
        }

        .main__button:nth-child(4):hover {
          background: #DFBC00;
        }

        .main__button:nth-child(4):active {
          background: #BD9F00;
        }
        .main__button:nth-child(8){
          background: #003B75;
          color: #E1F0FF;
          border: .1rem solid #002952;
        }

        .main__button:nth-child(8):hover {
          background: #002952;
        }

        .main__button:nth-child(8):active {
          background: #001C38;
        }

        .main__button:nth-child(12){
          background: #003B75;
          color: #E1F0FF;
          border: .1rem solid #002952;
        }

        .main__button:nth-child(12):hover {
          background: #002952;
        }

        .main__button:nth-child(12):active {
          background: #001C38;
        }

        .main__button:nth-child(16){
          background: #FFD700;
            border: .1rem solid #DFBC00;
          grid-column-start: 4;
          grid-column-end: 5;
          grid-row-start: 4;
          grid-row-end: 6;
          height: 100%;
        }

        .main__button:nth-child(16):hover {
          background: #DFBC00;
        }

        .main__button:nth-child(16):active {
          background: #BD9F00;
        }

        .main__button:nth-child(17){
          grid-column-start: 1;
          grid-column-end: 3;
          width: 100%;
        }

        .main__button:nth-child(18){
          background: #003B75;
          color: #E1F0FF;
          border: .1rem solid #002952;
        }

        .main__button:nth-child(18):hover {
          background: #002952;
        }

        .main__button:nth-child(18):active {
          background: #001C38;
        }
      }
`;

export default KeypadStyled;
