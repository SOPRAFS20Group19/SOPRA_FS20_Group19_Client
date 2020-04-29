import React from 'react';
import styled from 'styled-components';

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  background: ${props => props.checked ? "#003068" : '#66a3e0'};
  border-radius: 50%;
  border: ${props => props.checked ? "9px solid #66a3e0" : null};
`;