import React from "react";
import { css } from "styled-components";
import { baseTextStyles } from "@/styles/CommonStyled";
import Input from "@/components/base/Input";

const CreateTaskInput = ({ handleInputChange, inputValue }) => {
  const processValue = (event) => {
    const inputControlValue = event.target.value;
    handleInputChange(inputControlValue);
  };

  return (
    <>
      <Input value={inputValue} processValue={processValue} css={InputCss} />
    </>
  );
};

export default CreateTaskInput;

const InputCss = css`
  ${baseTextStyles}
  width: 70%;
  height: 2em;
  padding: 1em;
  border: 1px solid #222;

  &:focus {
    outline: none;
  }
`;
