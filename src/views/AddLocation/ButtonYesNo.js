import styled from "styled-components";

export const ButtonYesNo = styled.button`
  &:hover {
    transform: translateY(-2px);
  }
  padding: 6px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
  text-align: left;
  color: ${props => (props.disabled ? "#66A3E0" : "#003068")};
  width: ${props => props.width || null};
  height: 35px;
  border: ${props => (props.disabled ? "2px solid #66A3E0" : "2px solid #003068")};
  border-radius: 5px;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  opacity: 1;
  background: ${props => (props.disabled ? "#003068" : "#66A3E0")};
  transition: all 0.3s ease;
  @media only screen and (max-width: 700px){
    font-size: 10px;
    height: 25px;
    padding: 3px;
    border: ${props => (props.disabled ? "1.5px solid #66A3E0" : "1.5px solid #003068")};
  }
`;
