import styled from "styled-components";

export const RoundButton = styled.button`
  &:hover {
    transform: translateY(-2px);
  }
  padding: 0px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  width: 96px;
  height: 96px;
  border: none;
  border-radius: 100%;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  background: rgb(16, 89, 255);
  transition: all 0.3s ease;
  @media only screen and (max-width: 900px){
    font-size: 10px;
    width: 80px;
    height: 80px;
  }
  @media only screen and (max-width: 800px){
    width: 70px;
    height: 70px;
    &:hover {
    transform: translateY(0px);
  }
  }
  @media only screen and (max-width: 500px){
    width: 60px;
    height: 60px;
  }
`;
