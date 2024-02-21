import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <DisplayDiv> 
        {displayedValue}
        <StyledIcon style={{ '--size': 24 + 'px' }}>
          <Icon id='chevron-down' stroke-width={1} size={24}/>
        </StyledIcon>
      </DisplayDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

const StyledSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`

const DisplayDiv = styled.div `
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  padding: 12px 16px;
  padding-right: 52px;
  font-size: ${16/16}rem;

  ${StyledSelect}:focus + & {
    outline: 1px dotted #212121;  
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${StyledSelect}:hover + & {
    color: ${COLORS.black};
  }
`

const StyledIcon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`

export default Select;
