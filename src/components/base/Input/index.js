import React from "react";
import styled from "styled-components";

const Input = ({ label, name, type = "text", value, defaultChecked, className, css, processValue }) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <StyledInput
        type={type}
        name={name}
        id={name}
        value={value}
        defaultChecked={defaultChecked}
        onChange={(e) => {processValue(e)}}
        className={className}
        css={css}
      />
    </>
  );
};

export default Input;

const StyledInput = styled.input`
  ${props => props.css}
`;