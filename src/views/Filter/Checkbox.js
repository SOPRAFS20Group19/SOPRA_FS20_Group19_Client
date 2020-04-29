import React from "react";
import styled from "styled-components";
import {HiddenCheckbox} from './HiddenCheckbox'
import {StyledCheckbox} from "./StyledCheckbox";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
`;

export const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked} />
    </CheckboxContainer>
);