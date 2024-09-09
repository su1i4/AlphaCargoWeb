import styled from "@emotion/styled";

const Map = () => {
  return (
    <div className="ltl_cargo">
        <div className="title">Пункты Альфа Карго в <LTLSpan>России</LTLSpan></div>
    </div>
  );
}

const LTLSpan = styled.span`
    color: #94C325;
    text-decoration: underline;
`

export default Map;
