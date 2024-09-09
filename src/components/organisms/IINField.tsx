import styled from "@emotion/styled";
import IINFieldBlock from "../molecules/IINFieldBlock";

const IINField = () => {
  return (
    <IINFieldStyled className="iin_field" style={{ marginTop: "3rem" }}>
      <div className="title-block">Подключите компанию</div>

      <IINFieldBlock />
    </IINFieldStyled>
  );
};

const IINFieldStyled = styled.div`
  .title-block {
    font-size: 1.8rem;
  }

  .input_field {
    width: 100%;
    max-width: 401px;

    @media (max-width: 480px) {
      width: 100%;
      max-width: 100%;

      .title-block {
        font-size: 1.8rem;
      }
    }
  }

  .iin_number {
    position: relative;

    svg {
      position: absolute;
      right: 34px;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0;

      transition: opacity 0.2s linear;

      &.active {
        opacity: 1;
      }
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }

  .iin_success {
    background-color: #94c325;
    margin-top: 1.6rem;

    color: #f9ffff;
    padding-block: 1.8rem;
    padding-left: 3rem;
    border-radius: 10px;
  }

  .city_field {
    margin-top: 5rem;

    @media (max-width: 480px) {
      margin-top: 3rem;
    }
  }

  .iin_error {
    color: red;
    font-size: 1.5rem;
    margin-top: 1.2rem;
  }

  .meet_field {
    input {
      margin-bottom: 1.6rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .access {
    font-size: 1.2rem;
    color: #8c8c8c;

    a {
      color: #02447f;
      text-decoration: underline;
    }

    margin-bottom: 1.6rem;
  }
`;

export default IINField;
