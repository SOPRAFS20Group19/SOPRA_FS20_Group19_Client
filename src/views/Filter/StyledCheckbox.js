import React from 'react';
import styled from 'styled-components';

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  background: ${props => props.checked ? "#66a3e0" : 'white'};
  border-radius: 50%;
  border: 3px solid #003068;
`;