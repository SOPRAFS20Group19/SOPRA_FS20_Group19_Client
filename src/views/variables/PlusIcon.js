import styled from "styled-components";
import React from "react";

const Plus = styled.svg`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PlusIcon = props => {
    return(
        <Plus viewBox="0 0 96 96" {...props}>
            <g width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="48" cy="48" r="46" fill="white" stroke="#003068" stroke-width="4"/>
                <line x1="11" y1="48" x2="84" y2="48" stroke="#66A3E0" stroke-width="6"/>
                <line x1="48" y1="85" x2="48" y2="12" stroke="#66A3E0" stroke-width="6"/>
            </g>
        </Plus>
    );
};