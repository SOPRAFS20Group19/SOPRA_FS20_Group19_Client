import styled from "styled-components";
import React from "react";

const Head = styled.svg`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const UserIcon = () => {
    return(
        <Head viewBox="0 0 96 96">
            <g width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="48" cy="48" r="46" fill="white" stroke="#003068" stroke-width="4"/>
                <path d="M47.6522 49.4348C34.5894 49.4348 24 60.0242 24 73.087V79H71.3043V73.087C71.3043 60.0242 60.7149 49.4348 47.6522 49.4348Z" fill="#94BFE9" stroke="black"/>
                <ellipse cx="47.6526" cy="28.7391" rx="17.7393" ry="17.7391" fill="#94BFE9" stroke="black" stroke-linecap="square"/>
            </g>
        </Head>

    );
};