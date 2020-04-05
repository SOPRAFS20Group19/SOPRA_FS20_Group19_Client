import styled from "styled-components";
import React from "react";

const Filter = styled.svg`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const FilterIcon = props => {
    return(
        <Filter viewBox="0 0 96 96" {...props}>
            <g width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="48" cy="48" r="46" fill="white" stroke="#003068" stroke-width="4"/>
            <rect x="41.6804" y="48.0421" width="12.6393" height="37.9744" fill="#94BFE9" stroke="black"/>
            <path d="M74.8649 20.2033L48 68.7801L21.1351 20.2033L74.8649 20.2033Z" fill="#94BFE9" stroke="black"/>
            <rect x="42.2295" y="51.9963" width="11.541" height="23.3846" fill="#94BFE9"/>
            </g>
        </Filter>

    );
};