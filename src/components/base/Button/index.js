import React from 'react';
import styled from 'styled-components';
import { baseTextStyles } from '@/styles/CommonStyled';

const Button = ({ action: handleAction, css, className, children }) => {
  return ( 
    <ButtonWrapper onClick={handleAction} css={css} className={className}>
      {children}
    </ButtonWrapper>
   );
}
 
export default Button;

const ButtonWrapper = styled.button`
  ${baseTextStyles}
  ${props => props.css}
  display: flex;
  justify-content: center;
  min-width: 10px;
  padding: 0.7em 1.7em;
  border: 0px;
  cursor: pointer;
`;